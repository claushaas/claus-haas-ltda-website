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
export function SiteNav() {
  return (
    <nav className="stack-xs" aria-label="Primary">
      <div className="t-meta">Navigation</div>
      
      <div className="nav-row">
        <a href="/how-i-work">How I Work</a>
        <a href="/principles">Principles</a>
        <a href="/notes">Notes</a>
        <a href="/harada">Harada</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
}
```

### Variações

Nenhuma variação é permitida. O componente é fixo.

<!-- DECISÃO_PENDENTE: Internacionalização do SiteNav

Se o site terá i18n, os textos do nav precisam vir de translations.
Decidir:
- O site terá múltiplos idiomas?
- Se sim, usar useTranslation do react-i18next

Por enquanto, textos hardcoded em inglês.
-->

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
