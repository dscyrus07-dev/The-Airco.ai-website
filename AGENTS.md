# AiRCO Web — Agent Instructions

## UI Work

**Before making any UI changes, always read `DESIGN.md` in the project root** (if present) and follow its design system: colors, typography, spacing, components, and interaction states. If `DESIGN.md` references a stylesheet (e.g. `css/system.css`, `css/variables.css`), import it exactly once in `app/layout.tsx` (or `app/globals.css`) and preserve its companion stylesheets, fonts, and assets. Use `html/preview.html` as the visual reference when available.

> Note: as of 2026-09-14, `DESIGN.md` does not exist yet in this repo. Once it is added, this rule takes effect for all UI work.

## Project Conventions

- Framework: Next.js 16 (App Router, static export `output: "export"`, Tailwind v4 via `@tailwindcss/postcss`).
- All product/industry content is data-driven in `lib/data/` — edit copy there, not in pages.
- Product pages render a live product mockup via `components/visuals/ProductVisual.tsx` (keyed by `product.visual`) and a process flowchart via `components/visuals/FlowChart.tsx` (branching on `product.decision`).
- Shared diagrams (data flow, swimlane) live in `components/visuals/diagrams.tsx`.
- Keep the dark theme: gray-950/black backgrounds, white/10 borders, purple→blue gradients, glass cards.
- Verification: `npx tsc --noEmit`, `npm run lint`, `npm run build` (static export — sitemap requires `export const dynamic = "force-static"`).
