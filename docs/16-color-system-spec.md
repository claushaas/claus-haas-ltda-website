# 16 — Especificacao do Sistema de Cores (OKLCH)

> Este documento define o sistema de cores oficial (OKLCH, H=260) para light e dark.

---

## Visao Geral

Este spec define um **sistema de cor de matiz unico** em OKLCH, projetado para:

- ambiente calmo e minimalista de “mesa + papel”
- clareza semantica (papeis inequivocos)
- comportamento consistente entre light/dark
- restricao (dificil de quebrar)

Ideia central:

- **Matiz fixa**: `H = 260`
- **Croma codifica intensidade** (accent vs neutros)
- **Luminosidade codifica hierarquia** (planos e prioridade de texto)

Nada aqui e decorativo. Cada token tem significado.

---

## 1) Invariantes (Nao negociaveis)

1. **Matiz fixa** para o sistema inteiro:
   - `H = 260` para accent e neutros
   - nenhum outro matiz permitido

2. **Neutros sao “cinzas azulados”**, nao cinza puro:
   - neutros usam croma muito baixo (`C = 0.005–0.02`)
   - isso mantem toda a UI no mesmo “mundo perceptivo”

3. **Elevacao e semantica**:
   - plano base vs plano de superficie
   - elevacao nao significa “importancia”

4. **Sem freestyle**:
   - se precisar de cor fora dos tokens, atualize este spec (deliberadamente)
   - nunca cores ad hoc

---

## 2) Como Usar (Light/Dark)

### Alternancia de modo

- Default: `:root` define **Light Mode**
- Adicione `.dark` em `<html>` (ou `<body>`) para ativar **Dark Mode**

### Regras de uso

- Texto deve usar apenas tokens `--text-*`
- Superficies devem usar apenas tokens `--bg-*`
- Links/focus devem usar apenas tokens `--accent-*`
- Separadores devem usar apenas tokens `--border-*` (minimo)

---

## 3) Conjunto de Tokens (Completo)

### 3.1 Accent (a unica “cor”)

Sao os unicos tokens com croma significativo.

```css
/* Accent */
--accent-primary: oklch(0.60 0.14 260);
--accent-muted:   oklch(0.68 0.14 260);
--accent-strong:  oklch(0.52 0.16 260); /* opcional para active/pressed, raro */
```

Regras:

- accent so e usado para links, focus e sinais explicitos de interacao
- nunca usar em decoracao, backgrounds ou areas grandes

---

### 3.2 Neutros — Light Mode (mesa + papel)

Neutros mantem o mesmo matiz, com croma muito baixo.

```css
/* Base environment (desk) */
--bg-base:        oklch(0.96 0.010 260);
--bg-base-subtle: oklch(0.94 0.012 260);

/* Elevated surfaces (paper on paper) */
--bg-surface:       oklch(0.99 0.005 260);
--bg-surface-muted: oklch(0.975 0.007 260);

/* Tile / inner surface (muted paper within paper) */
--bg-tile: oklch(0.965 0.008 260);

/* Borders/separators (minimal, optional) */
--border-subtle: oklch(0.88 0.012 260);
```

---

### 3.3 Texto — Light Mode (papeis semanticos)

Texto deve ser inequivoco por contraste e papel.

Nota: neste repo, `--text-heading` e reservado para tamanho tipografico. O token de cor usa `--text-heading-color`.

```css
/* Text */
--text-primary:   oklch(0.22 0.020 260); /* maior legibilidade, nunca preto puro */
--text-secondary: oklch(0.35 0.015 260); /* texto base */
--text-muted:     oklch(0.48 0.010 260); /* meta, captions, helper text */

/* Opcional: heading mais forte */
--text-heading-color: oklch(0.18 0.020 260);
```

Regras:

- paragrafos padrao devem usar `--text-secondary`
- headings usam `--text-primary` ou `--text-heading-color`
- meta usa apenas `--text-muted`

---

### 3.4 Neutros — Dark Mode (mesmo modelo fisico)

No dark mode, a elevacao e percebida mais por **luminosidade** do que por sombra.

