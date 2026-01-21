
---

## File: `docs/implementation/notes.md`

```md
# Implementation Notes

## File mapping (when you move from docs → repo)

- `docs/design-system/css-first-canonical.md`
  → `app/styles/app.css`

- `docs/components/site-nav.md`
  → `app/components/site-nav.tsx`

- `docs/routes/_index.md`
  → `app/routes/_index.tsx` (or your router v7 equivalent)

- `docs/routes/how-i-work.md`
  → `app/routes/how-i-work.tsx`

- `docs/routes/harada.md`
  → `app/routes/harada.tsx`

## Strictness

- Avoid arbitrary values in JSX.
- If you need a new layout behavior, add a canonical class in CSS under `@layer components`.
- Treat visual ambiguity as a functional bug.

## Dark mode

- Toggle by adding/removing `.dark` on `<html>`.
- Persistence (cookie/localStorage) is optional and can be added later.
