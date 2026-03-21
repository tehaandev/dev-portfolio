# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Production build
npm run lint     # ESLint checks
npm start        # Start production server
```

No test suite is configured.

## Architecture

This is a **Next.js 16 App Router** portfolio site with TypeScript, React 19, and Tailwind CSS v4.

### Key directories

- `app/` — Next.js App Router pages and layouts. Home page lazily loads section components with Suspense skeletons.
- `components/` — All React components. `components/ui/` contains shadcn/ui primitives.
- `features/` — Business logic: `form-submit-action.ts` (Server Action using AWS SNS), `form-submit-query.ts` (React Query mutation wrapper).
- `lib/` — Utilities: `posts.ts` (blog file system + caching), `query.ts` (QueryClient), `use-intersection-observer.ts` (scroll animation hook).
- `_posts/` — Markdown blog posts with YAML frontmatter (`title`, `date`, `excerpt`, `tags`, `author`, `published`). Set `published: false` to hide in production.

### Data flows

**Blog**: Markdown files in `_posts/` → parsed by `gray-matter` + `remark` → rendered in `app/blog/[slug]/page.tsx`. Blog post loading uses React's `cache()` for deduplication.

**Contact form**: Client validation → Server Action (`formSubmitAction`) → AWS SNS topic → React Query mutation manages async state → Sonner toast on success/failure.

### Styling

Tailwind CSS v4 using the `@tailwindcss/postcss` plugin (not the classic `tailwind.config.js` approach). Colors use oklch format in CSS variables (`globals.css`). Dark mode is handled by `next-themes` with the `.dark` class strategy. Component variants use `class-variance-authority`.

### Animations

`FadeIn.tsx` wraps content with a Motion (Framer Motion) `whileInView` fade+slide animation. The `use-intersection-observer.ts` hook provides a lower-level intersection observer that freezes once visible.

### Environment variables required

```
AWS_REGION
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_SNS_TOPIC_ARN
```

### Path alias

`@/*` maps to the repository root (configured in `tsconfig.json`).
