# 08 — Implementação CSS

> Este documento contém a implementação CSS completa: tokens e classes canônicas.

---

## Visão Geral

O CSS segue a abordagem **CSS-first** do Tailwind v4:

1. Importar Tailwind
2. Definir tokens em `:root`
3. Sobrescrever em `.dark`
4. Definir classes canônicas em `@layer components`

---

## Arquivo Principal: `app/app.css`

```css
@import "tailwindcss";

/* ===========================
   DESIGN SYSTEM TOKENS
   =========================== */

/* Ver 16-color-system-spec.md para invariantes, tabela LxC e validação de contraste. */

:root {
  /* --- Cores: Light Mode (OKLCH first, rgba fallback quando necessário) --- */
  
  /* Base Environment (mesa de trabalho) */
  --bg-base: oklch(0.96 0.010 260);
  --bg-base-subtle: oklch(0.94 0.012 260);

  /* Elevated Surface (papel sobre papel) */
  --bg-surface: oklch(0.99 0.005 260);
  --bg-surface-muted: oklch(0.975 0.007 260);
  --bg-tile: oklch(0.965 0.008 260);

  /* Text */
  --text-heading-color: oklch(0.18 0.020 260);
  --text-primary: oklch(0.22 0.020 260);
  --text-secondary: oklch(0.35 0.015 260);
  --text-muted: oklch(0.48 0.010 260);

  /* Accent (azul) */
  --accent-primary: oklch(0.60 0.14 260);
  --accent-muted: oklch(0.68 0.14 260);
  --accent-strong: oklch(0.52 0.16 260);

  /* Borders/separators (uso raro) */
  --border-subtle: oklch(0.88 0.012 260);

  /* Focus overlay (ver 19-focus-transfer-spec.md) */
  --focus-overlay: oklch(0.22 0.02 260 / 0.45);

  /* Motion tokens (ver 22-motion-policy.md) */
  --motion-fast: 120ms;
  --motion-medium: 180ms;
  --motion-slow: 240ms;

  --ease-standard: cubic-bezier(0.2, 0, 0, 1);

  /* --- Elevação (Sistema de Iluminação Global) --- */
  /* Ver 05-elevation-system.md para detalhes completos */
  --radius-surface: 6px;
  
  /* Fallbacks estáticos para quando JS não estiver disponível */
  --hi: 0.18;  /* highlight (rim light) */
  --ao: 0.15;  /* oclusão */
  --sh: 0.08;  /* shading */
  --a: 90deg;  /* ângulo da luz (topo-centro) */

  /* --- Tipografia --- */
  /* Ver 17-typography-system-spec.md para regras e racional */
  --font-family-base: Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;

  --font-body-min: 0.95rem;
  --font-body-ideal: 1rem;
  --font-body-max: 1.05rem;

  --font-heading-min: 1.25rem;
  --font-heading-ideal: 1.375rem;
  --font-heading-max: 1.5rem;

  --font-meta-min: 0.8rem;
  --font-meta-ideal: 0.875rem;
  --font-meta-max: 0.9rem;

  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;

  --line-body: 1.7;
  --line-heading: 1.4;
  --line-meta: 1.5;

  /* --- Espaçamento --- */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 2rem;
  --space-lg: 3rem;
  --space-xl: 5rem;

  /* --- Layout: Reading Area (Mesa vs Papel) --- */
  /* A largura de leitura é um intervalo, não um valor fixo */
  --reading-min: 45ch;
  --reading-ideal: 68ch;
  --reading-max: 78ch;
  
  /* Padding lateral adaptativo */
  --pad-min: 1rem;
  --pad-ideal: 2rem;
  --pad-max: 3rem;
}

/* --- Dark Mode --- */
.dark {
  --bg-base: oklch(0.16 0.020 260);
  --bg-base-subtle: oklch(0.13 0.020 260);

  --bg-surface: oklch(0.20 0.020 260);
  --bg-surface-muted: oklch(0.23 0.018 260);
  --bg-tile: oklch(0.26 0.016 260);

  --text-heading-color: oklch(0.95 0.010 260);
  --text-primary: oklch(0.92 0.010 260);
  --text-secondary: oklch(0.84 0.012 260);
  --text-muted: oklch(0.72 0.010 260);

  --accent-primary: oklch(0.60 0.14 260);
  --accent-muted: oklch(0.68 0.14 260);
  --accent-strong: oklch(0.52 0.16 260);

  --border-subtle: oklch(0.30 0.016 260);

  --focus-overlay: oklch(0.16 0.02 260 / 0.65);

  /* Dark mode: elevação por luminosidade, menos oclusão */
  --hi: 0.10;
  --ao: 0.08;
  --sh: 0.04;
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --motion-fast: 1ms;
    --motion-medium: 1ms;
    --motion-slow: 1ms;
  }
}

/* ===========================
   BASE PLANE DEFAULTS
   =========================== */

html {
  font-family: var(--font-family-base);
  background: var(--bg-base);
  color: var(--text-primary);
}

/* Links */
a {
  color: var(--accent-primary);
  text-decoration: none;
}

a:hover {
  color: var(--accent-muted);
  text-decoration: underline;
}

/* Focus acessível */
:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
}

/* ===========================
   CANONICAL CLASSES
   =========================== */

@layer components {
  
  /* --- Layout --- */
  
  /* page: base plane wrapper */
  .page {
    min-height: 100dvh;
    background: var(--bg-base);
    color: var(--text-primary);
  }

  /* reading: single-column, long-form width + adaptive padding */
  /* O viewport é a mesa; a coluna é o papel */
  .reading {
    width: min(100%, clamp(var(--reading-min), 90vw, var(--reading-max)));
    max-width: var(--reading-max);
    margin-inline: auto;
    padding-inline: clamp(var(--pad-min), 4vw, var(--pad-max));
  }

  /* --- Stacks (ritmo vertical) --- */
  
  .stack-xs > * + * { margin-top: var(--space-xs); }
  .stack-sm > * + * { margin-top: var(--space-sm); }
  .stack-md > * + * { margin-top: var(--space-md); }
  .stack-lg > * + * { margin-top: var(--space-lg); }
  .stack-xl > * + * { margin-top: var(--space-xl); }

  /* --- Elevation (paper-on-paper com iluminação global) --- */
  /* Ver 05-elevation-system.md para detalhes do sistema */
  
  /* 
   * IMPORTANTE: Este sistema NÃO usa drop-shadow tradicional.
   * Usa rim light, oclusão e shading internos controlados por JS.
   * As variáveis --a, --hi, --ao, --sh são injetadas por JavaScript.
   */
  .surface {
    background: var(--bg-surface);
    border-radius: var(--radius-surface);
    
    /* Highlight (rim light) - borda interna iluminada */
    box-shadow: 
      inset 0 0 0 1px rgba(255, 255, 255, var(--hi, 0.18));
    
    /* Gradientes internos para oclusão e shading */
    background-image: 
      linear-gradient(
        calc(var(--a, 90deg) + 180deg),
        rgba(0, 0, 0, var(--ao, 0.15)) 0%,
        transparent 40%
      ),
      linear-gradient(
        var(--a, 90deg),
        rgba(255, 255, 255, var(--sh, 0.08)) 0%,
        transparent 30%
      );
  }

  /* surface padding (também semântico) */
  .surface-pad {
    padding: var(--space-md);
  }

  /* --- Tipografia --- */
  
  .t-heading {
    font-size: clamp(
      var(--font-heading-min),
      1.1rem + 0.6vw,
      var(--font-heading-max)
    );
    line-height: var(--line-heading);
    font-weight: var(--weight-semibold);
    color: var(--text-primary);
  }

  .t-body {
    font-size: clamp(
      var(--font-body-min),
      0.9rem + 0.3vw,
      var(--font-body-max)
    );
    line-height: var(--line-body);
    font-weight: var(--weight-regular);
    color: var(--text-secondary);
  }

  .t-meta {
    font-size: clamp(
      var(--font-meta-min),
      0.75rem + 0.2vw,
      var(--font-meta-max)
    );
    line-height: var(--line-meta);
    font-weight: var(--weight-medium);
    color: var(--text-muted);
  }

  /* --- Elementos Alienigenas --- */
  /* Ver 18-alien-elements-spec.md para regras de contencao */
  .alien {
    /* marcador semantico */
  }

  /* --- Transferencia de Foco --- */
  /* Ver 19-focus-transfer-spec.md para regras de foco */
  .focus-layer {
    position: fixed;
    inset: 0;
    background: var(--focus-overlay);
    display: grid;
    place-items: center;
    z-index: 50;
  }

  .focus-surface {
    max-width: min(92vw, var(--reading-max));
  }

  /* --- Sections --- */
  
  .section {
    padding-block: var(--space-lg);
  }

  .section-tight {
    padding-block: var(--space-md);
  }

  /* --- Navigation --- */
  
  .nav-row {
    display: flex;
    flex-wrap: wrap;
    column-gap: var(--space-sm);
    row-gap: var(--space-xs);
    font-size: clamp(
      var(--font-meta-min),
      0.75rem + 0.2vw,
      var(--font-meta-max)
    );
    line-height: var(--line-meta);
    font-weight: var(--weight-medium);
  }

  /* --- MDX Helpers --- */

  .callout-neutral {
    border-left: 2px solid var(--accent-muted);
  }

  .callout-warning {
    border-left: 2px solid var(--text-primary);
    background: var(--bg-surface-muted);
  }

  .code-block {
    overflow-x: auto;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 0.9rem;
    line-height: 1.6;
  }

  /* --- Harada Grid --- */
  
  .harada-grid {
    display: grid;
    gap: var(--space-sm);
  }

  @media (min-width: 768px) {
    .harada-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 1024px) {
    .harada-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  /* tile: muted paper within paper */
  .tile {
    border-radius: var(--radius-surface);
    background: var(--bg-tile);
    padding: var(--space-xs);
  }
}
```

