# 02 — Arquitetura de Informação

> Este documento define a estrutura de rotas e a arquitetura de informação do site.

---

## Princípio de Organização

Cada rota existe para responder a uma **pergunta específica**.

Nenhuma rota deve sobrepor responsabilidades com outra.

---

## Estrutura de Rotas

**Nota:** Todas as rotas públicas são prefixadas por idioma (`/en` e `/pt`). As descrições abaixo se referem ao “miolo” da rota após o prefixo.

### `/` — Home

**Pergunta respondida:** "Isso é para mim?"

| Aspecto | Descrição |
| ------- | --------- |
| **Função** | Ponto de entrada, Filtro cognitivo, Orientação (não explicação) |
| **Características** | Mínimo, Quieto, Confiante, Direcional (aponta para outras rotas) |

A home não tenta convencer. Ela orienta.

---

### `/about`

**Pergunta respondida:** "Quem é essa pessoa, factualmente?"

| Aspecto | Descrição |
| ------- | --------- |
| **Função** | Baseline humano e profissional, Contexto sem excesso de storytelling |
| **Características** | Estilo README, Factual, Conciso, Sem autobiografia, sem auto-promoção |

---

### `/how-i-work`

**Pergunta respondida:** "Como colaboro com essa pessoa?"

| Aspecto | Descrição |
| ------- | --------- |
| **Função** | Core do site, Manual operacional explícito, Expectativas, limites, padrões de colaboração |
| **Características** | Direto, Operacional, Sem linguagem suavizada, Sem empatia performática |

Esta é provavelmente a rota mais importante do site.

---

### `/principles`

**Pergunta respondida:** "O que não muda, independente do contexto?"

| Aspecto | Descrição |
| ------- | --------- |
| **Função** | Lista de invariantes, Âncoras de decisão, Filosófico mas prático |
| **Formato** | Um princípio por seção, Explicação curta, Sem linguagem motivacional |

---

### `/notes`

**Pergunta respondida:** "Como essa pessoa pensa ao longo do tempo?"

| Aspecto | Descrição |
| ------- | --------- |
| **Função** | Processo de pensamento em movimento, Essays, notas, frameworks, reflexões |

---

### `/projects`

**Pergunta respondida:** "O que essa pessoa já entregou?"

| Aspecto | Descrição |
| ------- | --------- |
| **Função** | Evidência de trabalho real, casos selecionados |
| **Características** | Objetivo, factual, sem marketing |

---

### `/contact`

**Pergunta respondida:** "Como falar com essa pessoa?"

| Aspecto | Descrição |
| ------- | --------- |
| **Função** | Canal direto e explícito |
| **Características** | Simples, sem fricção, sem formulário pesado |

---

### `/uses`

**Pergunta respondida:** "Com que ferramentas essa pessoa trabalha?"

| Aspecto | Descrição |
| ------- | --------- |
| **Função** | Setup, ferramentas e ambiente |
| **Características** | Transparente, sem glamour |

---

### `/harada`

**Pergunta respondida:** "Essa pessoa aplica estrutura a si mesma?"

| Aspecto | Descrição |
| ------- | --------- |
| **Função** | Prova viva de alinhamento entre discurso e prática, Sistema pessoal exposto intencionalmente |
| **Importante** | Deve ser contextualizado, Não enquadrado como auto-ajuda, Enquadrado como sistema e reflexão |
| **SEO** | Não indexado (noindex, nofollow) |

Ver [11-harada-spec.md](./11-harada-spec.md) para especificação completa.

---

## Diagrama de Navegação

```text
                    ┌─────────────┐
                    │     /       │  "Isso é pra mim?"
                    │    Home     │
                    └──────┬──────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
┌───────────────┐  ┌───────────────┐  ┌───────────────┐
│   /about      │  │  /how-i-work  │  │  /principles  │
│ "Quem é?"     │  │ "Como cola-   │  │ "O que não    │
│               │  │  borar?"      │  │  muda?"       │
└───────────────┘  └───────────────┘  └───────────────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
┌───────────────┐  ┌───────────────┐  ┌───────────────┐
│   /notes      │  │   /harada     │  │   (futuras    │
│ "Como pensa?" │  │ "Aplica em    │  │    rotas)     │
│               │  │  si mesmo?"   │  │               │
└───────────────┘  └───────────────┘  └───────────────┘
        │
        ├───────────────────────────────┬───────────────────────────────┐
        ▼                               ▼                               ▼
┌───────────────┐               ┌───────────────┐               ┌───────────────┐
│  /projects    │               │   /contact    │               │    /uses      │
│ "O que fez?"  │               │ "Como falar?" │               │ "Ferramentas" │
│               │               │               │               │               │
└───────────────┘               └───────────────┘               └───────────────┘
```

---

## Hierarquia de Importância

1. **`/how-i-work`** — Core do site, responde a pergunta mais útil
2. **`/`** — Ponto de entrada e filtro
3. **`/principles`** — Âncoras de decisão
4. **`/about`** — Baseline factual
5. **`/harada`** — Prova de prática (para quem quer ver mais)
6. **`/notes`** — Pensamento em evolução
7. **`/projects`** — Evidência de trabalho real
8. **`/contact`** — Canal de contato explícito
9. **`/uses`** — Ferramentas e setup

---

## Navegação

A navegação deve ser:

- **Explícita** — sem menus ocultos
- **Curta** — poucas opções
- **Presente** — visível em todas as páginas
- **Não decorativa** — funcional apenas

Ver [09-component-specs.md](./09-component-specs.md) para especificação do componente `SiteNav`.

---

## Rotas Futuras (Consideradas)

<!-- DECISÃO_PENDENTE: Rotas adicionais futuras

Rotas mencionadas mas não especificadas em detalhe:
- `/projects` — se necessário mostrar trabalhos
- `/contact` — se necessário formulário (ou apenas email)
- `/uses` — ferramentas que uso (padrão comum em sites de devs)

Decidir se alguma dessas é necessária para v0.2 ou se ficam para versões futuras.
-->
