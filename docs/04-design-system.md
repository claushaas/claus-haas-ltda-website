# 04 — Design System

> Este documento define o sistema de design: tokens, tipografia, cores e regras.

---

## Filosofia do Design System

O design system é **restritivo por design**.

Princípios:

- Se dois elementos parecem iguais, eles significam a mesma coisa
- Se significam coisas diferentes, devem parecer diferentes de forma relevante
- Tokens são a fonte da verdade
- Sem valores arbitrários
- Liberdade existe no pensamento e conteúdo — não na decoração

---

## Tipografia

### Família

#### Uma única fonte para todo texto: Inter

```css
--font-family-base: Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
```

Racional:

- Neutra
- Alta legibilidade em texto longo
- Headings fortes mas não dramáticos
- Desenhada para desaparecer durante a leitura
- Atemporal e estável

**Sem famílias secundárias.**

### Pesos Permitidos

| Token | Valor | Uso |
| ----- | ----- | --- |
| `--weight-regular` | 400 | Texto body |
| `--weight-medium` | 500 | Ênfase sutil, meta |
| `--weight-semibold` | 600 | Headings |

**Pesos além de semibold são proibidos.**

### Tamanhos

| Token | Valor | Uso |
| ----- | ----- | --- |
| `--text-body` | 1rem | Texto principal |
| `--text-meta` | 0.875rem | Texto secundário, notas |
| `--text-heading` | 1.375rem | Headings |

**Apenas um tamanho de heading é permitido.**

Subseções dependem de espaçamento, não de inflação de tamanho.

### Line Heights

| Token | Valor | Uso |
| ----- | ----- | --- |
| `--line-body` | 1.7 | Texto longo |
| `--line-heading` | 1.4 | Títulos |
| `--line-meta` | 1.5 | Texto secundário |

---

## Cores — Light Mode

Todas as cores são intencionalmente frias e levemente azuladas.
Sem neutros puros.

### Ambiente Base

| Token | Valor | Uso |
| ----- | ----- | --- |
| `--bg-base` | `#f6f7f9` | Background principal |
| `--bg-base-subtle` | `#eef1f5` | Background sutil |

O base representa a superfície da mesa.

### Superfície Elevada

| Token | Valor | Uso |
| ----- | ----- | --- |
| `--bg-surface` | `#ffffff` | Papel sobre papel |
| `--bg-surface-muted` | `#f9fafb` | Superfície muted |

A diferença deve ser sutil mas perceptível.

### Texto

| Token | Valor | Uso |
| ----- | ----- | --- |
| `--text-primary` | `#111827` | Texto principal |
| `--text-secondary` | `#374151` | Texto secundário |
| `--text-muted` | `#6b7280` | Texto terciário, meta |

Cada papel de texto deve ser visualmente inequívoco.
Se dois papéis parecem similares, a hierarquia falhou.

### Accent (Azul)

| Token | Valor | Uso |
| ----- | ----- | --- |
| `--accent-primary` | `#2563eb` | Links, focus |
| `--accent-muted` | `#3b82f6` | Hover states |

Accent é usado **apenas** para:

- Links
- Estados de foco
- Sinais interativos intencionais

---

## Cores — Dark Mode

Dark mode preserva o mesmo modelo físico.

### Ambiente Base

| Token | Valor |
| ----- | ----- |
| `--bg-base` | `#0f172a` |
| `--bg-base-subtle` | `#020617` |

### Superfície Elevada

| Token | Valor |
| ----- | ----- |
| `--bg-surface` | `#111827` |
| `--bg-surface-muted` | `#1f2933` |

Elevação em dark mode é percebida primariamente através de luminosidade, não sombra.

### Texto

| Token | Valor |
| ----- | ----- |
| `--text-primary` | `#e5e7eb` |
| `--text-secondary` | `#cbd5e1` |
| `--text-muted` | `#9ca3af` |

### Accent

| Token | Valor |
| ----- | ----- |
| `--accent-primary` | `#60a5fa` |
| `--accent-muted` | `#93c5fd` |

**Efeitos de glow são explicitamente proibidos.**

---

## Elevação (Sistema de Iluminação Global)

> ⚠️ **Este sistema NÃO usa drop-shadows tradicionais.**
> Ver [05-elevation-system.md](./05-elevation-system.md) para especificação completa.

Elevação é **binária**: presente ou ausente.

### Princípio

