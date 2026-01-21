# Tailwind Config

```ts
import type { Config } from 'tailwindcss';

export default {
 content: ['./src/**/*.{ts,tsx,js,jsx,md,mdx,html}'],
 darkMode: ['class'],
 plugins: [],
  theme: {
  extend: {
   borderRadius: {
    surface: 'var(--radius-surface)',
   },
   boxShadow: {
    surface: 'var(--shadow-surface)',
   },
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
     muted: 'var(--text-muted)',
     primary: 'var(--text-primary)',
     secondary: 'var(--text-secondary)',
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
    medium: 'var(--weight-medium)',
    regular: 'var(--weight-regular)',
    semibold: 'var(--weight-semibold)',
   },
   maxWidth: {
    reading: '72ch', // linha confortável para texto longo
   },
   spacing: {
    's-lg': 'var(--space-lg)',
    's-md': 'var(--space-md)',
    's-sm': 'var(--space-sm)',
    's-xl': 'var(--space-xl)',
    's-xs': 'var(--space-xs)',
   },
  },
 },
} satisfies Config;
```
