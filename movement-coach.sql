-- Movement Coach (physical therapist) for Makos: a PAID add-on ($149/mo), not part of team dues.
-- Every player starts locked (movement_limit 0). A coach turns it on per player once they pay.
-- Run once in the Supabase SQL editor (project rvmvwijyxeghzchyxeht).

-- 1. Role
alter table public.family_access drop constraint if exists family_access_role_check;
alter table public.family_access add constraint family_access_role_check check (role in ('family', 'coach', 'pt'));

create or replace function public.is_pt() returns boolean
  language sql stable security definer set search_path = public as
  $$ select exists (select 1 from public.family_access where lower(email) = public.my_email() and role = 'pt') $$;

-- 2. Who each video is for
alter table public.cage_feedback add column if not exists reviewer text not null default 'coach';
alter table public.cage_feedback drop constraint if exists cage_feedback_reviewer_check;
alter table public.cage_feedback add constraint cage_feedback_reviewer_check check (reviewer in ('coach', 'pt'));

drop policy if exists "pt reads movement feedback" on public.cage_feedback;
create policy "pt reads movement feedback" on public.cage_feedback for select to authenticated using (public.is_pt() and reviewer = 'pt');
drop policy if exists "pt replies movement feedback" on public.cage_feedback;
create policy "pt replies movement feedback" on public.cage_feedback for update to authenticated
  using (public.is_pt() and reviewer = 'pt') with check (public.is_pt() and reviewer = 'pt');

-- Videos live at makos-11u/<player_id>/...
drop policy if exists "pt videos read" on storage.objects;
create policy "pt videos read" on storage.objects for select to authenticated
  using (bucket_id = 'cage-videos' and public.is_pt() and exists (
    select 1 from public.cage_feedback f where f.reviewer = 'pt' and (f.video_path = name or f.coach_audio_path = name)));
drop policy if exists "pt voiceover upload" on storage.objects;
create policy "pt voiceover upload" on storage.objects for insert to authenticated
  with check (bucket_id = 'cage-videos' and public.is_pt() and (storage.foldername(name))[2] in (
    select player_id from public.cage_feedback where reviewer = 'pt'));

-- 3. Paid allowance: movement checks per month (0 = not paid)
alter table public.players add column if not exists movement_limit int not null default 0;

-- Families can update their own player row (points), so only a coach may change the allowance
create or replace function public.lock_movement_limit() returns trigger language plpgsql security definer set search_path = public as $$
begin
  if not public.is_coach() and new.movement_limit is distinct from old.movement_limit then
    raise exception 'MOVEMENT_LIMIT_LOCKED' using errcode = 'P0001';
  end if;
  return new;
end $$;
drop trigger if exists players_movement_lock on public.players;
create trigger players_movement_lock before update on public.players for each row execute function public.lock_movement_limit();

create or replace function public.movement_used(pid text) returns int language sql stable security definer set search_path = public as
  $$ select count(*)::int from public.cage_feedback where player_id = pid and reviewer = 'pt' and video_path is not null
       and to_char(created_at at time zone 'America/Detroit', 'YYYY-MM') = to_char(now() at time zone 'America/Detroit', 'YYYY-MM') $$;

create or replace function public.movement_status(pid text) returns json language sql stable security definer set search_path = public as
  $$ select json_build_object('allowed', coalesce(p.movement_limit, 0), 'used', public.movement_used(pid),
       'left', greatest(coalesce(p.movement_limit, 0) - public.movement_used(pid), 0))
     from public.players p where p.id = pid and (public.is_coach() or pid in (select public.my_player_ids())) $$;

-- Hard stop: no movement video without a paid allowance, even outside the app
create or replace function public.enforce_movement_limit() returns trigger language plpgsql security definer set search_path = public as $$
begin
  if new.reviewer = 'pt' and new.video_path is not null and not public.is_coach()
     and public.movement_used(new.player_id) >= coalesce((select movement_limit from public.players where id = new.player_id), 0) then
    raise exception 'VIDEO_LIMIT_REACHED' using errcode = 'P0001';
  end if;
  return new;
end $$;
drop trigger if exists cage_feedback_movement_limit on public.cage_feedback;
create trigger cage_feedback_movement_limit before insert on public.cage_feedback for each row execute function public.enforce_movement_limit();

-- Families can't move a video between coaches (or turn a row into a video) after sending it
create or replace function public.block_feedback_reroute() returns trigger language plpgsql security definer set search_path = public as $$
begin
  if not public.is_coach() and (new.video_path is distinct from old.video_path or new.reviewer is distinct from old.reviewer) then
    raise exception 'VIDEO_PATH_LOCKED' using errcode = 'P0001';
  end if;
  return new;
end $$;
drop trigger if exists cage_feedback_reroute_lock on public.cage_feedback;
create trigger cage_feedback_reroute_lock before update on public.cage_feedback for each row execute function public.block_feedback_reroute();

grant execute on function public.is_pt(), public.movement_used(text), public.movement_status(text) to authenticated;
select 'makos movement coach ready' as status;
