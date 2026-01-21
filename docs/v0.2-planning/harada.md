
---

## File: `docs/routes/harada.md`

```md
# Route: `/harada`

Goals:
- dense grid of related elements
- close proximity but clear separation
- paper-on-paper via `.surface`
- avoid “card UI vibe”; surfaces are structural

```tsx
import { SiteNav } from "../components/site-nav";

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

      <div className="grid grid-cols-3 gap-2" role="grid" aria-label={`${title} grid`}>
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="tile" role="gridcell" aria-label={`Cell ${i + 1}`}>
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

        <div className="harada-grid" aria-label="Harada blocks">
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
