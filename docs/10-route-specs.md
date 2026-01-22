# 10 — Especificações de Rotas

> Este documento define a implementação de cada rota do site.

---

## Estrutura Comum

Todas as rotas seguem a mesma estrutura base:

```tsx
import { SiteNav } from "~/ui/components/site-nav";
import { SkipLink } from "~/ui/components/skip-link";

export default function RouteName() {
  return (
    <main className="page">
      <SkipLink />
      <div className="reading section stack-lg" id="main-content">
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

> **Idiomas:** O site está disponível em inglês e português (PT-BR) e todas as strings de rotas vêm das traduções (`useTranslation`). Use os namespaces por rota para manter os textos sincronizados em `public/locales/en.json` e `public/locales/pt.json`, sempre com fallback para inglês quando a tradução em PT-BR faltar.

---

## Contrato de Estado por Rota

Cada rota deve declarar:

- se suporta `Engaged` (foco ativo)
- quais aliens sao permitidos
- se ha navegacao por ancoras
- quais LoadStates sao esperados

Contrato global em [20-global-state-contract.md](./20-global-state-contract.md).

---

## Estratégia de Rotas (i18n + conteúdo)

**Convenção:** todas as rotas públicas são prefixadas por idioma:

- `/:lang(en|pt)/...`
- `/` redireciona para `/en` (ou usa o idioma detectado, com fallback para `/en`)

**Rotas principais em JSX (sem MDX):**

- `/:lang(en|pt)/` → Home
- `/:lang(en|pt)/how-i-work`
- `/:lang(en|pt)/principles`
- `/:lang(en|pt)/about`
- `/:lang(en|pt)/projects`
- `/:lang(en|pt)/uses`
- `/:lang(en|pt)/contact`
- `/:lang(en|pt)/harada`

**Conteúdo editorial em MDX:**

- `/:lang(en|pt)/notes`
- `/:lang(en|pt)/notes/:slug`

---

## Prerender (RR7)

O prerender deve listar todas as rotas principais e cada `:slug` de MDX por idioma. A fonte da lista vem de `content-index/*`.

```ts
// react-router.config.ts
import type { Config } from "@react-router/dev/config";
import { notesEn } from "./app/content-index/notes.en";
import { notesPt } from "./app/content-index/notes.pt";

const notePaths = [
  ...notesEn.map((note) => `/en/notes/${note.slug}`),
  ...notesPt.map((note) => `/pt/notes/${note.slug}`),
];

export default {
  ssr: true,
  prerender: async () => [
    "/en",
    "/pt",
    "/en/how-i-work",
    "/pt/how-i-work",
    "/en/principles",
    "/pt/principles",
    "/en/about",
    "/pt/about",
    "/en/projects",
    "/pt/projects",
    "/en/uses",
    "/pt/uses",
    "/en/contact",
    "/pt/contact",
    "/en/harada",
    "/pt/harada",
    "/en/notes",
    "/pt/notes",
    ...notePaths,
  ],
} satisfies Config;
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

## `/projects`

### Objetivos

- Evidência de trabalho real
- Casos selecionados
- Factual, sem marketing

### Implementação (Esqueleto)

```tsx
import { SiteNav } from "~/ui/components/site-nav";

export default function ProjectsRoute() {
  return (
    <main className="page">
      <div className="reading section stack-lg">
        <header className="stack-sm">
          <h1 className="t-heading">Projects</h1>

          <p className="t-body">
            Selected work with context, scope, and outcomes.
          </p>

          <SiteNav />
        </header>

        <section className="stack-lg">
          {/* cards proibidos: usar sections simples */}
        </section>

        <footer className="t-meta">
          © {new Date().getFullYear()} Claus Haas
        </footer>
      </div>
    </main>
  );
}
```

<!-- TODO: Criar conteúdo para /projects -->

---

## `/uses`

### Objetivos

- Ferramentas e setup
- Transparencia, sem glamour

### Implementação (Esqueleto)

```tsx
import { SiteNav } from "~/ui/components/site-nav";

export default function UsesRoute() {
  return (
    <main className="page">
      <div className="reading section stack-lg">
        <header className="stack-sm">
          <h1 className="t-heading">Uses</h1>

          <p className="t-body">
            Tools, setup, and the environment I rely on.
          </p>

          <SiteNav />
        </header>

        <article className="stack-lg">
          {/* seções por categoria */}
        </article>

        <footer className="t-meta">
          © {new Date().getFullYear()} Claus Haas
        </footer>
      </div>
    </main>
  );
}
```

<!-- TODO: Criar conteúdo para /uses -->

---

## `/contact`

### Objetivos

- Canal direto e explícito
- Sem friccao

### Implementação (Esqueleto)

```tsx
import { SiteNav } from "~/ui/components/site-nav";

export default function ContactRoute() {
  return (
    <main className="page">
      <div className="reading section stack-lg">
        <header className="stack-sm">
          <h1 className="t-heading">Contact</h1>

          <p className="t-body">
            Direct contact paths with clear expectations.
          </p>

          <SiteNav />
        </header>

        <section className="stack-lg">
          {/* canais de contato e instrucoes */}
        </section>

        <footer className="t-meta">
          © {new Date().getFullYear()} Claus Haas
        </footer>
      </div>
    </main>
  );
}
```

<!-- TODO: Criar conteúdo para /contact -->

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

**Formato decidido:** lista + páginas individuais (MDX por idioma).

### Implementação (Esqueleto)

```tsx
import { SiteNav } from "~/ui/components/site-nav";
import { notesEn } from "~/content-index/notes.en";
import { notesPt } from "~/content-index/notes.pt";

export default function NotesRoute({ params }: { params: { lang: "en" | "pt" } }) {
  const notes = params.lang === "pt" ? notesPt : notesEn;

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

        <section className="stack-sm">
          {notes.map((note) => (
            <a key={note.slug} href={`/${params.lang}/notes/${note.slug}`}>
              <div className="t-body">{note.title}</div>
              <div className="t-meta">{note.date}</div>
            </a>
          ))}
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
