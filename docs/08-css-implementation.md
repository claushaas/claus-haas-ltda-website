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

:root {
  /* --- Cores: Light Mode --- */
  
  /* Base Environment (mesa de trabalho) */
  --bg-base: #f6f7f9;
  --bg-base-subtle: #eef1f5;

  /* Elevated Surface (papel sobre papel) */
  --bg-surface: #ffffff;
  --bg-surface-muted: #f9fafb;

  /* Text */
  --text-primary: #111827;
  --text-secondary: #374151;
  --text-muted: #6b7280;

  /* Accent (azul) */
  --accent-primary: #2563eb;
  --accent-muted: #3b82f6;

  /* --- Elevação (Sistema de Iluminação Global) --- */
  /* Ver 05-elevation-system.md para detalhes completos */
  --radius-surface: 6px;
  
  /* Fallbacks estáticos para quando JS não estiver disponível */
  --hi: 0.18;  /* highlight (rim light) */
  --ao: 0.15;  /* oclusão */
  --sh: 0.08;  /* shading */
  --a: 90deg;  /* ângulo da luz (topo-centro) */

  /* --- Tipografia --- */
  --font-family-base: Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;

  --text-body: 1rem;
  --text-meta: 0.875rem;
  --text-heading: 1.375rem;

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

  /* --- Layout --- */
  --max-reading: 72ch;
}

/* --- Dark Mode --- */
.dark {
  --bg-base: #0f172a;
  --bg-base-subtle: #020617;

  --bg-surface: #111827;
  --bg-surface-muted: #1f2933;

  --text-primary: #e5e7eb;
  --text-secondary: #cbd5e1;
  --text-muted: #9ca3af;

  --accent-primary: #60a5fa;
  --accent-muted: #93c5fd;

  /* Dark mode: elevação por luminosidade, menos oclusão */
  --hi: 0.10;
  --ao: 0.08;
  --sh: 0.04;
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

  /* reading: single-column, long-form width + side padding */
  .reading {
    max-width: var(--max-reading);
    margin-inline: auto;
    padding-inline: var(--space-sm);
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
    font-size: var(--text-heading);
    line-height: var(--line-heading);
    font-weight: var(--weight-semibold);
    color: var(--text-primary);
  }

  .t-body {
    font-size: var(--text-body);
    line-height: var(--line-body);
    font-weight: var(--weight-regular);
    color: var(--text-secondary);
  }

  .t-meta {
    font-size: var(--text-meta);
    line-height: var(--line-meta);
    font-weight: var(--weight-medium);
    color: var(--text-muted);
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
    font-size: var(--text-meta);
    line-height: var(--line-meta);
    font-weight: var(--weight-medium);
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
    background: var(--bg-surface-muted);
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
        },
        bg: {
          base: 'var(--bg-base)',
          subtle: 'var(--bg-base-subtle)',
          surface: 'var(--bg-surface)',
          'surface-muted': 'var(--bg-surface-muted)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
      },
      fontFamily: {
        base: ['var(--font-family-base)'],
      },
      fontSize: {
        body: ['var(--text-body)', { lineHeight: 'var(--line-body)' }],
        heading: ['var(--text-heading)', { lineHeight: 'var(--line-heading)' }],
        meta: ['var(--text-meta)', { lineHeight: 'var(--line-meta)' }],
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
