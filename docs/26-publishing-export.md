# 26 — Publicacao e Exportacao (Print, Share, Permalinks)

> Este documento define como o site se comporta quando e impresso ou compartilhado.

---

## Visao Geral

Publicar nao e apenas renderizar em tela.
O sistema deve manter legibilidade e hierarquia em print e compartilhamento.

Relacionamentos diretos:

- [10-route-specs.md](./10-route-specs.md)
- [19-focus-transfer-spec.md](./19-focus-transfer-spec.md)
- [08-css-implementation.md](./08-css-implementation.md)

---

## 1) Print Styles (Obrigatorio)

- remover ruido (nav redundante)
- fundo branco/limpo
- surfaces viram borda leve (sem sombras)
- hierarquia tipografica preservada

Snippet recomendado:

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

## 2) Share e URLs Canonicas

- rotas com URLs estaveis
- secoes longas com ancoras estaveis
- Engaged deve ser fechavel com Back (history state)

---

## 3) Export (Futuro, Opcional)

- Notes: export em MD
- Harada: export em JSON

Sempre como acao discreta em `.t-meta`.
