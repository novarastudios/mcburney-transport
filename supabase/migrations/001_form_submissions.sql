-- Form submissions table for McBurney Transport Group site forms.
-- Apply in Supabase SQL editor or via CLI migration.

create table if not exists public.form_submissions (
  id bigint generated always as identity primary key,
  name text not null,
  email text not null,
  phone text,
  company text,
  message text not null,
  form_type text not null check (
    form_type in ('contact', 'quote', 'subcontractor', 'careers')
  ),
  created_at timestamptz not null default now()
);

alter table public.form_submissions enable row level security;

-- Allow anonymous inserts from the public website only.
create policy "Allow anonymous form inserts"
  on public.form_submissions
  for insert
  to anon
  with check (true);

-- Restrict reads to authenticated service roles (dashboard/admin only).
create policy "Deny anonymous reads"
  on public.form_submissions
  for select
  to anon
  using (false);

create index if not exists form_submissions_created_at_idx
  on public.form_submissions (created_at desc);

create index if not exists form_submissions_form_type_idx
  on public.form_submissions (form_type);
