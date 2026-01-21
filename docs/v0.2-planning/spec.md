# Spec — Personal Site Stack (React Router v7 + Tailwind v4 + Vite)

## 1) Objetivo

Implementar um website **majoritariamente estático** (conteúdo + rotas) usando:

- **React Router v7** (file-based routes / data APIs quando necessário)
- **Vite** como bundler/dev server
- **Tailwind CSS v4** (CSS-first) com um **design system restritivo** baseado em tokens

O foco é:

- clareza, legibilidade, estabilidade e baixa entropia visual
- sistema difícil de “freestyle”
- performance e manutenção simples

---

## 2) Requisitos não-funcionais

- **Sem drift estético**: novos estilos só entram via tokens/camadas oficiais
- **Sem valores arbitrários** (ex: `[#123456]`, `[13px]`) salvo exceções documentadas
- **Acessibilidade**: foco visível, contraste AA, sem informação apenas por cor
- **Dark mode** suportado via classe `.dark` (persistência opcional)

---

## 3) Estrutura de rotas (alvo)

Rotas mínimas:

- `/` Home (orientação + filtro cognitivo)
- `/about` baseline factual
- `/how-i-work` manual operacional
- `/principles` invariantes
- `/notes` (ou `/writing`) pensamento em movimento
- `/harada` artefato estruturado (exige “paper-on-paper”)

---

## 4) Tailwind v4 (CSS-first) — política do projeto

### 4.1 Fonte única

- Inter como fonte base (sem segunda família)
- pesos permitidos: 400 / 500 / 600

### 4.2 Cor

- cinzas levemente azulados para ambiente (base)
- azul único para accent (links/focus/sinais interativos)
- sem glow
- hierarquia por luminosidade, não saturação

### 4.3 “Paper on paper” (elevação semântica)

- o viewport é uma “mesa de trabalho”
- existe uma luz fixa, softbox, fria, top-center
- elevação é **binária**: base vs surface
- elevação **não** significa prioridade — só separação de plano
- proibido: múltiplos níveis, sombras fortes, card UI decorativo, animações de elevação

---

## 5) Tokens (fonte da verdade)

Todos os estilos centrais devem estar em **CSS variables** (tokens), consumidos por:

- classes utilitárias do Tailwind (quando fizer sentido)
- e poucas classes canônicas (`.surface`, `.page`, `.reading`, etc.)

### 5.1 Tokens obrigatórios

- cores: `--bg-*`, `--text-*`, `--accent-*`
- tipografia: `--text-body`, `--text-meta`, `--text-heading`, `--line-*`, `--weight-*`
- spacing semântico: `--space-xs/sm/md/lg/xl`
- elevação: `--shadow-surface`, `--radius-surface`

### 5.2 Regra de integridade
>
> Se uma decisão visual não couber nos tokens existentes, ela é inválida (ou exige mudança deliberada nos tokens).

---

## 6) Setup técnico (Vite + Tailwind v4 + Router v7)

### 6.1 Dependências

- `react`, `react-dom`
- `react-router` (v7)
- `vite`
- `tailwindcss` v4 + integração com Vite (plugin oficial)

### 6.2 Vite

- habilitar plugin do Tailwind v4 no `vite.config.ts`
- garantir que o CSS global seja importado no entry root/layout

### 6.3 Tailwind v4

- usar `@import "tailwindcss";` no arquivo de estilos principal
- definir tokens em `:root` e sobrescrever em `.dark`
- criar `@layer components` para classes canônicas (poucas)

---

## 7) Classes canônicas (vocabulário fechado)

Definir no CSS (via `@layer components`) um conjunto mínimo para padronizar layout sem freestyle:

- `.page` → aplica base plane (bg/text/min-height)
- `.reading` → largura de leitura (ex: ~72ch) + paddings
- `.stack-*` → ritmo vertical (ex: `stack-sm/md/lg`)
- `.surface` → paper-on-paper (bg-surface + shadow-surface + radius + padding padrão)

Regra:

- `.surface` só quando **tipografia + spacing** não resolvem separação.

---

## 8) Conteúdo e renderização (estático primeiro)

- Priorizar conteúdo como “primeiro cidadão” (MD/MDX opcional)
- Rotas devem funcionar sem JS extra (quando possível)
- Componentização mínima; evitar UI “framework-ish”
- Navegação explícita, curta, sem menus ocultos

---

## 9) Checklist de PR (qualidade e coerência)

1. Não introduziu cores fora dos tokens
2. Não introduziu shadows/radius fora dos tokens
3. Não usou valores arbitrários sem justificativa
4. Hierarquia textual sem ambiguidade (papéis distintos, visuais distintos)
5. Elevation só onde necessário (especialmente `/harada`)
6. Focus visível e acessível
7. Sem elementos decorativos que não carreguem significado

---

## 10) Entregáveis imediatos

- `app/styles/app.css` (tokens + `@import "tailwindcss";` + classes canônicas)
- `vite.config.ts` (plugin tailwind + router)
- Estrutura de rotas vazias com layout base + nav
- Página `/harada` com grid/quadros usando `.surface`

---

## 11) Decisões pendentes (antes de “congelar”)

- `/notes` vs `/writing` (naming)
- política de dark mode:
  - apenas automático (prefers-color-scheme) vs toggle persistente
- formato de conteúdo:
  - JSX puro vs MDX para páginas de texto longo
- hosting (Cloudflare, Vercel, Netlify, etc.)

---

## 12) Critério de sucesso

- O site “parece inevitável”: calmo, direto, sem ruído
- A hierarquia é óbvia sem esforço
- A elevação é inferida, não notada
- O sistema impede variações estéticas acidentais
- Implementação rápida, manutenção simples, longevidade alta