```css
/* Base environment (desk) */
--bg-base:        oklch(0.16 0.020 260);
--bg-base-subtle: oklch(0.13 0.020 260);

/* Elevated surfaces (paper) */
--bg-surface:       oklch(0.20 0.020 260);
--bg-surface-muted: oklch(0.23 0.018 260);

/* Tile / inner surface */
--bg-tile: oklch(0.26 0.016 260);

/* Borders/separators (minimal, optional) */
--border-subtle: oklch(0.30 0.016 260);
```

---

### 3.5 Texto — Dark Mode

```css
/* Text */
--text-primary:   oklch(0.92 0.010 260);
--text-secondary: oklch(0.84 0.012 260);
--text-muted:     oklch(0.72 0.010 260);

/* Opcional: heading mais forte */
--text-heading-color: oklch(0.95 0.010 260);
```

Regras:

- mantenha croma baixo no texto; clareza vem do L, nao da cor
- evite glow; o contraste deve vir da separacao de planos + L do texto

---

## 4) Tabela L x C (Sistema de matiz unico)

Matiz fixa: `H=260`.
Definimos papeis escolhendo **Luminosidade (L)** e **Croma (C)**.

### 4.1 Tabela de papeis — Light Mode

| Papel          | Token                  |    L   |    C   |  H  | Significado           |
| -------------- | ---------------------- | ------ | ------ | --- | --------------------- |
| Base (mesa)    | `--bg-base`            | 0.96   | 0.010  | 260 | plano ambiental       |
| Base sutil     | `--bg-base-subtle`     | 0.94   | 0.012  | 260 | variacao minima       |
| Papel          | `--bg-surface`         | 0.99   | 0.005  | 260 | superficie elevada    |
| Papel muted    | `--bg-surface-muted`   | 0.975  | 0.007  | 260 | superficie secundaria |
| Tile           | `--bg-tile`            | 0.965  | 0.008  | 260 | separacoes internas   |
| Borda sutil    | `--border-subtle`      | 0.88   | 0.012  | 260 | separadores           |
| Heading        | `--text-heading-color` | 0.18   | 0.020  | 260 | titulos               |
| Texto primario | `--text-primary`       | 0.22   | 0.020  | 260 | legibilidade maxima   |
| Texto sec.     | `--text-secondary`     | 0.35   | 0.015  | 260 | corpo                 |
| Texto muted    | `--text-muted`         | 0.48   | 0.010  | 260 | meta/aux              |
| Accent prim.   | `--accent-primary`     | 0.60   | 0.14   | 260 | links/focus           |
| Accent muted   | `--accent-muted`       | 0.68   | 0.14   | 260 | hover                 |
| Accent strong  | `--accent-strong`      | 0.52   | 0.16   | 260 | pressed (raro)        |

### 4.2 Tabela de papeis — Dark Mode

| Papel          | Token                  |    L  |    C   |  H  | Significado             |
| -------------- | ---------------------- | ----- | ------ | --- | ----------------------- |
| Base (mesa)    | `--bg-base`            | 0.16  | 0.020  | 260 | plano ambiental         |
| Base sutil     | `--bg-base-subtle`     | 0.13  | 0.020  | 260 | ambiente mais profundo  |
| Papel          | `--bg-surface`         | 0.20  | 0.020  | 260 | superficie elevada      |
| Papel muted    | `--bg-surface-muted`   | 0.23  | 0.018  | 260 | superficie secundaria   |
| Tile           | `--bg-tile`            | 0.26  | 0.016  | 260 | separacoes internas     |
| Borda sutil    | `--border-subtle`      | 0.30  | 0.016  | 260 | separadores             |
| Heading        | `--text-heading-color` | 0.95  | 0.010  | 260 | titulos                 |
| Texto primario | `--text-primary`       | 0.92  | 0.010  | 260 | legibilidade maxima     |
| Texto sec.     | `--text-secondary`     | 0.84  | 0.012  | 260 | corpo                   |
| Texto muted    | `--text-muted`         | 0.72  | 0.010  | 260 | meta/aux                |
| Accent prim.   | `--accent-primary`     | 0.60  | 0.14   | 260 | links/focus             |
| Accent muted   | `--accent-muted`       | 0.68  | 0.14   | 260 | hover                   |

Notas:

- accent permanece perceptualmente “o mesmo objeto” em ambos os modos
- neutros variam principalmente por L; croma permanece minimo

---

## 5) Validacao de contraste (Obrigatoria)