---

## Vocabulário Fechado de Classes

### Layout

| Classe | Propósito |
| ------ | --------- |
| `.page` | Wrapper base plane |
| `.reading` | Largura de leitura + padding |
| `.section` | Padding vertical grande |
| `.section-tight` | Padding vertical médio |

### Stacks (Ritmo Vertical)

| Classe | Espaçamento |
| ------ | ----------- |
| `.stack-xs` | 0.5rem |
| `.stack-sm` | 1rem |
| `.stack-md` | 2rem |
| `.stack-lg` | 3rem |
| `.stack-xl` | 5rem |

### Elevação

| Classe | Propósito |
| ------ | --------- |
| `.surface` | Paper-on-paper (iluminação global via JS) |
| `.surface-pad` | Padding interno da surface |
| `.tile` | Paper muted dentro de surface |

> ⚠️ **Nota:** O sistema de elevação usa iluminação global calculada por JavaScript, não drop-shadows tradicionais. Ver [05-elevation-system.md](./05-elevation-system.md).

### Tipografia

| Classe | Propósito |
| ------ | --------- |
| `.t-heading` | Títulos |
| `.t-body` | Texto principal |
| `.t-meta` | Texto secundário |

### Elementos Alienigenas

| Classe | Propósito |
| ------ | --------- |
| `.alien` | Marcador semântico para conteúdo externo |

