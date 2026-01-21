
---

## File: `docs/routes/_index.md`

```md
# Route: `/` (Home)

Goals:
- orientation
- cognitive filter
- minimal links
- not résumé, not blog

```tsx
import { SiteNav } from "../components/site-nav";

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
            If you want the highest-quality output from me, read{" "}
            <a href="/how-i-work">How I Work</a> first.
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
