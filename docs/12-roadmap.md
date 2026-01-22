# 12 — Roadmap de Implementacao

> Este documento e o tronco do sistema. Se algo nao esta aqui, esta fora do escopo de execucao.

---

## Visao Geral

A implementacao e dividida em fases incrementais. Cada fase deve estar **completa e funcional** antes de passar para a proxima.

---

## Premissas e Contratos (Obrigatorios)

Este roadmap parte das decisoes e contratos abaixo. Se houver conflito, este roadmap deve ser atualizado.

- **Decisoes consolidadas**: [13-decisions.md](./13-decisions.md)
- **Filosofia e direcao**: [01-philosophy.md](./01-philosophy.md) e [03-design-philosophy.md](./03-design-philosophy.md)
- **Semantica e hierarquia**: [06-semantic-text.md](./06-semantic-text.md)
- **Sistema de design**: [04-design-system.md](./04-design-system.md)
- **Cores**: [16-color-system-spec.md](./16-color-system-spec.md)
- **Tipografia**: [17-typography-system-spec.md](./17-typography-system-spec.md)
- **Elevacao**: [05-elevation-system.md](./05-elevation-system.md)
- **Aliens**: [18-alien-elements-spec.md](./18-alien-elements-spec.md) e [25-aliens-catalog.md](./25-aliens-catalog.md)
- **Transferencia de foco**: [19-focus-transfer-spec.md](./19-focus-transfer-spec.md)
- **Estado global**: [20-global-state-contract.md](./20-global-state-contract.md)
- **Interacao**: [21-interaction-spec.md](./21-interaction-spec.md)
- **Motion**: [22-motion-policy.md](./22-motion-policy.md)
- **Encontrabilidade**: [23-findability-navigation.md](./23-findability-navigation.md)
- **Resiliencia**: [24-resilience-loading-error.md](./24-resilience-loading-error.md)
- **Publicacao e print**: [26-publishing-export.md](./26-publishing-export.md)
- **Arquitetura de informacao**: [02-information-architecture.md](./02-information-architecture.md)
- **Rotas**: [10-route-specs.md](./10-route-specs.md) e [11-harada-spec.md](./11-harada-spec.md)
- **Stack tecnico**: [07-tech-stack.md](./07-tech-stack.md)
- **Componentes**: [09-component-specs.md](./09-component-specs.md)
- **Qualidade**: [14-pr-checklist.md](./14-pr-checklist.md) e [15-success-criteria.md](./15-success-criteria.md)
- **Indice da documentacao**: [README.md](./README.md)
- **Contexto original**: [00-origin.md](./00-origin.md)

---

## Mapa da Documentacao (Tronco, Galhos e Folhas)

### Galhos (impacto direto nas fases)

- **Direcao e semantica**: [01-philosophy.md](./01-philosophy.md), [03-design-philosophy.md](./03-design-philosophy.md), [06-semantic-text.md](./06-semantic-text.md)
- **Sistema visual**: [04-design-system.md](./04-design-system.md), [16-color-system-spec.md](./16-color-system-spec.md), [17-typography-system-spec.md](./17-typography-system-spec.md), [05-elevation-system.md](./05-elevation-system.md)
- **Aliens e foco**: [18-alien-elements-spec.md](./18-alien-elements-spec.md), [25-aliens-catalog.md](./25-aliens-catalog.md), [19-focus-transfer-spec.md](./19-focus-transfer-spec.md)
- **Estado e interacao**: [20-global-state-contract.md](./20-global-state-contract.md), [21-interaction-spec.md](./21-interaction-spec.md), [22-motion-policy.md](./22-motion-policy.md), [24-resilience-loading-error.md](./24-resilience-loading-error.md), [23-findability-navigation.md](./23-findability-navigation.md)
- **Arquitetura e rotas**: [02-information-architecture.md](./02-information-architecture.md), [10-route-specs.md](./10-route-specs.md), [11-harada-spec.md](./11-harada-spec.md)
- **Implementacao**: [07-tech-stack.md](./07-tech-stack.md), [08-css-implementation.md](./08-css-implementation.md), [09-component-specs.md](./09-component-specs.md)
- **Governanca e validacao**: [13-decisions.md](./13-decisions.md), [14-pr-checklist.md](./14-pr-checklist.md), [15-success-criteria.md](./15-success-criteria.md)
- **Publicacao**: [26-publishing-export.md](./26-publishing-export.md)

