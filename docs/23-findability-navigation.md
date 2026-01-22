# 23 — Encontrabilidade e Navegacao (Sem "App UI")

> Este documento define como o conteudo permanece encontravel sem virar produto SaaS.

---

## Visao Geral

O site deve ser minimalista sem virar labirinto.
Encontrabilidade e um contrato funcional, nao um adorno.

Relacionamentos diretos:

- [21-interaction-spec.md](./21-interaction-spec.md)
- [10-route-specs.md](./10-route-specs.md)
- [04-design-system.md](./04-design-system.md)

---

## 1) Busca (Quando Existir)

- UI minima: input + lista.
- Sem cromes de produto.
- Resultado: titulo + snippet + tags (se existirem).

Se a busca abrir overlay, aplicar Engaged:

- focus trap
- Escape fecha
- Back encerra

---

## 2) Navegacao por Ancoras

- IDs estaveis em secoes longas.
- Ao navegar por hash:
  - rolar ate a secao
  - focar o heading alvo
  - garantir foco nao obscurecido

---

## 3) Legibilidade como Requisito

Manter 60–75 caracteres por linha como baseline.
Contrato de largura em [04-design-system.md](./04-design-system.md).
