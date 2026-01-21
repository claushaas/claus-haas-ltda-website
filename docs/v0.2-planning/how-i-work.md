
---

## File: `docs/routes/how-i-work.md`

```md
# Route: `/how-i-work`

Goals:
- long-form readability
- semantic hierarchy is obvious
- emphasis is rare
- operational tone

```tsx
import { SiteNav } from "../components/site-nav";

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
