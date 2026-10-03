-- Family access list, built 10/3 from the Shirt/Hat size sheet (who replied) + Brevo list 18.
-- confirmed = replied about their player's hat, or Brevo PLAYER_NAME matches
-- likely    = same last name on the team email list (confirm with Devan)
insert into public.family_access (email, player_id, role) values
  ('jay@afaindustries.com', 'anthony-aboufawaz', 'family'),        -- confirmed (Jehad)
  ('anthony@afaindustries.com', 'sami-aboufawaz', 'family'),        -- confirmed (Tony)
  ('denaiai779@gmail.com', 'emory-ahart', 'family'),               -- confirmed (Denai)
  ('aaronbledsoeiv@gmail.com', 'aj-bledsoe', 'family'),            -- confirmed (Aaron)
  ('shilohc888@gmail.com', 'luke-christie', 'family'),             -- confirmed (Shiloh, hat reply)
  ('rablshchristie23@gmail.com', 'luke-christie', 'family'),       -- likely
  ('melvincrossjr0307@gmail.com', 'maddox-cross', 'family'),       -- confirmed
  ('jesse.dababneh@gmail.com', 'noah-dababneh', 'family'),         -- confirmed
  ('ddababneh.np@gmail.com', 'noah-dababneh', 'family'),           -- likely
  ('gfrye0328@gmail.com', 'hayden-frye', 'family'),                -- confirmed
  ('mary.frye12@gmail.com', 'hayden-frye', 'family'),              -- confirmed
  ('maddysdad@att.net', 'connor-furwa', 'family'),                 -- confirmed
  ('blacksher.sarah@gmail.com', 'jabril-griffin', 'family'),       -- confirmed
  ('lawh23@gmail.com', 'blake-harrington', 'family'),              -- confirmed (Larry)
  ('kharr10@gmail.com', 'blake-harrington', 'family'),             -- likely (cc'd on Harrington hat reply)
  ('hollyhelms07@gmail.com', 'camden-helms', 'family'),            -- confirmed (Holly)
  ('mhelms_23@yahoo.com', 'camden-helms', 'family'),               -- confirmed (Mike)
  ('ccucco24@gmail.com', 'robert-hoffman-iii', 'family'),          -- confirmed (Courtney)
  ('rob.hoffman@icloud.com', 'robert-hoffman-iii', 'family'),      -- likely
  ('dkling927@me.com', 'bradley-kling', 'family'),                 -- confirmed (DeAnn)
  ('robertkling6@hotmail.com', 'bradley-kling', 'family'),         -- likely
  ('john0383@gmail.com', 'ben-lehman', 'family'),                  -- confirmed
  ('kristinalee85@hotmail.com', 'owen-martin', 'family'),          -- confirmed (Kristina)
  ('bmumaw@redwoodlogistics.com', 'harrison-mumaw', 'family'),     -- confirmed (Ben)
  ('bmumaw@hotmail.com', 'harrison-mumaw', 'family'),              -- likely
  ('jesmumaw@gmail.com', 'harrison-mumaw', 'family'),              -- likely
  ('coliverio@gmail.com', 'gibson-oliverio', 'family'),            -- confirmed
  ('samer@wayne.edu', 'james-petrous', 'family'),                  -- confirmed (Samer)
  ('florapetrous@gmail.com', 'james-petrous', 'family'),           -- likely
  ('lynnthomas83@gmail.com', 'reginald-thomas-iii', 'family'),     -- confirmed
  ('jeeyoungcho@gmail.com', 'camden-wigwenkloski', 'family'),      -- confirmed (hat reply)
  ('djwenglikowski@gmail.com', 'camden-wigwenkloski', 'family'),   -- confirmed (David)
  ('info@mwmakos.com', null, 'coach'),
  ('hitting2.0bball@gmail.com', null, 'coach')
on conflict (email, player_id) do nothing;
-- Not placed yet (on Brevo list 18): konczalaaron86@gmail.com, ca48315@yahoo.com, awm0214@yahoo.com,
-- makicakes48206@yahoo.com, shaunazambelli@gmail.com, ryebekah04@yahoo.com, stacyr1020@yahoo.com,
-- djg1396@gmail.com (Duncan Gillette?), kristina8558@gmail.com (Kristina Martin's other email?)
