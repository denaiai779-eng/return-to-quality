-- Return to Quality: lock the app to Makos families and coaches only.
-- Run AFTER the login version of the app is live and sign-in emails work.

-- Who is allowed in: one row per (email, player). Coaches have role 'coach' and no player.
create table if not exists public.family_access (
  email text not null,
  player_id text references public.players(id) on delete cascade,
  role text not null default 'family' check (role in ('family', 'coach')),
  team_id text not null default 'makos-11u',
  added_at timestamptz not null default now(),
  unique (email, player_id)
);
create index if not exists family_access_email_idx on public.family_access (lower(email));

create or replace function public.my_email() returns text
  language sql stable as $$ select lower(coalesce(auth.jwt() ->> 'email', '')) $$;

create or replace function public.is_coach() returns boolean
  language sql stable security definer set search_path = public as
  $$ select exists (select 1 from public.family_access where lower(email) = public.my_email() and role = 'coach') $$;

create or replace function public.is_member() returns boolean
  language sql stable security definer set search_path = public as
  $$ select exists (select 1 from public.family_access where lower(email) = public.my_email()) $$;

create or replace function public.my_player_ids() returns setof text
  language sql stable security definer set search_path = public as
  $$ select player_id from public.family_access where lower(email) = public.my_email() and player_id is not null $$;

-- Lets the sign-in screen check an email before sending a code (returns only true/false).
create or replace function public.email_allowed(check_email text) returns boolean
  language sql stable security definer set search_path = public as
  $$ select exists (select 1 from public.family_access where lower(email) = lower(trim(check_email))) $$;
grant execute on function public.email_allowed(text) to anon, authenticated;

alter table public.teams enable row level security;
alter table public.players enable row level security;
alter table public.log enable row level security;
alter table public.cage_plans enable row level security;
alter table public.cage_feedback enable row level security;
alter table public.family_access enable row level security;

-- teams / players: any member can read (leaderboard); families update only their own player's points
create policy "members read teams" on public.teams for select to authenticated using (public.is_member());
create policy "members read players" on public.players for select to authenticated using (public.is_member());
create policy "update own player" on public.players for update to authenticated
  using (public.is_coach() or id in (select public.my_player_ids())) with check (public.is_coach() or id in (select public.my_player_ids()));
create policy "coach manages players" on public.players for all to authenticated using (public.is_coach()) with check (public.is_coach());

-- log: families see and add their own; coach sees all
create policy "read own log" on public.log for select to authenticated using (public.is_coach() or player_id in (select public.my_player_ids()));
create policy "add own log" on public.log for insert to authenticated with check (public.is_coach() or player_id in (select public.my_player_ids()));
create policy "coach manages log" on public.log for all to authenticated using (public.is_coach()) with check (public.is_coach());

-- cage plans: families read their own; only coaches assign
create policy "read own plan" on public.cage_plans for select to authenticated using (public.is_coach() or player_id in (select public.my_player_ids()));
create policy "coach manages plans" on public.cage_plans for all to authenticated using (public.is_coach()) with check (public.is_coach());

-- feedback: families add/read/annotate their own; coach does everything
create policy "read own feedback" on public.cage_feedback for select to authenticated using (public.is_coach() or player_id in (select public.my_player_ids()));
create policy "add own feedback" on public.cage_feedback for insert to authenticated with check (public.is_coach() or player_id in (select public.my_player_ids()));
create policy "note own feedback" on public.cage_feedback for update to authenticated using (public.is_coach() or player_id in (select public.my_player_ids())) with check (public.is_coach() or player_id in (select public.my_player_ids()));
create policy "coach deletes feedback" on public.cage_feedback for delete to authenticated using (public.is_coach());

-- family access list: you can see your own rows; coaches manage everything
create policy "read own access" on public.family_access for select to authenticated using (public.is_coach() or lower(email) = public.my_email());
create policy "coach manages access" on public.family_access for all to authenticated using (public.is_coach()) with check (public.is_coach());

-- storage: videos live at makos-11u/<player_id>/...; families only touch their own player's folder
drop policy if exists "cage videos insert" on storage.objects;
drop policy if exists "cage videos select" on storage.objects;
drop policy if exists "cage videos update" on storage.objects;
drop policy if exists "cage videos delete" on storage.objects;
create policy "videos read" on storage.objects for select to authenticated
  using (bucket_id = 'cage-videos' and (public.is_coach() or (storage.foldername(name))[2] in (select public.my_player_ids())));
create policy "videos upload" on storage.objects for insert to authenticated
  with check (bucket_id = 'cage-videos' and (public.is_coach() or (storage.foldername(name))[2] in (select public.my_player_ids())));
create policy "videos update" on storage.objects for update to authenticated
  using (bucket_id = 'cage-videos' and public.is_coach());
create policy "videos delete" on storage.objects for delete to authenticated
  using (bucket_id = 'cage-videos' and public.is_coach());

grant select, insert, update, delete on public.family_access to authenticated;