### Folhas (contexto e navegacao)

- [00-origin.md](./00-origin.md) — conversa que gerou o projeto
- [README.md](./README.md) — indice e mapa de entrada

---

## Fase 0 — Fundacao (Ja Existente)

> **Status:** ✅ Completo

O repositorio ja possui:

- [x] Estrutura React Router v7
- [x] Vite configurado
- [x] Tailwind CSS v4
- [x] TypeScript
- [x] Cloudflare Workers setup
- [x] i18n basico (react-i18next) com conteudo em ingles e portugues (PT-BR)
- [x] Rota `/harada` inicial implementada
- [x] Estrutura `content/harada/` com JSON

Verificado em 2026-01-21: itens conferidos no repositorio (React Router v7, Vite, Tailwind v4, TypeScript, Workers, i18n, rota /harada, conteudo Harada).

**Referencias diretas:** [07-tech-stack.md](./07-tech-stack.md), [10-route-specs.md](./10-route-specs.md), [11-harada-spec.md](./11-harada-spec.md)

---

## Fase 1 — Design System Base (Tokens + Classes + Contratos)

> **Status:** ✅ Completo

### 1.1 Tokens fundamentais (design system)

- [x] Alinhar tokens de cor com [16-color-system-spec.md](./16-color-system-spec.md)
- [x] Alinhar tokens tipograficos responsivos com [17-typography-system-spec.md](./17-typography-system-spec.md)
- [x] Alinhar tokens de elevacao com [05-elevation-system.md](./05-elevation-system.md)
- [x] Implementar tokens de motion conforme [22-motion-policy.md](./22-motion-policy.md)
- [x] Implementar tokens de focus overlay conforme [19-focus-transfer-spec.md](./19-focus-transfer-spec.md)
- [x] Garantir que `.dark` sobrescreve apenas tokens (sem mudar semantica)

### 1.2 Layout base (mesa vs papel)

- [x] Implementar tokens de leitura e padding conforme [04-design-system.md](./04-design-system.md)
- [x] Garantir `.reading` com `clamp()` e `ch` conforme [08-css-implementation.md](./08-css-implementation.md)

### 1.3 Classes canonicas

- [x] Implementar classes tipograficas `.t-*` responsivas
- [x] Implementar `.surface`, `.tile`, `.page`, `.reading`, `.section`, `.stack-*`
- [x] Implementar `.alien`, `.focus-layer`, `.focus-surface`

### 1.4 Base plane e acessibilidade

- [x] `html` usa tokens de font, bg e cor
- [x] `:focus-visible` usa accent sem glow
- [x] Links com estados de hover consistentes

### 1.5 Elevacao global

- [x] Criar `app/lib/elevation.ts`
- [x] Injetar `--a`, `--hi`, `--ao`, `--sh` via JS
- [x] Validar ausencia de drop-shadow tradicional

### 1.6 MDX base

- [x] Configurar MDX no Vite
- [x] Criar arvore `app/content/mdx/{en,pt}/notes`
- [x] Criar `app/content-index/notes.{en,pt}.ts`
- [x] Implementar `MDXProvider` com kit minimo

### 1.7 Print styles

- [x] Adicionar estilos de print conforme [26-publishing-export.md](./26-publishing-export.md)
- [x] Garantir que surfaces viram borda leve em print

### Entregaveis Fase 1

- `app/app.css` alinhado a [08-css-implementation.md](./08-css-implementation.md)
- Tokens completos para light/dark/motion/focus
- Iluminacao global funcional
- MDX base funcionando

**Referencias diretas:** [04-design-system.md](./04-design-system.md), [05-elevation-system.md](./05-elevation-system.md), [08-css-implementation.md](./08-css-implementation.md), [16-color-system-spec.md](./16-color-system-spec.md), [17-typography-system-spec.md](./17-typography-system-spec.md), [22-motion-policy.md](./22-motion-policy.md), [19-focus-transfer-spec.md](./19-focus-transfer-spec.md), [26-publishing-export.md](./26-publishing-export.md)

---

## Fase 2 — Componentes Core (Interacao e Estado)

> **Status:** ✅ Completo

### 2.1 Navegacao e base

- [x] Implementar `SiteNav` conforme [09-component-specs.md](./09-component-specs.md)
- [x] Implementar `SkipLink` e garantir foco inicial (ver [21-interaction-spec.md](./21-interaction-spec.md))

