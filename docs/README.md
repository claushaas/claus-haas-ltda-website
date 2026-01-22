# Documentação v0.2 — Site Pessoal Claus Haas

> **Status:** Em planejamento  
> **Última atualização:** 2026-01-21  
> **Versão da documentação:** 0.2.0

---

## Índice de Documentos

Esta pasta contém a documentação completa para a implementação da versão 0.2 do site pessoal. Cada documento tem um objetivo específico e bem definido.

### Documentos Principais

| Documento | Objetivo |
| --------- | -------- |
| [00-origin.md](./00-origin.md) | Origem e contexto da conversa que gerou este projeto |
| [01-philosophy.md](./01-philosophy.md) | Filosofia e propósito do site — o "porquê" |
| [02-information-architecture.md](./02-information-architecture.md) | Estrutura de rotas e arquitetura de informação |
| [03-design-philosophy.md](./03-design-philosophy.md) | Princípios visuais e de experiência |
| [04-design-system.md](./04-design-system.md) | Sistema de design: tokens, tipografia, cores |
| [05-elevation-system.md](./05-elevation-system.md) | Sistema de elevação "paper-on-paper" |
| [06-semantic-text.md](./06-semantic-text.md) | Clareza semântica: texto, espaço e significado visual |
| [07-tech-stack.md](./07-tech-stack.md) | Stack técnico e configuração |
| [08-css-implementation.md](./08-css-implementation.md) | Implementação CSS: tokens e classes canônicas |
| [09-component-specs.md](./09-component-specs.md) | Especificações de componentes |
| [10-route-specs.md](./10-route-specs.md) | Especificações de cada rota |
| [11-harada-spec.md](./11-harada-spec.md) | Especificação completa da rota /harada |
| [12-roadmap.md](./12-roadmap.md) | Roadmap com fases de implementação |
| [13-decisions.md](./13-decisions.md) | Decisões pendentes e log de decisões |
| [14-pr-checklist.md](./14-pr-checklist.md) | Checklist de qualidade para PRs |
| [15-success-criteria.md](./15-success-criteria.md) | Critérios de sucesso e validação |
| [16-color-system-spec.md](./16-color-system-spec.md) | Especificação completa do sistema de cores (OKLCH) |

---

## Como Usar Esta Documentação

### Para Implementação

1. Comece lendo [00-origin.md](./00-origin.md) para entender o contexto
2. Leia [01-philosophy.md](./01-philosophy.md) para entender o propósito
3. Consulte [12-roadmap.md](./12-roadmap.md) para ver as fases
4. Use [13-decisions.md](./13-decisions.md) para tomar decisões pendentes
5. Implemente seguindo as specs técnicas (07-11)
6. Valide usando [14-pr-checklist.md](./14-pr-checklist.md) e [15-success-criteria.md](./15-success-criteria.md)

### Marcações Especiais

Ao longo da documentação, você encontrará marcações que indicam decisões pendentes:

- `<!-- DECISÃO_PENDENTE: ... -->` — Decisão que precisa ser tomada antes da implementação
- `<!-- TODO: ... -->` — Ação a ser executada
- `<!-- NOTA: ... -->` — Observação importante

Use busca por estas marcações para encontrar todos os pontos que precisam de atenção.

---

## Resumo Executivo

### O que é este site?

Um site pessoal que funciona como:

- **Filtro cognitivo** — orienta quem deve continuar e quem não é o público
- **Acelerador de colaboração** — reduz fricção em interações profissionais
- **Manual operacional público** — explica como o Claus pensa e trabalha
- **Redutor de ambiguidade** — clareza acima de tudo

### O que NÃO é

- Não é um currículo
- Não é um blog
- Não é um portfolio tradicional
- Não é uma marca pessoal ou marketing
- Não é um exercício de storytelling

### Princípio Central

> O site deve operar da mesma forma que eu opero.

Design, estrutura e conteúdo não "representam" o Claus estilisticamente — eles **se comportam** como seu pensamento se comporta:

- estruturado
- intencional
- calmo
- explícito
- orientado a sistemas
- livre de ruído ornamental

---

## Idiomas e i18n

- **Idiomas** — O site está disponível em inglês e português (PT-BR) e usa `react-i18next` para servir o idioma ativo.
- **Fallback** — O inglês é o idioma padrão e o conteúdo em PT-BR está disponível em `public/locales/{lang}.json`.

---

## Stack Técnico (Resumo)

- **React Router v7** — roteamento com data APIs
- **Vite** — bundler/dev server
- **Tailwind CSS v4** — CSS-first com tokens restritivos
- **TypeScript** — tipagem estrita
- **MDX** — conteúdo editorial (notes/escritos)
- **Cloudflare Workers** — deploy

---

## Próximos Passos Imediatos

1. Revisar [13-decisions.md](./13-decisions.md) e tomar decisões pendentes
2. Seguir o roadmap fase por fase em [12-roadmap.md](./12-roadmap.md)
3. Implementar base CSS com tokens ([08-css-implementation.md](./08-css-implementation.md))
4. Criar estrutura de rotas conforme [10-route-specs.md](./10-route-specs.md)