### Transferencia de Foco

| Classe | Propósito |
| ------ | --------- |
| `.focus-layer` | Overlay de foco e bloqueio de fundo |
| `.focus-surface` | Surface ativa no estado engajado |

### Navegação

| Classe | Propósito |
| ------ | --------- |
| `.nav-row` | Row flexível de links |

### Harada

| Classe | Propósito |
| ------ | --------- |
| `.harada-grid` | Grid responsivo para blocos |

---

## Regras de Uso

1. Componha layouts usando **apenas** as classes canônicas
2. **Sem** novas sombras, radii ou valores de espaçamento
3. **Sem** valores arbitrários em `className`
4. `.surface` **apenas** quando espaçamento + tipografia não resolvem separação
5. Accent apenas para links e focus
6. Se uma nova necessidade visual aparecer: atualize tokens ou adicione classe canônica — **nunca freestyle**
7. **Sem drop-shadows tradicionais** — usar sistema de iluminação global

---

## Script de Iluminação Global

O JavaScript abaixo deve ser incluído para calcular as variáveis de iluminação:

```ts
// app/lib/elevation.ts

const LIGHT = { x: 0, y: 0 };
const RANGE = 800;

const BASE = { hi: 0.12, ao: 0.10, sh: 0.06 };
const MAX = { hi: 0.34, ao: 0.30, sh: 0.16 };

function updateElevatedElement(el: Element) {
  const htmlEl = el as HTMLElement;
  const rect = htmlEl.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  const dx = LIGHT.x - cx;
  const dy = LIGHT.y - cy;

  const distance = Math.hypot(dx, dy);
  const angle = Math.atan2(dy, dx) * 180 / Math.PI;

  const f = 1 / (1 + distance / RANGE);

  const hi = BASE.hi + (MAX.hi - BASE.hi) * f;
  const ao = BASE.ao + (MAX.ao - BASE.ao) * f;
  const sh = BASE.sh + (MAX.sh - BASE.sh) * f;

  htmlEl.style.setProperty('--a', `${angle}deg`);
  htmlEl.style.setProperty('--hi', hi.toFixed(3));
  htmlEl.style.setProperty('--ao', ao.toFixed(3));
  htmlEl.style.setProperty('--sh', sh.toFixed(3));
}

export function initElevation() {
  function update() {
    LIGHT.x = window.innerWidth / 2;
    LIGHT.y = 0;
    document.querySelectorAll('.surface').forEach(updateElevatedElement);
  }

  window.addEventListener('resize', update);
  window.addEventListener('scroll', update, { passive: true });
  update();
}
```

