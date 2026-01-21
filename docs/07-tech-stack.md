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
    "react-router": "^7.x"
  },
  "devDependencies": {
    "vite": "^7.x",
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
- CSS global importado no entry root/layout

```ts
// vite.config.ts
import tailwindcss from "@tailwindcss/vite";
import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
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
│   ├── home.tsx         # /
│   ├── about.tsx        # /about
│   ├── how-i-work.tsx   # /how-i-work
│   ├── principles.tsx   # /principles
│   ├── notes.tsx        # /notes (ou /writing)
│   └── harada.tsx       # /harada
├── ui/
│   └── components/
│       └── site-nav.tsx # Navegação
└── content/
    └── harada/          # Dados do Harada
        ├── index.json
        └── 2026-01.json
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

<!-- DECISÃO_PENDENTE: Formato de Conteúdo para Páginas de Texto Longo

Opções:
1. JSX puro — mais controle, mais verboso
2. MDX — markdown + componentes, mais fácil de escrever
3. Markdown simples — mais limitado, mas mais puro

A conversa não definiu qual opção seguir. Considerar:
- Quantidade de conteúdo que será escrito
- Quem vai escrever (só o Claus? outros?)
- Complexidade aceitável

Recomendação: JSX para rotas principais, MDX para /notes se o conteúdo for frequente.
-->

---

## Integração com Cloudflare

O projeto usa Cloudflare Workers para deploy:

- `wrangler.jsonc` para configuração
- `worker-configuration.d.ts` para tipos
- `npm run deploy` para publicar

---

## Checklist de Setup

- [ ] Vite configurado com plugins corretos
- [ ] Tailwind v4 importado no CSS principal
- [ ] Tokens definidos em `:root`
- [ ] Dark mode tokens em `.dark`
- [ ] Classes canônicas em `@layer components`
- [ ] TypeScript strict habilitado
- [ ] Rotas configuradas no React Router
- [ ] Cloudflare Workers configurado
