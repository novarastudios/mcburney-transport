# McBurney Transport Group

Next.js marketing site for [McBurney Transport Group](https://www.mcburneytransportgroup.com).

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Supabase (form submissions)
- Vercel deployment

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and set:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production canonical URL (sitemap, OG, schema) |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key for public form inserts |

Apply the SQL migration in `supabase/migrations/001_form_submissions.sql` before enabling forms in production.

## Pre-launch checklist

### Done in code
- Self-hosted images in `public/images/`
- Logo, favicon, default OG image
- Legacy WordPress redirects in `next.config.ts`
- Security headers
- Server-side form validation
- Cookie consent banner
- Customer login placeholder at `/customer-login`
- Policy pages, sitemap, robots

### Requires client action before go-live
- [ ] Upload `public/policies/rha-conditions-of-carriage-2026.pdf`
- [ ] Legal review: privacy notice (dated 2018), cookies policy, gender pay gap figures
- [ ] Replace testimonial attributions with verified client names/companies
- [ ] Configure Supabase + Vercel env vars
- [ ] Set production domain DNS on Vercel
- [ ] Crawl legacy WordPress URLs and add any missing redirects
- [ ] Confirm customer portal POST still works from new domain
- [ ] Decide on analytics (GA4/GTM) and update cookie policy if added
- [ ] Add quote form reCAPTCHA keys when ready

## Scripts

```bash
npm run build      # production build
npm run typecheck  # TypeScript check
npm run lint       # ESLint
```

## Deploy

Push to `main` on GitHub. Vercel auto-deploys when connected.