O efeito de elevação é alcançado por **iluminação global**, não por sombras clichês:

- Um ponto de luz fixo (topo-centro do viewport)
- Todos os elementos respondem à mesma fonte de luz
- Intensidade varia com a distância até a luz
- Usa rim light, oclusão e shading internos

### Variáveis CSS Dinâmicas

| Variável | Descrição | Injetada por |
| -------- | --------- | ------------ |
| `--a` | Ângulo da luz | JavaScript |
| `--hi` | Intensidade do highlight | JavaScript |
| `--ao` | Intensidade da oclusão | JavaScript |
| `--sh` | Intensidade do shading | JavaScript |

### Fallbacks Estáticos

```css
/* Light Mode */
--hi: 0.18;
--ao: 0.15;
--sh: 0.08;
--a: 90deg;

/* Dark Mode */
--hi: 0.10;
--ao: 0.08;
--sh: 0.04;
```

### Border Radius

```css
--radius-surface: 6px;
```

### O que NÃO usar

```css
/* ❌ PROIBIDO - drop-shadow tradicional */
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
```

---

## Espaçamento

Espaçamento codifica significado.

| Token | Valor | Uso |
| ----- | ----- | --- |
| `--space-xs` | 0.5rem | Espaçamento mínimo |
| `--space-sm` | 1rem | Espaçamento pequeno |
| `--space-md` | 2rem | Espaçamento médio |
| `--space-lg` | 3rem | Espaçamento grande |
| `--space-xl` | 5rem | Espaçamento extra grande |

### Regras

- Espaçamento idêntico significa relação semântica idêntica
- Novos valores de espaçamento são **proibidos**
- Se um novo valor parece necessário, a hierarquia está incorreta

### Área de Leitura — Mesa vs Papel (Legibilidade Responsiva)

O viewport é a mesa. A coluna de conteúdo é o papel.
A mesa pode ser infinita; o papel deve permanecer legível para humanos.

O site deve preservar um comprimento de linha confortável em todos os dispositivos.
Largura não é um número fixo; é uma **restrição de legibilidade**.

#### Objetivos

- Evitar linhas muito longas (fadiga ocular)
- Evitar colunas muito estreitas (fragmentação)
- Preservar margens calmas (respiro da mesa)
- Manter tipografia e largura de coluna acopladas

#### Contrato

- Largura de leitura é definida como um **intervalo**, não um valor fixo único
- O sistema visa ~60–75 caracteres por linha para texto denso
- Excesso de largura do viewport vira "ambiente", não largura de conteúdo

#### Tokens

| Token | Valor | Descrição |
| ----- | ----- | --------- |
| `--reading-min` | 45ch | Largura mínima da coluna |
| `--reading-ideal` | 68ch | Largura ideal (alvo) |
| `--reading-max` | 78ch | Largura máxima (teto) |
| `--pad-min` | 1rem | Padding lateral mínimo |
| `--pad-ideal` | 2rem | Padding lateral ideal |
| `--pad-max` | 3rem | Padding lateral máximo |

#### Implementação

```css
.reading {
  width: min(100%, clamp(var(--reading-min), 90vw, var(--reading-max)));
  max-width: var(--reading-max);
  margin-inline: auto;
  padding-inline: clamp(var(--pad-min), 4vw, var(--pad-max));
}
```

#### Notas

- **Não** aumentar largura de leitura para "ocupar espaço"
- Se um layout parece vazio em telas largas, adicione estrutura (nav, surfaces, seções), não comprimento de linha
- Muito largo → cansativo (salto ocular grande)
- Muito estreito → dispersivo (muitas quebras)

---

## Regra de Integridade

> **Se uma decisão visual não cabe nos tokens existentes, ela é inválida.**

Ou:

1. A decisão está errada
2. Os tokens precisam de mudança **deliberada** (não ad-hoc)

Nunca adicione um valor "só dessa vez".

---

## Mapeamento de Componentes

### Conteúdo Base

- background: `--bg-base`
- text: `--text-primary`
- sem sombra

### Superfície Elevada

- background: `--bg-surface`
- shadow: `--shadow-surface`
- padding: `--space-md`
- border-radius: `--radius-surface`

**Nenhuma variação é permitida.**

---

## Acessibilidade

- Contraste mínimo deve atender WCAG AA
- Estados de foco devem usar accent color
- Nenhuma informação pode ser transmitida apenas por cor

> Acessibilidade é consequência de clareza, não uma camada.