Chamar `initElevation()` no entry client:

```ts
// app/entry.client.tsx
import { initElevation } from '~/lib/elevation';

// ... após hydration
initElevation();
```

---

## Print Styles

Print deve manter hierarquia e remover ruido visual.
Ver [26-publishing-export.md](./26-publishing-export.md).

```css
@media print {
  html {
    background: #fff;
    color: #000;
  }

  .page {
    background: #fff;
  }

  .surface {
    box-shadow: none;
    background: transparent;
    border: 1px solid #ccc;
  }

  .nav-row,
  nav {
    display: none;
  }
}
```

---

## Extensão do Tailwind (Opcional)

Se precisar usar utilitários do Tailwind que referenciem os tokens:

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      borderRadius: {
        surface: 'var(--radius-surface)',
      },
      // Nota: boxShadow.surface foi removido - usamos iluminação global
      colors: {
        accent: {
          DEFAULT: 'var(--accent-primary)',
          muted: 'var(--accent-muted)',
          strong: 'var(--accent-strong)',
        },
        bg: {
          base: 'var(--bg-base)',
          subtle: 'var(--bg-base-subtle)',
          surface: 'var(--bg-surface)',
          'surface-muted': 'var(--bg-surface-muted)',
          tile: 'var(--bg-tile)',
        },
        border: {
          subtle: 'var(--border-subtle)',
        },
        text: {
          heading: 'var(--text-heading-color)',
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
      },
      fontFamily: {
        base: ['var(--font-family-base)'],
      },
      fontSize: {
        body: [
          'clamp(var(--font-body-min), 0.9rem + 0.3vw, var(--font-body-max))',
          { lineHeight: 'var(--line-body)' },
        ],
        heading: [
          'clamp(var(--font-heading-min), 1.1rem + 0.6vw, var(--font-heading-max))',
          { lineHeight: 'var(--line-heading)' },
        ],
        meta: [
          'clamp(var(--font-meta-min), 0.75rem + 0.2vw, var(--font-meta-max))',
          { lineHeight: 'var(--line-meta)' },
        ],
      },
      fontWeight: {
        regular: 'var(--weight-regular)',
        medium: 'var(--weight-medium)',
        semibold: 'var(--weight-semibold)',
      },
      maxWidth: {
        reading: 'var(--max-reading)',
      },
      spacing: {
        's-xs': 'var(--space-xs)',
        's-sm': 'var(--space-sm)',
        's-md': 'var(--space-md)',
        's-lg': 'var(--space-lg)',
        's-xl': 'var(--space-xl)',
      },
    },
  },
} satisfies Config;
```

<!-- NOTA: Com Tailwind v4 CSS-first, a extensão do config pode não ser necessária se todas as classes forem canônicas. Avaliar necessidade durante implementação. -->
