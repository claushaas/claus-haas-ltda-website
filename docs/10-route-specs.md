# 10 — Especificações de Rotas

> Este documento define a implementação de cada rota do site.

---

## Estrutura Comum

Todas as rotas seguem a mesma estrutura base:

```tsx
import { SiteNav } from "~/ui/components/site-nav";

export default function RouteName() {
  return (
    <main className="page">
      <div className="reading section stack-lg">
        <header className="stack-sm">
          <h1 className="t-heading">Page Title</h1>
          <p className="t-body">Page description.</p>
          <SiteNav />
        </header>

        {/* conteúdo específico da rota */}

        <footer className="t-meta">
          © {new Date().getFullYear()} Claus Haas
        </footer>
      </div>
    </main>
  );
}
```

---

## `/` — Home

### Objetivos

- Orientação
- Filtro cognitivo
- Links mínimos
- Não é currículo, não é blog

### Implementação

```tsx
import { SiteNav } from "~/ui/components/site-nav";

export default function HomeRoute() {
  return (
    <main className="page">
      <div className="reading section stack-lg">
        <header className="stack-sm">
          <h1 className="t-heading">Systems. Clarity. Decisions.</h1>

          <p className="t-body">
            This site documents how I think, work, and decide — 
            to reduce friction and improve collaboration.
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
            This is not a résumé. It's an operating manual 
            and a public thought system.
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

## `/how-i-work`

### Objetivos

- Legibilidade long-form
- Hierarquia semântica óbvia
- Ênfase rara
- Tom operacional

### Implementação

```tsx
import { SiteNav } from "~/ui/components/site-nav";

export default function HowIWorkRoute() {
  return (
    <main className="page">
      <div className="reading section stack-lg">
        <header className="stack-sm">
          <h1 className="t-heading">How I Work</h1>

          <p className="t-body">
            A practical operating manual: how to interact with me 
            to get the best outcomes with minimal friction.
          </p>

          <SiteNav />
        </header>

        <article className="stack-lg">
          <section className="stack-sm">
            <h2 className="t-heading">Model</h2>
            <p className="t-body">
              I think in systems and inputs/outputs. If something feels 
              "simple", I'm usually searching for hidden coupling.
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
              Rule: if two things look the same, they mean the same. 
              If they mean different things, they must look different.
            </p>
          </section>
        </article>

        <footer className="t-meta">
          © {new Date().getFullYear()} Claus Haas
        </footer>
      </div>
    </main>
  );
}
```

<!-- TODO: Expandir conteúdo de /how-i-work com o texto completo do "manual operacional". O conteúdo acima é um esqueleto. -->

---

## `/about`

### Objetivos

- Baseline factual
- Estilo README
- Sem autobiografia
- Conciso

### Implementação (Esqueleto)

```tsx
import { SiteNav } from "~/ui/components/site-nav";

export default function AboutRoute() {
  return (
    <main className="page">
      <div className="reading section stack-lg">
        <header className="stack-sm">
          <h1 className="t-heading">About</h1>

          <p className="t-body">
            Factual baseline. Who I am, professionally and humanly.
          </p>

          <SiteNav />
        </header>

        <article className="stack-lg">
          <section className="stack-sm">
            <h2 className="t-heading">Professional</h2>
            <p className="t-body">
              {/* conteúdo factual */}
            </p>
          </section>

          <section className="stack-sm">
            <h2 className="t-heading">Human</h2>
            <p className="t-body">
              {/* contexto humano sem storytelling */}
            </p>
          </section>
        </article>

        <footer className="t-meta">
          © {new Date().getFullYear()} Claus Haas
        </footer>
      </div>
    </main>
  );
}
```

<!-- TODO: Criar conteúdo para /about -->

---

## `/principles`

### Objetivos

- Lista de invariantes
- Um princípio por seção
- Explicação curta
- Sem linguagem motivacional

### Implementação (Esqueleto)

```tsx
import { SiteNav } from "~/ui/components/site-nav";

export default function PrinciplesRoute() {
  return (
    <main className="page">
      <div className="reading section stack-lg">
        <header className="stack-sm">
          <h1 className="t-heading">Principles</h1>

          <p className="t-body">
            What doesn't change, regardless of context.
          </p>

          <SiteNav />
        </header>

        <article className="stack-lg">
          <section className="stack-sm">
            <h2 className="t-heading">Principle 1</h2>
            <p className="t-body">
              {/* explicação */}
            </p>
          </section>

          {/* mais princípios */}
        </article>

        <footer className="t-meta">
          © {new Date().getFullYear()} Claus Haas
        </footer>
      </div>
    </main>
  );
}
```

<!-- TODO: Definir lista de princípios -->

---

## `/notes` (ou `/writing`)

### Objetivos

- Pensamento em movimento
- Essays, notas, frameworks
- Formato mais flexível

<!-- DECISÃO_PENDENTE: Formato de /notes

Opções:
1. Lista de posts com links para páginas individuais
2. Página única com seções
3. Feed cronológico
4. Sistema de tags/categorias

Decidir qual formato serve melhor ao propósito.
-->

### Implementação (Esqueleto)

```tsx
import { SiteNav } from "~/ui/components/site-nav";

export default function NotesRoute() {
  return (
    <main className="page">
      <div className="reading section stack-lg">
        <header className="stack-sm">
          <h1 className="t-heading">Notes</h1>

          <p className="t-body">
            Thought in progress. Essays, frameworks, reflections.
          </p>

          <SiteNav />
        </header>

        {/* lista de notas ou conteúdo direto */}

        <footer className="t-meta">
          © {new Date().getFullYear()} Claus Haas
        </footer>
      </div>
    </main>
  );
}
```

---

## `/harada`

Ver [11-harada-spec.md](./11-harada-spec.md) para especificação completa.

### Resumo

- Grid 9×9 baseado em JSON
- Não indexado (noindex, nofollow)
- Elevação paper-on-paper
- Dados em `app/content/harada/`

---

## Checklist por Rota

Ao implementar cada rota:

- [ ] Usa estrutura base comum
- [ ] Inclui `SiteNav`
- [ ] Inclui `footer`
- [ ] Usa apenas classes canônicas
- [ ] Hierarquia tipográfica clara
- [ ] Sem componentes proibidos
- [ ] Acessibilidade: headings em ordem, aria-labels quando necessário
