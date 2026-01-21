# Component: `SiteNav`

This is a minimal, explicit navigation component.
No hidden menus. No decorative UI.

```tsx
export function SiteNav() {
  return (
    <nav className="stack-xs" aria-label="Primary">
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