### 2.2 Kit MDX minimo

- [x] `Callout` com surface
- [x] `Figure` com `.alien` e `.surface`
- [x] `CodeBlock` com surface e overflow previsivel

### 2.3 Focus Transfer e Engaged

- [x] Implementar `FocusLayer` e `FocusSurface`
- [x] Adicionar foco preso, ESC e click fora
- [x] Adicionar scroll lock durante Engaged
- [x] Integrar history state para Back fechar

### 2.4 Infra de estado global

- [x] Definir estado global conforme [20-global-state-contract.md](./20-global-state-contract.md)
- [x] Conectar estado Engaged com componentes de midia

### Entregaveis Fase 2

- Componentes em `app/ui/components/`
- Foco e navegacao por teclado funcionando

**Referencias diretas:** [09-component-specs.md](./09-component-specs.md), [20-global-state-contract.md](./20-global-state-contract.md), [21-interaction-spec.md](./21-interaction-spec.md), [19-focus-transfer-spec.md](./19-focus-transfer-spec.md)

---

## Fase 3 — Rotas Principais (IA + Conteudo Base)

> **Status:** 🔄 Em progresso

### 3.1 Alinhamento de arquitetura

- [x] Confirmar estrutura das rotas em [02-information-architecture.md](./02-information-architecture.md)
- [x] Garantir URLs estaveis por idioma

### 3.2 Rotas core

- [x] Home (`/`) conforme [10-route-specs.md](./10-route-specs.md)
- [x] How I Work (`/how-i-work`)
- [x] Principles (`/principles`) com anchors
- [x] About (`/about`)
- [x] Projects (`/projects`)
- [x] Uses (`/uses`)
- [x] Contact (`/contact`)

### 3.3 Notes (MDX)

- [x] Lista `/notes` via `content-index`
- [x] Paginas `/notes/:slug` por idioma
- [x] Garantir `.reading` e `.t-*` em MDX

### 3.4 i18n e prerender

- [x] Prefixar rotas com `/:lang(en|pt)`
- [x] Gerar lista no `prerender()` com base em `content-index`
- [x] Validar fallback para `/en`

### 3.5 Encontrabilidade e anchors

- [ ] IDs estaveis para secoes longas
- [ ] Foco no heading ao navegar por hash

### Entregaveis Fase 3

- Todas as rotas principais funcionando
- Navegacao entre rotas funcional
- Anchor navigation consistente

**Referencias diretas:** [02-information-architecture.md](./02-information-architecture.md), [10-route-specs.md](./10-route-specs.md), [23-findability-navigation.md](./23-findability-navigation.md)

---

## Fase 4 — Harada (Refinamento)

> **Status:** 🔄 Em progresso

### 4.1 Verificacao de contrato

- [ ] Carregar `index.json` e resolver versao
- [ ] Validar schema e limites
- [ ] Normalizar grid deterministico

### 4.2 UI e acessibilidade

- [ ] Aplicar classes canonicas (`.surface`, `.tile`)
- [ ] Tooltips acessiveis
- [ ] Print-friendly para export

### 4.3 SEO

- [ ] Meta `noindex, nofollow`
- [ ] Header `X-Robots-Tag`
- [ ] `robots.txt` bloqueando `/harada`

### Entregaveis Fase 4

- Rota `/harada` alinhada com spec
- Pipeline de validacao completo

**Referencias diretas:** [11-harada-spec.md](./11-harada-spec.md), [26-publishing-export.md](./26-publishing-export.md)

---

## Fase 5 — Qualidade, Politicas e Resiliencia

> **Status:** 🔲 Pendente

### 5.1 Acessibilidade e interacao

- [ ] Navegacao por teclado em todas as rotas
- [ ] Foco nao obscurecido (anchors e overlays)
- [ ] Ordem de headings valida

### 5.2 Focus Transfer e Engaged

- [ ] Engaged nunca ocorre sem acao explicita
- [ ] ESC e Back sempre fecham
- [ ] Scroll lock consistente

### 5.3 Motion

- [ ] Reduced motion respeitado em todas as transicoes
- [ ] Sem bounce/overshoot

### 5.4 Aliens e fallback

- [ ] Todos os aliens em `.surface` com `.alien`
- [ ] Fallback textual para falhas
- [ ] Captions consistentes

### 5.5 Resiliencia de carregamento

