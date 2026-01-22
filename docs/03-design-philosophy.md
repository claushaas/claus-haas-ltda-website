# 03 — Filosofia de Design

> Este documento define os princípios visuais e de experiência que guiam todas as decisões de design.

---

## Intenção Fundamental

O design existe para:

1. **Reduzir ambiguidade**
2. **Suportar leitura e compreensão**
3. **Expressar ordem e intenção**
4. **Desaparecer atrás do conteúdo**

> A beleza é um **subproduto da ordem**, não um objetivo.

---

## Qualidades Experienciais

### O que o site DEVE sentir

| Qualidade | Manifestação |
| --------- | ------------ |
| Calmo | Sem urgência, sem pressão |
| Quieto | Sem barulho visual |
| Deliberado | Cada elemento tem propósito |
| Confiável | Estável, previsível |
| Denso, mas não pesado | Muito conteúdo, pouca massa visual |

### O que o site NÃO DEVE sentir

| Anti-qualidade | Evitar |
| -------------- | ------ |
| Improvizado | Nada deve parecer "jogado lá" |
| Decorativo | Sem elementos ornamentais |
| Trendy | Sem seguir modas |
| Emocionalmente manipulativo | Sem gatilhos emocionais forçados |

---

## Regras Negativas (Proibições)

O sistema explicitamente proíbe:

- ❌ Floreio visual sem propósito funcional
- ❌ Novidade pelo sake de diferenciação
- ❌ Elementos UI adicionados "porque parece vazio"
- ❌ Tendências estéticas

> Se algo parece estar faltando, o problema é **conteúdo ou estrutura**, não decoração.

---

## Layout

### Princípios

- **Layout single-column** para leitura
- **Comprimento de linha limitado** (~72 caracteres)
- **Margens generosas**
- **Ritmo vertical previsível**

### Sensação

O layout deve sentir:

> *"Desenhado, não ilustrado."*

Isso significa:

- Intenção clara em cada decisão
- Nada é acidente
- Nada é decoração

---

## Componentes Permitidos

### Lista Completa de Componentes Permitidos

| Componente | Uso |
| ---------- | --- |
| Blocos de texto | Conteúdo principal |
| Headings | Hierarquia |
| Listas simples | Estrutura paralela |
| Links | Navegação |
| Separadores sutis | Principalmente via espaçamento |
| Surfaces (elevação) | Apenas quando necessário |

### Componentes Explicitamente Excluídos

| Excluído | Motivo |
| -------- | ------ |
| Cards decorativos | Ruído visual |
| Sombras decorativas | Sem propósito semântico |
| Gradientes | Decoração |
| Ilustrações | Não é o foco |
| Ícones sem função estrita | Decoração |
| Animações além de hover/focus | Distração |

---

## Cor como Semântica

> Cor é semântica, não expressão.

Ver [16-color-system-spec.md](./16-color-system-spec.md) para as regras não-negociáveis e tokens oficiais.

### Princípios

- Hierarquia é dirigida por **luminosidade**, não saturação
- Accent color é usado **raramente**
- Se a cor accent começa a parecer "bonita", está sendo usada demais

### Regra de Accent

> *"Se a cor accent começa a parecer 'bonita', ela está sendo usada demais."*

Accent é apenas para:

- Links
- Estados de foco
- Sinais interativos chave

---

## Tipografia como Interface

> Texto é a interface principal deste site.

Portanto:

- Hierarquia deve ser imediatamente perceptível
- Papéis devem ser inequívocos
- Ênfase deve ser intencional
- Repetição deve reforçar significado, não confundir

Um leitor nunca deve precisar perguntar:
> "Isso é um título, uma seção, uma nota, ou apenas texto enfatizado?"

A resposta deve ser óbvia pela forma visual apenas.

---

## Consistência sobre Expressividade

> Consistência é priorizada sobre expressividade.

Uma vez que um padrão visual é estabelecido:

- Deve ser reutilizado
- Não deve ser reinterpretado
- Não deve ser levemente alterado

Variação sutil é fonte de fricção cognitiva.

O sistema deve sentir:
> *"Previsível, aprendível, e estável."*

---

## Design Como Linguagem

O design não é estilo — é **linguagem**.

Cada decisão visual carrega significado:

- Tamanho → hierarquia
- Peso → ênfase e autoridade
- Cor → papel semântico
- Opacidade/contraste → prioridade

Nenhuma dimensão deve ser usada redundantemente sem propósito.

Se múltiplos sinais são usados, devem reforçar o mesmo significado — nunca contradizê-lo.

---

## Princípio Guia

> **Se o significado de um pedaço de texto não é óbvio pela sua forma visual, o sistema falhou.**

Tipografia, espaçamento e ênfase existem para **codificar significado**, não estilo.

Este site trata ambiguidade visual como um **erro funcional**, não como uma discordância subjetiva.
