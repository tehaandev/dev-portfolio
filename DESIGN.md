# Design System: Engineering Excellence

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Architect."** 

In a world of over-designed portfolios, "The Digital Architect" stands out through restraint, precision, and structural integrity. This system moves beyond the "standard template" by treating the browser viewport as a blueprint. We achieve a premium feel not through decoration, but through the obsessive calibration of whitespace, the rhythmic repetition of a strict grid, and the intentional use of tonal layering.

While the prompt calls for a "clear grid system," we avoid the "boxed-in" look. We use **intentional asymmetry**—such as offsetting a `display-lg` headline across a 12-column grid—to create a dynamic flow that feels engineered rather than just "placed."

## 2. Colors & Surface Philosophy
The palette is rooted in deep charcoals (`#131313`) and high-contrast neutrals. The "Electric Blue" accent (`#b8c3ff` / `#124af0`) is used sparingly, acting as a "laser-sight" to guide the user's eye to primary actions.

### The "No-Line" Rule
Standard developer portfolios rely on 1px borders to separate "cards." In this system, **solid borders for sectioning are prohibited.** Boundaries are defined strictly through background shifts:
*   Use `surface_container_low` for the main page body.
*   Use `surface_container` or `surface_container_high` for nested content blocks.
*   The transition between `#131313` and `#1c1b1b` (Surface Low) provides a sophisticated, "felt-not-seen" boundary that reflects a higher level of UI maturity.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of technical documents:
1.  **Base Layer:** `surface` (#131313)
2.  **Section Layer:** `surface_container_low` (#1c1b1b)
3.  **Component Layer (Cards/Modals):** `surface_container_highest` (#353534)

### Signature Textures
To avoid a "flat" feel without resorting to trendy gradients, use a **Subtle Tonal Bloom**. For Hero backgrounds or primary CTAs, apply a barely-perceptible radial gradient transitioning from `primary_container` (#2e5bff) to `surface` (#131313) at 5% opacity. It should feel like the glow of a high-end server rack in a dark room.

## 3. Typography
We use **Inter** exclusively. Its neo-grotesque structure communicates "Engineering Excellence"—it is legible, objective, and mathematically sound.

*   **The Power of Scale:** We create impact by pairing the massive `display-lg` (3.5rem) for project titles with the microscopic yet legible `label-sm` (0.6875rem) for technical metadata (e.g., "LOC: 12k", "TS / REACT").
*   **Headline vs. Body:** All headlines (`headline-lg` to `headline-sm`) should use a `-0.02em` letter-spacing to feel "tight" and authoritative. Body text (`body-lg`) should use `on_surface_variant` (#c4c5d9) rather than pure white to reduce eye strain and increase the perceived premium quality.
*   **Monospace Accents:** While not in the primary scale, use a system monospace font for code snippets or "Version Numbers" to reinforce the developer persona.

## 4. Elevation & Depth
In this system, "Elevation" is a calculation of light and tone, not a "Drop Shadow" effect.

*   **The Layering Principle:** To lift an element, move it up one tier in the `surface_container` scale. A card using `surface_container_highest` sitting on a `surface_dim` background creates a natural 3D lift.
*   **Ambient Shadows:** If a floating element (like a Navigation Menu) requires a shadow, use a "Technical Shadow":
    *   Color: `surface_container_lowest` (#0e0e0e) at 40% opacity.
    *   Blur: 40px.
    *   Spread: -10px.
    *   This creates a "weighty" feel that mimics a physical object resting near a surface.
*   **The "Ghost Border" Fallback:** If a container lacks sufficient contrast against its parent, use the `outline_variant` (#434656) at 20% opacity. This "Ghost Border" provides a hint of structure without interrupting the visual flow.

## 5. Components

### Buttons (The "Control Module")
*   **Primary:** Background: `primary_container` (#2e5bff); Text: `on_primary_container`. Shape: `md` (0.375rem). Transition: On hover, shift background to `primary` (#b8c3ff) with a 200ms ease-out.
*   **Tertiary:** No background. Text: `primary`. On hover, apply a `surface_container_high` background.

### Cards & Projects
*   **Rule:** Forbid divider lines.
*   **Structure:** Use `spacing scale 8` (2rem) as internal padding. Separate the "Project Image" from the "Description" using `surface_container_low` for the image background to create a "recessed" look.

### Input Fields
*   **Aesthetic:** "Instrument Panel."
*   **Style:** Use `surface_container_highest` with a `bottom-only` Ghost Border. When focused, the border becomes `primary` (#b8c3ff) and 2px thick.

### Technical Tags (Chips)
*   **Selection Chips:** Use `surface_container_high` with `label-md` typography. The border-radius must be `sm` (0.125rem) to maintain the "engineered" angularity.

### Navigation (The "Status Bar")
*   A fixed top-bar using **Glassmorphism**.
*   Background: `surface` (#131313) at 70% opacity.
*   Blur: `backdrop-filter: blur(12px)`.
*   This allows the "Engineering Excellence" of the underlying content to be glimpsed as it scrolls by.

## 6. Do's and Don'ts

### Do:
*   **Do** use extreme whitespace (`spacing scale 24`) to separate major portfolio sections.
*   **Do** align all text to a strict 12-column grid. If a text block starts on column 3, ensure it ends precisely on column 9.
*   **Do** use `primary_fixed_dim` for subtle icons that shouldn't compete with text.

### Don't:
*   **Don't** use standard 1px `#ccc` borders. It breaks the "Architect" aesthetic and feels "off-the-shelf."
*   **Don't** use "bounce" or "spring" animations. Use "Linear" or "Ease-In-Out" to mimic the precision of a machine.
*   **Don't** use more than one accent color. The "Electric Blue" must remain the sole signal in a monochromatic environment.
*   **Don't** use rounded corners larger than `xl` (0.75rem). Softness is the enemy of "Engineering Excellence"; stick to `sm` and `md` for a disciplined look.```