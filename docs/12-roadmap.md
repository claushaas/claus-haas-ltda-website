# 12 — Roadmap de Implementação

> Este documento define as fases de implementação da v0.2.

---

## Visão Geral

A implementação é dividida em fases incrementais. Cada fase deve estar **completa e funcional** antes de passar para a próxima.

---

## Fase 0 — Fundação (Já Existente)

> **Status:** ✅ Completo

O repositório já possui:

- [x] Estrutura React Router v7
- [x] Vite configurado
- [x] Tailwind CSS v4
- [x] TypeScript
- [x] Cloudflare Workers setup
- [x] i18n básico (react-i18next)
- [x] Rota `/harada` inicial implementada
- [x] Estrutura `content/harada/` com JSON

---

## Fase 1 — Design System Base

> **Status:** 🔲 Pendente

### 1.1 Tokens CSS

- [ ] Implementar tokens em `:root` conforme [08-css-implementation.md](./08-css-implementation.md)
- [ ] Implementar tokens dark mode em `.dark`
- [ ] Verificar se tokens existentes no `app.css` estão alinhados com a spec

### 1.2 Classes Canônicas

- [ ] Implementar todas as classes canônicas em `@layer components`
- [ ] Remover classes não-canônicas existentes (se houver)
- [ ] Documentar qualquer desvio necessário

### 1.3 Base Plane

- [ ] Garantir que `html` usa tokens de font, bg, color
- [ ] Garantir estilos de link (accent, hover)
- [ ] Garantir `:focus-visible` acessível

### 1.4 Sistema de Iluminação Global

- [ ] Criar `app/lib/elevation.ts` com lógica de iluminação
- [ ] Implementar cálculo de ângulo e falloff por elemento
- [ ] Integrar no `entry.client.tsx`
- [ ] Testar que elementos `.surface` respondem à iluminação
- [ ] Verificar que NÃO há drop-shadows tradicionais

### Entregáveis Fase 1

- `app/app.css` atualizado com sistema completo
- `app/lib/elevation.ts` implementado
- Verificação de que dark mode funciona
- Verificação de que iluminação global funciona

---

## Fase 2 — Componentes Core

> **Status:** 🔲 Pendente

### 2.1 SiteNav

- [ ] Implementar `SiteNav` conforme [09-component-specs.md](./09-component-specs.md)
- [ ] Garantir acessibilidade (aria-label)
- [ ] Verificar responsividade (flex-wrap)

### 2.2 Layout Components

- [ ] Implementar `PageLayout` (opcional, pode ser inline)
- [ ] Implementar `PageHeader` (opcional, pode ser inline)
- [ ] Implementar `Footer`

### Entregáveis Fase 2

- Componentes em `app/ui/components/`
- Componentes testados visualmente

---

## Fase 3 — Rotas Principais

> **Status:** 🔲 Pendente

### 3.1 Home (`/`)

- [ ] Implementar conforme [10-route-specs.md](./10-route-specs.md)
- [ ] Usar estrutura base
- [ ] Incluir surface para "Start here"
- [ ] Incluir SiteNav e Footer

### 3.2 How I Work (`/how-i-work`)

- [ ] Implementar estrutura base
- [ ] Adicionar conteúdo do "manual operacional"
- [ ] Garantir hierarquia tipográfica clara

### 3.3 About (`/about`)

- [ ] Implementar estrutura base
- [ ] Criar conteúdo factual

### 3.4 Principles (`/principles`)

- [ ] Implementar estrutura base
- [ ] Definir e adicionar lista de princípios

### 3.5 Notes (`/notes`)

- [ ] Decidir formato (ver [13-decisions.md](./13-decisions.md))
- [ ] Implementar estrutura inicial

### Entregáveis Fase 3

- Todas as rotas principais funcionando
- Navegação entre rotas funcional

---

## Fase 4 — Harada (Refinamento)

