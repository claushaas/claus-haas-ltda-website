# Files — CSS-first Canonical System + Route Examples (Docs-Only)

Below are document-style “files” you can copy/paste into your repo later.
They are split by filename for clarity and future implementation.

---

## File: `docs/design-system/css-first-canonical.md`

```md
# CSS-first Canonical System (Tailwind v4)

This document defines a minimal, restrictive set of canonical classes for the site.
Goal: prevent Tailwind freestyle and keep the system semantically stable.

## Principles

- If two elements look the same, they mean the same.
- If they mean different things, they must look different in a relevant way.
- Elevation is semantic (paper-on-paper), not decorative.
- Tokens are the source of truth.
- No arbitrary values.

---

## Stylesheet (to become `app/styles/app.css`)

```css
@import "tailwindcss";

/* ---------------------------
   Design System Tokens
   --------------------------- */
:root {
  /* Light mode */
  --bg-base: #f6f7f9;
  --bg-base-subtle: #eef1f5;

  --bg-surface: #ffffff;
  --bg-surface-muted: #f9fafb;

  --text-primary: #111827;
  --text-secondary: #374151;
  --text-muted: #6b7280;

  --accent-primary: #2563eb;
  --accent-muted: #3b82f6;

  --shadow-surface: 0 1px 2px rgba(0,0,0,0.04), 0 2px 6px rgba(0,0,0,0.06);
  --radius-surface: 6px;

  --font-family-base: Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;

  --text-body: 1rem;
  --text-meta: 0.875rem;
  --text-heading: 1.375rem;

  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;

  --line-body: 1.7;
  --line-heading: 1.4;
  --line-meta: 1.5;

  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 2rem;
  --space-lg: 3rem;
  --space-xl: 5rem;

  --max-reading: 72ch;
}

.dark {
  /* Dark mode */
  --bg-base: #0f172a;
  --bg-base-subtle: #020617;

  --bg-surface: #111827;
  --bg-surface-muted: #1f2933;

  --text-primary: #e5e7eb;
  --text-secondary: #cbd5e1;
  --text-muted: #9ca3af;

  --accent-primary: #60a5fa;
  --accent-muted: #93c5fd;

  --shadow-surface: 0 1px 2px rgba(0,0,0,0.6);
}

/* ---------------------------
   Base plane defaults
   --------------------------- */
html {
  font-family: var(--font-family-base);
  background: var(--bg-base);
  color: var(--text-primary);
}

a {
  color: var(--accent-primary);
  text-decoration: none;
}
a:hover {
  color: var(--accent-muted);
  text-decoration: underline;
}

:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
}

/* ---------------------------
   Canonical Classes
   --------------------------- */
@layer components {
  /* page: base plane wrapper */
  .page {
    min-height: 100dvh;
    background: var(--bg-base);
    color: var(--text-primary);
  }

  /* reading: single-column, long-form width + side padding */
  .reading {
    max-width: var(--max-reading);
    margin-inline: auto;
    padding-inline: var(--space-sm);
  }

  /* stacks: vertical rhythm with semantic meaning */
  .stack-xs > * + * { margin-top: var(--space-xs); }
  .stack-sm > * + * { margin-top: var(--space-sm); }
  .stack-md > * + * { margin-top: var(--space-md); }
  .stack-lg > * + * { margin-top: var(--space-lg); }
  .stack-xl > * + * { margin-top: var(--space-xl); }

  /* surface: semantic elevation (paper-on-paper), binary only */
  .surface {
    background: var(--bg-surface);
    box-shadow: var(--shadow-surface);
    border-radius: var(--radius-surface);
  }

  /* surface padding is also semantic; keep it consistent */
  .surface-pad {
    padding: var(--space-md);
  }

  /* typography roles: unambiguous and minimal */
  .t-heading {
    font-size: var(--text-heading);
    line-height: var(--line-heading);
    font-weight: var(--weight-semibold);
    color: var(--text-primary);
  }

  .t-body {
    font-size: var(--text-body);
    line-height: var(--line-body);
    font-weight: var(--weight-regular);
    color: var(--text-secondary);
  }

  .t-meta {
    font-size: var(--text-meta);
    line-height: var(--line-meta);
    font-weight: var(--weight-medium);
    color: var(--text-muted);
  }

  /* section spacing helpers (still canonical) */
  .section {
    padding-block: var(--space-lg);
  }

  .section-tight {
    padding-block: var(--space-md);
  }

  /* canonical nav row (no freestyle gaps) */
  .nav-row {
    display: flex;
    flex-wrap: wrap;
    column-gap: var(--space-sm);
    row-gap: var(--space-xs);
    font-size: var(--text-meta);
    line-height: var(--line-meta);
    font-weight: var(--weight-medium);
  }

  /* harada responsive grid (no freestyle breakpoints in JSX) */
  .harada-grid {
    display: grid;
    gap: var(--space-sm);
  }
  @media (min-width: 768px) {
    .harada-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
  @media (min-width: 1024px) {
    .harada-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  }

  /* harada cell tile (muted paper within paper) */
  .tile {
    border-radius: var(--radius-surface);
    background: var(--bg-surface-muted);
    padding: var(--space-xs);
  }
}
```

Rules of Use (PR Checklist)

Compose layouts using only: .page, .reading, .stack-*, .surface, .surface-pad, .t-*, .nav-row, .harada-grid, .tile.

No new shadows, radii, or spacing values.

No arbitrary values in className.

.surface only when spacing + typography cannot separate meaning.

Accent is used only for links and focus.

If a new visual need appears: update tokens or add a canonical class — never freestyle.