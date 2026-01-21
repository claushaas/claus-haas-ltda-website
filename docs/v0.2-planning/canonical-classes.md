# Canonical Classes

Coloque no globals.css abaixo do resto

```css
.surface {
  background: var(--bg-surface);
  box-shadow: var(--shadow-surface);
  border-radius: var(--radius-surface);
}
```

Ou, se preferir só Tailwind, você pode criar um “composite” via @layer components (se estiver usando Tailwind v4 com CSS-first):

```css
@layer components {
  .surface {
    @apply bg-bg-surface shadow-surface rounded-surface;
  }
  .prose-block {
    @apply max-w-reading px-s-sm md:px-s-md;
  }
}
```

Exemplo de layout:

```html
export function Home() {
  return (
    <main className="bg-bg-base text-text-primary min-h-dvh">
      <div className="mx-auto max-w-reading px-s-sm py-s-lg">
        <header className="space-y-s-sm">
          <h1 className="text-heading font-semibold text-text-primary">
            Systems, clarity, and decisions.
          </h1>
          <p className="text-body font-regular text-text-secondary">
            This site documents how I think, work, and decide — to reduce friction and improve collaboration.
          </p>
          <nav className="flex gap-s-sm text-meta font-medium">
            <a className="text-accent hover:text-accent-muted" href="/how-i-work">How I Work</a>
            <a className="text-accent hover:text-accent-muted" href="/principles">Principles</a>
            <a className="text-accent hover:text-accent-muted" href="/notes">Notes</a>
            <a className="text-accent hover:text-accent-muted" href="/harada">Harada</a>
          </nav>
        </header>

        <section className="mt-s-lg surface p-s-md">
          <h2 className="text-heading font-semibold">Start here</h2>
          <p className="mt-s-sm text-body text-text-secondary">
            If you want the highest-quality output from me, read “How I Work” first.
          </p>
        </section>
      </div>
    </main>
  );
}
```