> **Status:** 🔄 Em progresso (base já existe)

### 4.1 Verificação

- [ ] Verificar se implementação atual está alinhada com [11-harada-spec.md](./11-harada-spec.md)
- [ ] Garantir validação de schema
- [ ] Garantir normalização determinística

### 4.2 UI

- [ ] Aplicar classes canônicas (`.surface`, `.tile`, etc.)
- [ ] Verificar tooltips acessíveis
- [ ] Verificar layout print-friendly

### 4.3 SEO

- [ ] Verificar meta tags noindex
- [ ] Verificar header X-Robots-Tag
- [ ] Verificar robots.txt

### Entregáveis Fase 4

- Rota `/harada` alinhada com spec
- Testes de normalização (opcional)

---

## Fase 5 — Qualidade

> **Status:** 🔲 Pendente

### 5.1 Acessibilidade

- [ ] Verificar contraste WCAG AA
- [ ] Verificar navegação por teclado
- [ ] Verificar ordem de headings
- [ ] Verificar aria-labels

### 5.2 Performance

- [ ] Verificar bundle size
- [ ] Verificar font loading (Inter)
- [ ] Verificar Core Web Vitals

### 5.3 Dark Mode

- [ ] Implementar toggle (se decidido)
- [ ] Testar todos os tokens em dark mode
- [ ] Verificar contraste em dark mode

### 5.4 i18n

- [ ] Verificar textos traduzidos
- [ ] Garantir fallback para inglês

### Entregáveis Fase 5

- Site acessível e performático
- Dark mode funcional

---

## Fase 6 — Conteúdo

> **Status:** 🔲 Pendente

### 6.1 Textos

- [ ] Escrever conteúdo completo de `/how-i-work`
- [ ] Escrever conteúdo de `/about`
- [ ] Definir e escrever `/principles`
- [ ] Criar primeira nota para `/notes`

### 6.2 Traduções

- [ ] Traduzir todo conteúdo para PT-BR (se aplicável)
- [ ] Verificar arquivos em `public/locales/`

### Entregáveis Fase 6

- Site com conteúdo completo
- Traduções atualizadas

---

## Fase 7 — Deploy & Launch

> **Status:** 🔲 Pendente

### 7.1 Verificações Finais

- [ ] Rodar checklist de PR completo
- [ ] Verificar todos os critérios de sucesso
- [ ] Testar em múltiplos browsers
- [ ] Testar em mobile

### 7.2 Deploy

- [ ] Deploy para Cloudflare Workers
- [ ] Verificar domínio/DNS
- [ ] Verificar HTTPS

### 7.3 Monitoramento

- [ ] Configurar analytics (se desejado)
- [ ] Verificar logs de erro

### Entregáveis Fase 7

- Site live em produção
- Documentação final atualizada

---

## Resumo de Status

| Fase | Nome | Status |
| ---- | ---- | ------ |
| 0 | Fundação | ✅ Completo |
| 1 | Design System Base | 🔲 Pendente |
| 2 | Componentes Core | 🔲 Pendente |
| 3 | Rotas Principais | 🔲 Pendente |
| 4 | Harada | 🔄 Em progresso |
| 5 | Qualidade | 🔲 Pendente |
| 6 | Conteúdo | 🔲 Pendente |
| 7 | Deploy & Launch | 🔲 Pendente |

---

## Próximos Passos Imediatos

1. **Revisar decisões pendentes** em [13-decisions.md](./13-decisions.md)
2. **Iniciar Fase 1** — Atualizar `app/app.css` com tokens completos
3. **Validar** que dark mode funciona após atualização

---

## Critérios para Avançar de Fase

Antes de avançar para a próxima fase:

- [ ] Todos os itens da fase atual estão ✅
- [ ] Nenhum erro de lint/type
- [ ] `npm run biome:check` passa
- [ ] `npm run typecheck` passa
- [ ] Verificação visual em browser
