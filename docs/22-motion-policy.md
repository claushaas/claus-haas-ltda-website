# 22 — Policy de Motion (Animacao como Explicacao)

> Este documento define motion como explicacao de estado, com suporte a reduced motion.

---

## Visao Geral

Movimento deve ser sutil e funcional.
Ele existe para explicar transicoes (especialmente Engaged), nao para impressionar.

Relacionamentos diretos:

- [19-focus-transfer-spec.md](./19-focus-transfer-spec.md)
- [20-global-state-contract.md](./20-global-state-contract.md)
- [08-css-implementation.md](./08-css-implementation.md)

---

## 1) Preferencia do Usuario (Reduced Motion)

- Respeitar `@media (prefers-reduced-motion: reduce)`.
- Em Reduced:
  - remover deslocamentos grandes
  - usar transicoes instantaneas ou micro-fades
  - manter Engaged funcional (overlay, foco, scroll lock)

---

## 2) Motion Permitido (Normal)

- escala pequena (ex.: 0.98 → 1.0)
- translacao curta ao centro
- overlay sobe/desce suavemente

---

## 3) Motion Proibido

- bounce / overshoot
- spring exagerado
- parallax ornamental
- blur animado

---

## 4) Tokens Recomendados

```css
:root {
  --motion-fast: 120ms;
  --motion-medium: 180ms;
  --motion-slow: 240ms;

  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --motion-fast: 1ms;
    --motion-medium: 1ms;
    --motion-slow: 1ms;
  }
}
```

---

## 5) QA Minimo

- Reduced motion ligado: nada "voa", mas tudo funciona.
- Escape fecha Engaged.
- Foco nao some.
