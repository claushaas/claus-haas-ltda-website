# 07 — Stack Técnico

> Este documento define o stack técnico e a configuração do projeto.

---

## Stack Principal

| Tecnologia | Versão | Propósito |
| ---------- | ------ | --------- |
| React Router | v7 | Roteamento com data APIs |
| Vite | Latest | Bundler/dev server |
| Tailwind CSS | v4 | Styling (CSS-first) |
| TypeScript | Strict | Tipagem |
| Cloudflare Workers | - | Deploy/hosting |

---

## Requisitos Não-Funcionais

| Requisito | Descrição |
| --------- | --------- |
| Sem drift estético | Novos estilos só entram via tokens/camadas oficiais |
| Sem valores arbitrários | Ex: `[#123456]`, `[13px]` são proibidos salvo exceções documentadas |
| Acessibilidade | Foco visível, contraste AA, sem info apenas por cor |
| Dark mode | Suportado via classe `.dark` |
| Estático primeiro | Conteúdo é prioridade |

---

## Dependências Principais

```json
{
  "dependencies": {
    "react": "^19.x",
    "react-dom": "^19.x",
    "react-router": "^7.x",
    "@mdx-js/react": "^3.x"
  },
  "devDependencies": {
    "vite": "^7.x",
    "@mdx-js/rollup": "^3.x",
    "tailwindcss": "^4.x",
    "@tailwindcss/vite": "^4.x",
    "typescript": "^5.x"
  }
}
```

---

## Configuração Vite

O Vite deve ser configurado com:

- Plugin do Tailwind v4
- Plugin do React Router v7
- Plugin do MDX (`@mdx-js/rollup`)
- CSS global importado no entry root/layout

```ts
// vite.config.ts
import tailwindcss from "@tailwindcss/vite";
import { reactRouter } from "@react-router/dev/vite";
import mdx from "@mdx-js/rollup";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    mdx(),
    reactRouter(),
  ],
});
```

---

## Configuração Tailwind v4 (CSS-first)

Tailwind v4 usa abordagem CSS-first:

- `@import "tailwindcss";` no arquivo de estilos principal
- Tokens definidos em `:root` e sobrescritos em `.dark`
- Classes canônicas em `@layer components`

```css
/* app/app.css */
@import "tailwindcss";

:root {
  /* tokens aqui */
}

.dark {
  /* dark mode tokens */
}

@layer components {
  /* classes canônicas */
}
```

---

## Estrutura de Arquivos Alvo

```text
app/
├── app.css              # Tokens + Tailwind + classes canônicas
├── entry.client.tsx
├── entry.server.tsx
├── root.tsx             # Layout principal
├── routes.ts            # Definição de rotas
├── routes/
│   ├── lang-layout.tsx  # Layout com :lang(en|pt)
│   ├── home.tsx         # /:lang(en|pt)/
│   ├── about.tsx        # /:lang(en|pt)/about
│   ├── how-i-work.tsx   # /:lang(en|pt)/how-i-work
│   ├── principles.tsx   # /:lang(en|pt)/principles
│   ├── notes.tsx        # /:lang(en|pt)/notes
│   ├── note.tsx         # /:lang(en|pt)/notes/:slug
│   └── harada.tsx       # /:lang(en|pt)/harada
├── ui/
│   ├── components/
│   │   └── site-nav.tsx # Navegação
│   └── mdx/             # Componentes MDX
├── content/
│   ├── harada/           # Dados do Harada
│   └── mdx/              # Conteúdo editorial por idioma
└── content-index/         # Índices e metadados de MDX
```

---

## Política de Dark Mode

<!-- DECISÃO_PENDENTE: Política de Dark Mode

Opções:
1. Apenas automático (prefers-color-scheme) — mais simples
2. Toggle persistente (cookie/localStorage) — mais controle do usuário
3. Ambos (automático + override manual) — mais complexo

A conversa não definiu qual opção seguir. Precisa decidir:
- Se dark mode é importante o suficiente para ter toggle
- Se a complexidade do toggle vale a pena

Recomendação: Começar com apenas automático (opção 1), adicionar toggle depois se necessário.
-->

Implementação mínima:

- Toggle por adicionar/remover `.dark` no `<html>`
- Persistência (cookie/localStorage) é opcional

---

## Formato de Conteúdo

**Decisão:** Rotas principais permanecem em JSX (controle total). Todo conteúdo editorial (notes/escritos) usa MDX.

**Convenção de conteúdo por idioma:**

- Conteúdo MDX duplicado por idioma (`en` e `pt`).
- UI/labels continuam em `public/locales/en.json` e `public/locales/pt.json`.
- Fallback: inglês é padrão.

**Estrutura sugerida:**

```text
app/
├── content/
│   ├── harada/                # JSON do Harada (já existente)
│   └── mdx/
│       ├── en/
│       │   └── notes/
│       │       ├── 2026-01-why-systems.mdx
│       │       └── 2026-02-clarity-bias.mdx
│       └── pt/
│           └── notes/
│               ├── 2026-01-por-que-sistemas.mdx
│               └── 2026-02-vies-da-clareza.mdx
├── ui/
│   └── mdx/
│       ├── mdx-provider.tsx
│       ├── callout.tsx
│       ├── figure.tsx
│       └── code-block.tsx
└── content-index/
    ├── notes.en.ts
    └── notes.pt.ts
```

**Nota sobre metadata:** evitar frontmatter no MDX. Preferir índices separados (`content-index/*`) para título, slug e data.

---

## Integração com Cloudflare

O projeto usa Cloudflare Workers para deploy:

- `wrangler.jsonc` para configuração
- `worker-configuration.d.ts` para tipos
- `npm run deploy` para publicar

---

## Checklist de Setup

- [ ] Vite configurado com plugins corretos
- [ ] MDX configurado no Vite e `MDXProvider` pronto
- [ ] Tailwind v4 importado no CSS principal
- [ ] Tokens definidos em `:root`
- [ ] Dark mode tokens em `.dark`
- [ ] Classes canônicas em `@layer components`
- [ ] TypeScript strict habilitado
- [ ] Rotas configuradas no React Router
- [ ] Cloudflare Workers configurado
