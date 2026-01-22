# 09 — Especificações de Componentes

> Este documento define os componentes permitidos e suas especificações.

---

## Filosofia de Componentes

Os componentes são **mínimos e explícitos**.

Regras:

- Nenhum menu oculto
- Nenhuma UI decorativa
- Apenas o necessário para navegação e estrutura
- Composição via classes canônicas

---

## Idiomas e Traduções

O site é bilingue: inglês e português (PT-BR). Todo texto visível deve vir de `react-i18next`, usando namespaces como `siteNav`, `pages.home`, etc., e os arquivos `public/locales/en.json` e `public/locales/pt.json` mantêm os pares de tradução.

As rotas são renderizadas no idioma indicado pela URL (e.g., `/pt/about` ou `?lng=pt`), com fallback para o inglês quando o recurso não existe.

---

## SiteNav

Componente de navegação principal.

### Especificação

| Aspecto | Valor |
| ------- | ----- |
| **Propósito** | Navegação primária |
| **Visibilidade** | Sempre visível |
| **Estilo** | Minimal, explícito |
| **Responsividade** | Flex wrap |

### Implementação

```tsx
import { useTranslation } from "react-i18next";

export function SiteNav() {
  const { t } = useTranslation("siteNav");
  const links = [
    { href: "/how-i-work", key: "howIWork" },
    { href: "/principles", key: "principles" },
    { href: "/notes", key: "notes" },
    { href: "/harada", key: "harada" },
    { href: "/about", key: "about" },
  ];

  return (
    <nav className="stack-xs" aria-label={t("label")}>
      <div className="t-meta">{t("navigationMeta")}</div>
      <div className="nav-row">
        {links.map((link) => (
          <a key={link.key} href={link.href}>
            {t(link.key)}
          </a>
        ))}
      </div>
    </nav>
  );
}
```

### Variações

Nenhuma variação é permitida. O componente é fixo.

<!-- NOTA: O SiteNav deve usar o namespace `siteNav` de `react-i18next` para renderizar labels em inglês e PT-BR. -->

---

## Kit Mínimo de Componentes MDX

Componentes MDX são **funcionais e silenciosos**. Sem ornamento. Sem layout “hero”. Eles existem para esclarecer o conteúdo.

### Callout

**Uso:** apontar contexto ou ressalvas sem interromper o fluxo.

**API:** `Callout({ title?, children, tone?: "neutral" | "warning" })`

```tsx
interface CalloutProps {
  title?: string;
  tone?: "neutral" | "warning";
  children: React.ReactNode;
}

export function Callout({ title, tone = "neutral", children }: CalloutProps) {
  const toneClass = tone === "warning" ? "callout-warning" : "callout-neutral";

  return (
    <aside className={`surface surface-pad stack-xs ${toneClass}`} role="note">
      {title ? <div className="t-meta">{title}</div> : null}
      <div className="t-body">{children}</div>
    </aside>
  );
}
```

### Figure

**Uso:** imagem/diagrama com legenda factual.

**API:** `Figure({ src, alt, caption })`

```tsx
interface FigureProps {
  src: string;
  alt: string;
  caption: string;
}

export function Figure({ src, alt, caption }: FigureProps) {
  return (
    <figure className="stack-xs">
      <img className="surface" src={src} alt={alt} />
      <figcaption className="t-meta">{caption}</figcaption>
    </figure>
  );
}
```

### CodeBlock

**Uso:** código com leitura confortável e sem “glow”.

**API:** `CodeBlock({ code, language?, caption? })`

```tsx
interface CodeBlockProps {
  code: string;
  language?: string;
  caption?: string;
}

export function CodeBlock({ code, language, caption }: CodeBlockProps) {
  return (
    <figure className="stack-xs">
      <pre className="surface surface-pad code-block">
        <code data-lang={language ?? "plain"}>{code}</code>
      </pre>
      {caption ? <figcaption className="t-meta">{caption}</figcaption> : null}
    </figure>
  );
}
```

**Nota:** integrar via `MDXProvider` em `app/ui/mdx/mdx-provider.tsx` para mapear `Callout`, `Figure` e `CodeBlock` no render.

---

## HaradaBlock

Bloco individual do grid Harada.

### Especificação

| Aspecto | Valor |
| ------- | ----- |
| **Propósito** | Renderizar um bloco 3x3 |
| **Elevação** | Usa `.surface` |
| **Grid interno** | 3 colunas |

### Implementação (Conceitual)

```tsx
interface HaradaBlockProps {
  title: string;
  cells: string[];
}

export function HaradaBlock({ title, cells }: HaradaBlockProps) {
  return (
    <section className="surface surface-pad stack-sm">
      <header className="stack-xs">
        <h3 className="t-heading">{title}</h3>
        <p className="t-meta">Theme block</p>
      </header>

      <div 
        className="grid grid-cols-3 gap-2" 
        role="grid" 
        aria-label={`${title} grid`}
      >
        {cells.map((cell, i) => (
          <div 
            key={i} 
            className="tile" 
            role="gridcell"
            aria-label={`Cell ${i + 1}`}
            title={cell} // tooltip
          >
            <div className="t-meta">{cell}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

Ver [11-harada-spec.md](./11-harada-spec.md) para especificação completa do Harada.

---

## PageLayout

Layout wrapper para todas as páginas.

### Especificação

| Aspecto | Valor |
| ------- | ----- |
| **Propósito** | Wrapper consistente |
| **Classes** | `.page .reading .section .stack-lg` |

### Implementação (Conceitual)

```tsx
interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <main className="page">
      <div className="reading section stack-lg">
        {children}
      </div>
    </main>
  );
}
```

---

## PageHeader

Header padrão para páginas.

### Especificação

| Aspecto | Valor |
| ------- | ----- |
| **Propósito** | Título + descrição + nav |
| **Classes** | `.stack-sm` |

### Implementação (Conceitual)

```tsx
interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="stack-sm">
      <h1 className="t-heading">{title}</h1>
      <p className="t-body">{description}</p>
      <SiteNav />
    </header>
  );
}
```

---

## Footer

Footer minimal.

### Especificação

| Aspecto | Valor |
| ------- | ----- |
| **Propósito** | Copyright |
| **Classes** | `.t-meta` |

### Implementação

```tsx
export function Footer() {
  return (
    <footer className="t-meta">
      © {new Date().getFullYear()} Claus Haas
    </footer>
  );
}
```

---

## Componentes Proibidos

Os seguintes padrões de componente são **explicitamente proibidos**:

| Componente | Motivo |
| ---------- | ------ |
| Cards decorativos | Ruído visual |
| Modals | Complexidade desnecessária |
| Dropdowns | Menus ocultos |
| Hamburger menu | Menus ocultos |
| Carousels | Complexidade, UX ruim |
| Tabs | Oculta informação |
| Accordions | Oculta informação |
| Toasts/Notifications | Interrupção |
| Floating action buttons | Tendência UI |
| Badges decorativos | Ruído visual |

---

## Regras de Criação de Componentes

Se um novo componente for necessário:

1. Ele deve usar **apenas** classes canônicas
2. Ele deve ter **propósito claro e único**
3. Ele **não pode** introduzir novos estilos inline
4. Ele deve ser **documentado** antes de implementado
5. Ele deve passar pelo checklist de PR

> Na dúvida, não crie o componente. Pergunte se realmente é necessário.
