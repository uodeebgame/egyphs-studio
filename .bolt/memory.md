# Project memory

## Product intent & audience

- Project appears to be named "egyphs" (likely Egyptian hieroglyphs theme) — a public-facing website with header, About section, and footer.

## Brand personality & voice

- Inferred: visually polished, production-grade presentation (per existing `.bolt/prompt` design guidance).

## Visual design & UX direction

- Logo (`egyphs-logo-new-trans.png`, transparent PNG) is used in three locations: header, About section, footer.
- A secondary `logo-250-150.png` also exists in `public/`.
- Lucide React icons used for UI iconography.

## Decisions, constraints & rationale

- Framework: Vite + React (JSX), Tailwind CSS, Lucide React — no extra UI/icon packages unless explicitly requested.
- Static assets must live in `public/` so Vite copies them to build output; files in project root are not served or bundled.
- Logo was moved from project root into `public/` to fix broken image on live site; verified via successful build and presence in build output.

## Open questions & assumptions

- No explicit page/feature scope documented yet beyond header, About, and footer.
- Actual domain name and deployment target not yet known.
- Responsive breakpoints and detailed component patterns not yet inferred.