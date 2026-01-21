# 13 — Decisões Pendentes e Log de Decisões

> Este documento rastreia decisões que precisam ser tomadas e registra decisões já tomadas.

---

## Como Usar Este Documento

### Decisões Pendentes

Cada decisão pendente tem:

- **ID** único para referência
- **Contexto** — por que a decisão é necessária
- **Opções** — alternativas consideradas
- **Recomendação** — sugestão inicial (não vinculante)
- **Status** — PENDENTE | DECIDIDO

### Tomando uma Decisão

1. Revise o contexto e opções
2. Adicione sua decisão na seção "Decisão"
3. Mude o status para DECIDIDO
4. Adicione data e justificativa

---

## Decisões Pendentes

### DP-001: Nome da Rota de Notas

**Status:** 🔴 PENDENTE

**Contexto:**  
A rota para pensamento em movimento pode ser `/writing` ou `/notes`.

**Opções:**

| Opção | Prós | Contras |
| ----- | ---- | ------- |
| `/writing` | Mais polido, sugere conteúdo curado | Pode parecer mais formal |
| `/notes` | Mais cru, sugere laboratório de ideias | Menos "profissional" |

**Recomendação:**  
`/notes` parece mais alinhado com a filosofia de transparência e autenticidade do site.

**Decisão:**  
<!-- Preencher quando decidido -->

---

### DP-002: Política de Dark Mode

**Status:** 🔴 PENDENTE

**Contexto:**  
O site suporta dark mode, mas a política de ativação não foi definida.

**Opções:**

| Opção | Descrição | Complexidade |
| ----- | --------- | ------------ |
| 1. Automático apenas | Segue `prefers-color-scheme` | Baixa |
| 2. Toggle persistente | Cookie/localStorage para preferência | Média |
| 3. Ambos | Automático + override manual | Alta |

**Recomendação:**  
Começar com opção 1 (automático apenas). Adicionar toggle depois se houver demanda.

**Decisão:**  
<!-- Preencher quando decidido -->

---

### DP-003: Formato de Conteúdo Long-Form

**Status:** 🔴 PENDENTE

**Contexto:**  
Páginas como `/how-i-work` e `/principles` terão texto longo. Qual formato usar?

**Opções:**

| Opção | Prós | Contras |
| ----- | ---- | ------- |
| JSX puro | Controle total, tipagem | Verboso |
| MDX | Markdown + componentes | Mais setup, menos controle |
| Markdown | Simples, focado em conteúdo | Limitado, precisa de parser |

**Recomendação:**  
JSX para rotas principais (mais controle). MDX para `/notes` se o conteúdo for frequente.

**Decisão:**  
<!-- Preencher quando decidido -->

---

### DP-004: Formato da Rota `/notes`

**Status:** 🔴 PENDENTE

**Contexto:**  
Como estruturar a rota de notas/pensamentos?

**Opções:**

| Opção | Descrição |
| ----- | --------- |
| 1. Lista + páginas individuais | Index com links, cada nota é uma rota |
| 2. Página única | Todo conteúdo em uma página com seções |
| 3. Feed cronológico | Lista ordenada por data |
| 4. Tags/Categorias | Organização por tema |

**Recomendação:**  
Opção 1 (lista + páginas) é mais escalável. Começar simples, sem tags.

**Decisão:**  
<!-- Preencher quando decidido -->

---

### DP-005: Rotas Adicionais

**Status:** 🔴 PENDENTE

**Contexto:**  
Algumas rotas foram mencionadas mas não especificadas.

**Opções consideradas:**

| Rota | Propósito | Necessário para v0.2? |
| ---- | --------- | -------------------- |
| `/projects` | Mostrar trabalhos | Talvez não |
| `/contact` | Formulário ou email | Talvez não |
| `/uses` | Ferramentas que uso | Opcional |

**Recomendação:**  
Não incluir na v0.2. Manter foco nas rotas core.

**Decisão:**  
<!-- Preencher quando decidido -->

---

### DP-006: Internacionalização

**Status:** 🔴 PENDENTE

**Contexto:**  
O site já tem setup de i18n. Qual a política de idiomas?

**Opções:**

| Opção | Descrição |
| ----- | --------- |
| 1. Inglês apenas | Simplifica tudo |
| 2. EN + PT-BR | Dois idiomas completos |
| 3. EN primário, PT-BR parcial | Inglês é default, português onde faz sentido |

**Recomendação:**  
Opção 2 (EN + PT-BR), já que o setup existe. Mas garantir que fallback para EN funciona.

**Decisão:**  
<!-- Preencher quando decidido -->

---

### DP-007: Valores de Cor Finais

**Status:** 🔴 PENDENTE

**Contexto:**  
Os valores HEX definidos nos tokens são adequados?

**Opções:**

| Aspecto | Decisão Necessária |
| ------- | ----------------- |
| Formato | HEX ou OKLCH? |
| Valores | Os valores atuais estão bons? |
| Contraste | Verificar WCAG AA |

**Recomendação:**  
Manter HEX por simplicidade. Verificar contraste após implementação.

**Decisão:**  
<!-- Preencher quando decidido -->

---

## Decisões Tomadas

### DT-001: Fonte Principal

**Status:** ✅ DECIDIDO

**Data:** Durante conversa original

**Decisão:** Inter

**Justificativa:**  

- Neutra
- Alta legibilidade em texto longo
- Desenhada para desaparecer durante leitura
- Atemporal

**Alternativas consideradas:**

- Fira Code — descartada (monospace)
- Lora — descartada (serifada, elegante demais)

---

### DT-002: Stack Técnico

**Status:** ✅ DECIDIDO

**Data:** Durante conversa original

**Decisão:** React Router v7 + Vite + Tailwind v4 + Cloudflare Workers

**Justificativa:**  

- React Router v7 é o stack preferido do autor
- Tailwind v4 permite abordagem CSS-first
- Site majoritariamente estático combina bem
- Cloudflare Workers já estava configurado

---

### DT-003: Abordagem CSS

**Status:** ✅ DECIDIDO

**Data:** Durante conversa original

**Decisão:** CSS-first com classes canônicas (vocabulário fechado)

**Justificativa:**  

- Previne "freestyle" com Tailwind
- Mantém sistema semanticamente estável
- Força consistência
- Facilita manutenção

---

### DT-004: Modelo de Elevação

**Status:** ✅ DECIDIDO

**Data:** Durante conversa original

**Decisão:** Paper-on-paper com elevação binária

**Justificativa:**  

- Apenas 2 planos: base e elevated
- Sombra sutil, não decorativa
- Elevação não implica importância
- Evita "card UI" moderno

---

### DT-005: Cor Accent

**Status:** ✅ DECIDIDO

**Data:** Durante conversa original

**Decisão:** Azul único, usado apenas para links e focus

**Justificativa:**  

- Combinação com cinzas azulados
- Uso restrito evita overuse
- Não deve parecer "bonito" — deve ser funcional

---

## Template para Novas Decisões

```markdown
### DP-XXX: [Título]

**Status:** 🔴 PENDENTE

**Contexto:**  
[Por que essa decisão é necessária]

**Opções:**

| Opção | Descrição |
|-------|-----------|
| 1 | ... |
| 2 | ... |

**Recomendação:**  
[Sugestão inicial]

**Decisão:**  
<!-- Preencher quando decidido:
Data: YYYY-MM-DD
Decisão: [qual opção]
Justificativa: [por quê]
-->
```