- [ ] Estados Idle/Loading/Ready/Empty/Error implementados
- [ ] Mensagens curtas e factuais

### 5.6 Print e export

- [ ] Print styles validados
- [ ] Export (se aplicavel) discreto e em `.t-meta`

### 5.7 Performance

- [ ] Validar LCP, CLS e FID conforme [15-success-criteria.md](./15-success-criteria.md)
- [ ] Verificar font loading (Inter)
- [ ] Validar bundle size

### 5.8 Dark Mode

- [ ] Implementar toggle (decisao em [13-decisions.md](./13-decisions.md))
- [ ] Testar todos os tokens em dark mode
- [ ] Verificar contraste em dark mode

### 5.9 i18n

- [ ] Garantir fallback para ingles
- [ ] Verificar textos traduzidos por rota

### Entregaveis Fase 5

- Interacao consistente
- Resiliencia comprovada
- Print sem ruido

**Referencias diretas:** [14-pr-checklist.md](./14-pr-checklist.md), [15-success-criteria.md](./15-success-criteria.md), [13-decisions.md](./13-decisions.md), [21-interaction-spec.md](./21-interaction-spec.md), [19-focus-transfer-spec.md](./19-focus-transfer-spec.md), [22-motion-policy.md](./22-motion-policy.md), [18-alien-elements-spec.md](./18-alien-elements-spec.md), [25-aliens-catalog.md](./25-aliens-catalog.md), [24-resilience-loading-error.md](./24-resilience-loading-error.md), [26-publishing-export.md](./26-publishing-export.md)

---

## Fase 6 — Conteudo e Traducoes

> **Status:** 🔲 Pendente

### 6.1 Conteudo

- [ ] Escrever `/how-i-work`
- [ ] Escrever `/about`
- [ ] Definir e escrever `/principles`
- [ ] Escrever `/projects`, `/uses`, `/contact`
- [ ] Criar primeira nota em `/notes`

### 6.2 Traducoes

- [ ] Garantir EN + PT-BR completos
- [ ] Verificar `public/locales/` e MDX por idioma

### Entregaveis Fase 6

- Conteudo completo
- Traducoes alinhadas

**Referencias diretas:** [02-information-architecture.md](./02-information-architecture.md), [13-decisions.md](./13-decisions.md)

---

## Fase 7 — Deploy e Launch

> **Status:** 🔲 Pendente

### 7.1 Validacoes finais

- [ ] Rodar checklist de PR completo
- [ ] Verificar criterios de sucesso
- [ ] Testar em multiplos browsers
- [ ] Testar em mobile

### 7.2 Deploy

- [ ] Deploy para Cloudflare Workers
- [ ] Verificar dominio/DNS
- [ ] Verificar HTTPS

### 7.3 Monitoramento

- [ ] Configurar analytics (se desejado)
- [ ] Verificar logs de erro

### Entregaveis Fase 7

- Site live em producao
- Documentacao final atualizada

**Referencias diretas:** [14-pr-checklist.md](./14-pr-checklist.md), [15-success-criteria.md](./15-success-criteria.md), [07-tech-stack.md](./07-tech-stack.md)

---

## Resumo de Status

| Fase | Nome | Status |
| ---- | ---- | ------ |
| 0 | Fundacao | ✅ Completo |
| 1 | Design System Base | ✅ Completo |
| 2 | Componentes Core | ✅ Completo |
| 3 | Rotas Principais | 🔄 Em progresso |
| 4 | Harada | 🔄 Em progresso |
| 5 | Qualidade | 🔲 Pendente |
| 6 | Conteudo | 🔲 Pendente |
| 7 | Deploy e Launch | 🔲 Pendente |

---

## Proximos Passos Imediatos

1. **Iniciar Fase 1**: alinhar tokens e classes com [08-css-implementation.md](./08-css-implementation.md)
2. **Implementar motion e focus overlay** conforme [22-motion-policy.md](./22-motion-policy.md) e [19-focus-transfer-spec.md](./19-focus-transfer-spec.md)
3. **Configurar MDX base** e kit minimo

---

## Criterios para Avancar de Fase

Antes de avancar para a proxima fase:

- [ ] Todos os itens da fase atual estao ✅
- [ ] Nenhum erro de lint/type
- [ ] `npm run biome:check` passa
- [ ] `npm run typecheck` passa
- [ ] Verificacao visual em browser
