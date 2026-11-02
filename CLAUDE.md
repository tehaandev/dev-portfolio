# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Static export to out/
npm run lint     # ESLint checks
npm run preview  # Build, then serve out/ + the Worker locally (needs .dev.vars)
npm run deploy   # Build and deploy to Cloudflare
```

No test suite is configured.

## Architecture

This is a **Next.js 16 App Router** portfolio site with TypeScript, React 19, and Tailwind CSS v4. It is a static export (`output: "export"`) hosted on Cloudflare Workers static assets: no Server Actions, `next/image` optimization, or dynamic rendering.

### Key directories

- `app/` — Next.js App Router pages and layouts. Home page lazily loads section components with Suspense skeletons.
- `components/` — All React components. `components/ui/` contains shadcn/ui primitives.
- `features/` — `form-submit-query.ts` (React Query mutation that posts to `/api/contact`).
- `worker/` — Cloudflare Worker: handles `POST /api/contact` (emails the message via the Cloudflare `send_email` binding) and serves everything else from `out/`.
- `lib/` — Utilities: `posts.ts` (blog file system + caching), `query.ts` (QueryClient), `use-intersection-observer.ts` (scroll animation hook).
- `_posts/` — Markdown blog posts with YAML frontmatter (`title`, `date`, `excerpt`, `tags`, `author`, `published`). Set `published: false` to exclude a post from production builds; it still shows in `npm run dev`.

### Data flows

**Blog**: Markdown files in `_posts/` → parsed by `gray-matter` + `remark` → rendered in `app/blog/[slug]/page.tsx`. Blog post loading uses React's `cache()` for deduplication.

**Contact form**: Client validation → `POST /api/contact` (`worker/index.ts`) → Cloudflare `send_email` → React Query mutation manages async state → Sonner toast on success/failure.

### Styling

Tailwind CSS v4 using the `@tailwindcss/postcss` plugin (not the classic `tailwind.config.js` approach). Colors use oklch format in CSS variables (`globals.css`). Dark mode is handled by `next-themes` with the `.dark` class strategy. Component variants use `class-variance-authority`.

### Animations

`FadeIn.tsx` wraps content with a Motion (Framer Motion) `whileInView` fade+slide animation. The `use-intersection-observer.ts` hook provides a lower-level intersection observer that freezes once visible.

### Environment variables required

Read by the Worker. Set with `wrangler secret put`, or in `.dev.vars` locally.

```
CONTACT_EMAIL_TO   # Must be a verified Email Routing destination address
```

### Path alias

`@/*` maps to the repository root (configured in `tsconfig.json`).
