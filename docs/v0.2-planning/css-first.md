````md
# CSS-first Canonical Classes + Layout Examples (React Router v7 + Tailwind v4 + Vite)

This document defines a minimal, restrictive set of canonical classes that encode the design system.
Goal: prevent Tailwind freestyle and keep the site semantically stable.

---

## 1) Canonical Classes (CSS-first)

Add this to your main stylesheet (e.g. `app/styles/app.css`).

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

  /* section spacing helpers (optional but still canonical) */
  .section {
    padding-block: var(--space-lg);
  }

  .section-tight {
    padding-block: var(--space-md);
  }

  /* optional: constrained reading layout for wide screens */
  .center {
    margin-inline: auto;
  }
}
````

### Rules of Use (non-negotiable)

* Do not create new spacing values.
* Do not create new shadows or radii.
* Do not use arbitrary Tailwind values.
* Use `.surface` only when spacing + typography cannot separate meaning.
* Elevation is binary: either base plane or surface plane.

---

## 2) Minimal Layout Building Blocks

These are composition patterns that reuse the canonical classes.

### 2.1 Header + Nav (canonical pattern)

Always visible. No hidden menus. No decorative UI.

```tsx
function SiteNav() {
  return (
    <nav className="stack-xs">
      <div className="t-meta">Navigation</div>
      <div className="nav-row">
        <a href="/how-i-work">How I Work</a>
        <a href="/principles">Principles</a>
        <a href="/notes">Notes</a>
        <a href="/harada">Harada</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
}
```

Add the canonical `.nav-row` class:

```css
@layer components {
  .nav-row {
    display: flex;
    flex-wrap: wrap;
    column-gap: var(--space-sm);
    row-gap: var(--space-xs);
    font-size: var(--text-meta);
    line-height: var(--line-meta);
    font-weight: var(--weight-medium);
  }
}
```

---

## 3) Page Examples

All examples assume a React Router v7 route component export.

### 3.1 Home (`/`)

Goals:

* orientation
* cognitive filter
* minimal links
* no résumé vibe

```tsx
export default function HomeRoute() {
  return (
    <main className="page">
      <div className="reading section stack-lg">
        <header className="stack-sm">
          <h1 className="t-heading">Systems. Clarity. Decisions.</h1>
          <p className="t-body">
            This site documents how I think, work, and decide — to reduce friction and improve collaboration.
          </p>
          <SiteNav />
        </header>

        <section className="surface surface-pad stack-sm">
          <h2 className="t-heading">Start here</h2>
          <p className="t-body">
            If you want the highest-quality output from me, read <a href="/how-i-work">How I Work</a> first.
          </p>
          <p className="t-meta">
            This is not a résumé. It’s an operating manual and a public thought system.
          </p>
        </section>

        <footer className="t-meta">
          © {new Date().getFullYear()} Claus Haas
        </footer>
      </div>
    </main>
  );
}
```

---

### 3.2 How I Work (`/how-i-work`)

Goals:

* long-form readability
* semantic hierarchy is obvious
* no UI chrome
* emphasis is rare

```tsx
export default function HowIWorkRoute() {
  return (
    <main className="page">
      <div className="reading section stack-lg">
        <header className="stack-sm">
          <h1 className="t-heading">How I Work</h1>
          <p className="t-body">
            A practical operating manual: how to interact with me to get the best outcomes with minimal friction.
          </p>
          <SiteNav />
        </header>

        <article className="stack-lg">
          <section className="stack-sm">
            <h2 className="t-heading">Model</h2>
            <p className="t-body">
              I think in systems and inputs/outputs. If something feels “simple”, I’m usually searching for hidden coupling.
            </p>
          </section>

          <section className="stack-sm">
            <h2 className="t-heading">What Produces the Best Results</h2>
            <ul className="t-body list-disc pl-6 stack-xs">
              <li>Explicit objective: decide vs explore vs execute.</li>
              <li>Context before opinion: explain the why, not only the what.</li>
              <li>Clear constraints: time, risk, scope, invariants.</li>
            </ul>
          </section>

          <section className="stack-sm">
            <h2 className="t-heading">Disagreement</h2>
            <p className="t-body">
              Challenging an idea is debugging. Stronger premises win, not authority.
            </p>
            <p className="t-meta">
              Rule: if two things look the same, they mean the same. If they mean different things, they must look different.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
```

---

### 3.3 Harada (`/harada`)

Goals:

* dense grid of elements
* elements are close but clearly separated
* use surfaces for paper-on-paper separation
* no card UI vibe; surfaces are structural

Example: 3×3 blocks A–I, each block is a surface.

```tsx
const blocks = [
  { id: "A", title: "A" }, { id: "B", title: "B" }, { id: "C", title: "C" },
  { id: "D", title: "D" }, { id: "E", title: "E" }, { id: "F", title: "F" },
  { id: "G", title: "G" }, { id: "H", title: "H" }, { id: "I", title: "I" },
];

function HaradaBlock({ title }: { title: string }) {
  return (
    <section className="surface surface-pad stack-sm">
      <header className="stack-xs">
        <h3 className="t-heading">{title}</h3>
        <p className="t-meta">3×3 block</p>
      </header>

      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="tile" aria-label={`Cell ${i + 1}`}>
            <div className="t-meta">Cell {i + 1}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function HaradaRoute() {
  return (
    <main className="page">
      <div className="reading section stack-lg">
        <header className="stack-sm">
          <h1 className="t-heading">Harada</h1>
          <p className="t-body">
            A structured system. Close elements, clear separation. Paper on paper.
          </p>
          <SiteNav />
        </header>

        <div className="harada-grid">
          {blocks.map((b) => (
            <HaradaBlock key={b.id} title={b.title} />
          ))}
        </div>

        <p className="t-meta">
          Elevation is semantic: it separates planes without implying importance.
        </p>
      </div>
    </main>
  );
}
```

Add canonical `.harada-grid` and `.tile` classes:

```css
@layer components {
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

  .tile {
    border-radius: var(--radius-surface);
    background: var(--bg-surface-muted);
    padding: var(--space-xs);
  }
}
```

---

## 4) Operational Rules (PR checklist)

1. New layouts must be composed using: `.page`, `.reading`, `.stack-*`, `.surface`, `.surface-pad`, `.t-*`.
2. No new shadows, radii, or spacing values.
3. No arbitrary values in `className`.
4. `.surface` is used only when necessary to prevent ambiguity (especially in `/harada`).
5. Accent is used only for links and focus.
6. If a new visual need appears: update tokens or add a canonical class — do not freestyle.

```
::contentReference[oaicite:0]{index=0}
```
