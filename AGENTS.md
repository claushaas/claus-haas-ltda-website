# AGENTS — Claus Haas Ltda. website

Guia rápido para agentes e contribuidores trabalharem no repositório com segurança e consistência.

## Prioridades e fluxo de trabalho

- Pense em etapas curtas: entenda o problema, levante contexto nos arquivos, monte um plano enxuto, implemente incrementalmente, valide e repita até resolver.
- Faça mudanças pequenas e reversíveis; leia o trecho completo antes de editar.
- Valide sempre: `npm run biome:check` para lint/format, `npm run typecheck` (gera tipos do Wrangler + React Router + TSC). Rode antes de abrir PR.
- Seja explícito sobre casos de borda; prefira guard clauses e mensagens claras de erro.
- Mantenha comentários apenas quando esclarecem decisões não óbvias.

## Stack e arquitetura

- React 19 + React Router 7 (SSR/data APIs), TypeScript estrito, Vite 7, Tailwind CSS 4 com Radix Colors, motion para animações, i18next para i18n.
- Executa em Cloudflare Workers (wrangler), Node >= 24.13.0. Uso de Docker (`up`/`down`) disponível.
- Importações absolutas via `~/`. Prefira exports nomeados e componentes/funções em arrow functions.
- Evite classes e efeitos desnecessários; use recursos do React 19 como `use`, `useTransition` e actions em `<form>` quando fizer sentido.
- Zod e Zustand são recomendados, mas ainda não instalados; avalie necessidade antes de adicionar dependências.

## Conteúdo e rotas principais

- `app/root.tsx`: define `<Layout>` com meta tags, assets, canonical e i18n inicial. `useIsBot` evita scripts para bots; preserve esse comportamento.
- `app/routes/home.tsx`: landing com textos traduzidos (`useTranslation`), vitrine de projetos/skills e call-to-action de contato.
- `app/routes/palette-kit.tsx`: carrega Markdown de `/content/{lng}/color-manifesto.md` com fallback para `en`; não quebre o fetch nem o fallback.
- i18n (`app/i18n/i18n.ts`): idiomas `en`/`pt`. Detecção: `lng` na URL > cookie `i18next` > header `accept-language` > fallback `en`. Recursos em `public/locales/{lang}.json`. Respeite e atualize traduções ao alterar textos.

## Rota /harada (spec em `docs/planning/harada-route.md`)

- Harada é derivado de JSON semântico em `app/content/harada/` (`index.json` escolhe a versão; `schema.json` documenta posições e limites; `dummy.json` mostra mapeamento 9×9).
- Regras fixas: grid 9×9; goal no centro; 8 themes ao redor em ordem N, NE, E, SE, S, SW, W, NW; cada theme tem 8 actions distribuídas no bloco 3×3 (célula central vazia); strings ≤ 120 chars.
- Pipeline esperado: carregar `index.json` → resolver versão → validar com schema/limites → normalizar para grid determinístico → renderizar.
- SEO: `/harada` não deve ser indexada (`noindex, nofollow, noarchive` em meta/header e `robots.txt` bloqueando).

## Scripts úteis

- Desenvolvimento: `npm run dev`
- Build: `npm run build`
- Preview local: `npm run preview`
- Typegen + typecheck: `npm run typecheck`
- Lint/format: `npm run biome:check`
- Deploy Cloudflare: `npm run deploy` (wrangler)
- Docker helpers: `npm run up` / `npm run down`

## Convenções adicionais

- Estilização preferencial com utilitários Tailwind + tokens Radix; evite CSS avulso sem necessidade.
- Tratamento de erros com mensagens amigáveis e logs claros; retorne cedo em estados inválidos.
- Não exponha segredos (Supabase/Cloudflare) no código; use variáveis de ambiente/Secrets do Wrangler.
- Preserve acessibilidade: headings hierárquicos, aria-labels, foco e tooltips quando aplicável.
- Conteúdo textual deve passar por i18n; evite strings hardcoded fora dos arquivos de tradução.