Este sistema deve ser validado contra metas de contraste.

### 5.1 Metas

- Texto normal: **WCAG AA** (>= 4.5:1)
- Texto grande (>= 24px regular ou >= 18.66px bold): **AA** (>= 3:1)
- Indicadores de foco devem ser claramente visiveis em ambos os planos

### 5.2 Checagens obrigatorias (minimo)

Validar estes pares:

Light mode:

- `--text-secondary` em `--bg-base`
- `--text-secondary` em `--bg-surface`
- `--text-muted` em `--bg-base`
- `--accent-primary` em `--bg-base` (links)
- `--accent-primary` como outline em `--bg-base` e `--bg-surface`

Dark mode:

- `--text-secondary` em `--bg-base`
- `--text-secondary` em `--bg-surface`
- `--text-muted` em `--bg-base`
- `--accent-primary` em `--bg-base`
- `--accent-primary` como outline em `--bg-base` e `--bg-surface`

### 5.3 O que fazer se falhar

Ajustar nesta ordem:

1. Ajustar **L** do token de texto (preferido)
2. Ajustar **L** do token de background (se necessario)
3. Ajustar **C** somente como ultimo recurso (evitar transformar neutros em “cor”)

Nunca mudar o matiz.

---

## 6) Implementacao de referencia (Variaveis CSS)

Use esta estrutura:

```css
:root {
  /* Accent */
  --accent-primary: oklch(0.60 0.14 260);
  --accent-muted:   oklch(0.68 0.14 260);
  --accent-strong:  oklch(0.52 0.16 260);

  /* Light neutrals */
  --bg-base:        oklch(0.96 0.010 260);
  --bg-base-subtle: oklch(0.94 0.012 260);

  --bg-surface:       oklch(0.99 0.005 260);
  --bg-surface-muted: oklch(0.975 0.007 260);
  --bg-tile:          oklch(0.965 0.008 260);

  --border-subtle: oklch(0.88 0.012 260);

  /* Light text */
  --text-heading-color: oklch(0.18 0.020 260);
  --text-primary:       oklch(0.22 0.020 260);
  --text-secondary:     oklch(0.35 0.015 260);
  --text-muted:         oklch(0.48 0.010 260);
}

.dark {
  /* Dark neutrals */
  --bg-base:        oklch(0.16 0.020 260);
  --bg-base-subtle: oklch(0.13 0.020 260);

  --bg-surface:       oklch(0.20 0.020 260);
  --bg-surface-muted: oklch(0.23 0.018 260);
  --bg-tile:          oklch(0.26 0.016 260);

  --border-subtle: oklch(0.30 0.016 260);

  /* Dark text */
  --text-heading-color: oklch(0.95 0.010 260);
  --text-primary:       oklch(0.92 0.010 260);
  --text-secondary:     oklch(0.84 0.012 260);
  --text-muted:         oklch(0.72 0.010 260);

  /* Accent permanece igual (override apenas se contraste exigir) */
  --accent-primary: oklch(0.60 0.14 260);
  --accent-muted:   oklch(0.68 0.14 260);
  --accent-strong:  oklch(0.52 0.16 260);
}
```

---

## 7) Mapeamento Semantico (Como aplicar tokens)

- Base plane wrapper: `background: var(--bg-base); color: var(--text-primary);`
- Paragrafos: `color: var(--text-secondary);`
- Meta/captions: `color: var(--text-muted);`
- Headings: `color: var(--text-primary)` ou `--text-heading-color`
- Links: `color: var(--accent-primary);` hover para `--accent-muted`
- Superficies elevadas (“paper”): `background: var(--bg-surface);`
- Tiles dentro de superficies: `background: var(--bg-tile);`
- Bordas: `border-color: var(--border-subtle);` (raro, so para separadores)

Regra:
Se voce sentir vontade de inventar uma nova cor, provavelmente precisa de:

- melhor hierarquia de espacamento, ou
- separacao entre surface e base, ou
- um token faltante que deve ser adicionado deliberadamente aqui

---

## 8) Regra Final de Integridade

> O sistema inteiro e uma matiz sob uma unica luz.
> Se uma mudanca quebrar essa ilusao, ela e rejeitada.

Matiz e fixa. Significado e codificado por L e C. Todo o resto e ruido.
