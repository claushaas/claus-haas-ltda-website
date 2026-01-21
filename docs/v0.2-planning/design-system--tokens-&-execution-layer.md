# Design System — Tokens & Execution Layer

This section translates the conceptual system into concrete, enforceable tokens.
These tokens are not suggestions. They are constraints.

---

## 7. Semantic Planes

The system defines two semantic planes only.
No additional planes are allowed.

### Plane 0 — Base Plane

Meaning:

- continuous reasoning
- narrative flow
- main document surface

Examples:

- body text
- paragraphs
- headings
- lists

---

### Plane 1 — Elevated Plane

Meaning:

- grouped structures
- bounded systems
- self-contained artifacts

Examples:

- Harada boards
- conceptual frames
- tightly related blocks that must remain close

Elevation does not imply importance.
Elevation implies physical separation of planes.

---

## 8. Color Tokens — Light Mode

All colors are intentionally cool and slightly blue-shifted.
No pure neutrals are used.

### Base Environment

--bg-base: #f6f7f9;  
--bg-base-subtle: #eef1f5;

The base represents the desk surface.

---

### Elevated Surface

--bg-surface: #ffffff;  
--bg-surface-muted: #f9fafb;

These values represent paper resting on paper.
The difference must be subtle but perceivable.

---

### Text Colors

--text-primary: #111827;  
--text-secondary: #374151;  
--text-muted: #6b7280;

Each text role must be visually unambiguous.
If two roles feel similar, the hierarchy has failed.

---

### Accent (Blue)

--accent-primary: #2563eb;  
--accent-muted: #3b82f6;

Accent is used only for:

- links
- focus states
- intentional interaction signals

---

## 9. Color Tokens — Dark Mode

Dark mode preserves the same physical model.

### Base Environment

--bg-base: #0f172a;  
--bg-base-subtle: #020617;

---

### Elevated Surface

--bg-surface: #111827;  
--bg-surface-muted: #1f2933;

Elevation in dark mode is perceived primarily through luminosity, not shadow.

---

### Text Colors

--text-primary: #e5e7eb;  
--text-secondary: #cbd5e1;  
--text-muted: #9ca3af;

---

### Accent (Blue)

--accent-primary: #60a5fa;  
--accent-muted: #93c5fd;

Glow effects are explicitly forbidden.

---

## 10. Elevation Tokens

Elevation is binary: present or absent.

### Shadow — Light Mode

--shadow-surface:
  0 1px 2px rgba(0, 0, 0, 0.04),
  0 2px 6px rgba(0, 0, 0, 0.06);

The shadow must never be intensified.

---

### Shadow — Dark Mode

--shadow-surface:
  0 1px 2px rgba(0, 0, 0, 0.6);

If the shadow is consciously noticeable, it is too strong.

---

## 11. Typography Tokens

Single font family for all text:

--font-family-base:
  'Inter',
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  sans-serif;

---

### Font Sizes (Semantic Scale)

--text-body: 1rem;  
--text-meta: 0.875rem;  
--text-heading: 1.375rem;

Only one heading size is allowed.
Subsections rely on spacing, not size inflation.

---

### Font Weights

--weight-regular: 400;  
--weight-medium: 500;  
--weight-semibold: 600;

Weights beyond semibold are forbidden.

---

### Line Heights

--line-body: 1.7;  
--line-heading: 1.4;  
--line-meta: 1.5;

---

## 12. Spacing Tokens (Semantic)

Spacing encodes meaning.

--space-xs: 0.5rem;  
--space-sm: 1rem;  
--space-md: 2rem;  
--space-lg: 3rem;  
--space-xl: 5rem;

Rules:

- identical spacing means identical semantic relationship
- new spacing values are forbidden

---

## 13. Component Mapping

### Base Content

- background: --bg-base
- text: --text-primary
- no shadow

---

### Elevated Surface

- background: --bg-surface
- shadow: --shadow-surface
- padding: --space-md
- margin-bottom: --space-md
- border-radius: 6px

No variation is allowed.

---

## 14. Accessibility Constraints

- minimum contrast must meet WCAG AA
- focus states must use accent color
- no information may be conveyed by color alone

Accessibility is a consequence of clarity, not a layer.

---

## 15. Implementation Order

1. Implement base plane (typography and spacing)
2. Implement elevated surface abstraction
3. Apply elevation only where strictly necessary
4. Populate content
5. Stop touching design

---

## 16. Final Integrity Rule

If a visual decision cannot be expressed using existing tokens, it is invalid.

This system is intentionally restrictive.
Freedom exists in thought and content — not in decoration.
