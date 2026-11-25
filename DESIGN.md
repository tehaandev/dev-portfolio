# Design System: Apple-Style Portfolio

Source of truth for tokens and utilities is `app/globals.css`. This file explains the intent.

## 1. Principles
Apple's interface language applied to the web: restraint, feedback, and physical-feeling motion.

- **One tint.** Neutral ink and paper, with wine (`--wine`) as the only accent. Never add a second accent colour.
- **Rounded, soft, grouped.** Content sits on rounded surfaces over a calm canvas, like iOS inset-grouped lists.
- **Instant feedback.** Every pressable element responds on pointer-down.
- **Content first.** Above-the-fold content paints without JS (see Motion).

## 2. Colour
Defined as oklch CSS variables in `globals.css`; dark mode is the `.dark` class via `next-themes` (system default).

| Role | Light | Dark |
|---|---|---|
| `background` | near-white canvas (`#FAFAFA`) | deep charcoal |
| `card` | white | lighter than canvas (elevated = lighter) |
| `foreground` | ink | near-white |
| `muted-foreground` | mid grey | lighter grey |
| `border` / `input` | black at 8% / 12% | white at 9% / 14% |
| `wine` | the single tint | same value |

Wine is used for eyebrows, text links, the focus ring, text selection and the "Current" badge. Nothing else.

`prefers-contrast: more` strengthens `border` and `muted-foreground`.

## 3. Typography
- Font stack: `-apple-system, BlinkMacSystemFont, Geist, system-ui` (SF Pro on Apple devices, Geist elsewhere). Mono is Geist Mono, only for code.
- Body: 17px (`1.0625rem`), line-height 1.47, tracking `-0.011em`.
- Headlines: semibold, negative tracking (`-0.022em` to `-0.035em`). No serif.
- Blog long-form (`.prose-content`): 19px, line-height 1.6.

## 4. Surfaces & Depth
- **Canvas:** `bg-background`.
- **Card:** the `surface` utility (`bg-card`, `rounded-3xl`, 1px hairline ring from `--border`, faint shadow). Elevation is expressed by tone, not heavy shadows.
- **Chrome:** the `material` utility for the header: 72% background, `blur(20px) saturate(180%)`, falls back to opaque under `prefers-reduced-transparency`.
- Radii: `--radius` is 0.75rem; cards `3xl`, buttons full pills, inline code `md`, images and code blocks `2xl`.

## 5. Components (utilities)
| Utility | Use |
|---|---|
| `eyebrow` | wine, semibold kicker above a headline |
| `link` | wine text link, underline on hover |
| `press` | scale 0.97 on `:active`, springs back on release |
| `btn-primary` | filled pill (foreground on background), 44px tall |
| `btn-secondary` | muted pill |
| `surface` | grouped card |
| `material` | translucent blurred chrome |

`SectionHeading` takes a `label` only (no index numbers). shadcn/ui primitives live in `components/ui/`.

## 6. Motion
CSS only; no animation library.

- Easing: `--ease-spring` (`cubic-bezier(0.22, 1, 0.36, 1)`): fast out, no overshoot. No bounce.
- Above the fold: the `rise` utility directly (hero). Never hide it behind JS.
- Below the fold: wrap in `FadeIn`, which stays hidden until the intersection observer reports it, then applies `rise`.
- Route changes: a 0.3s fade in `TransitionWrapper` (skipped on first load).
- Theme toggle cross-fades with the View Transitions API (0.35s).
- `prefers-reduced-motion`: `rise` degrades to a plain fade and smooth scroll is disabled.

## 7. Do / Don't
- **Do** keep new UI rounded, system-font, single-tint.
- **Do** honour `prefers-reduced-motion`, `prefers-reduced-transparency` and `prefers-contrast`.
- **Don't** use hard borders for sectioning; use surface tone or the hairline ring.
- **Don't** add a second accent colour, serif type, or bounce/overshoot motion.
- **Don't** ship above-the-fold content that is invisible until JS loads.
