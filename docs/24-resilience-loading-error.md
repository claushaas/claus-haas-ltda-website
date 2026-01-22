# 24 — Resiliencia (Loading, Error, Empty)

> Este documento define como o site lida com falhas sem parecer quebrado.

---

## Visao Geral

Estados de carga e erro sao parte do produto.
Eles devem ser silenciosos, informativos e consistentes.

Relacionamentos diretos:

- [20-global-state-contract.md](./20-global-state-contract.md)
- [18-alien-elements-spec.md](./18-alien-elements-spec.md)
- [25-aliens-catalog.md](./25-aliens-catalog.md)

---

## 1) LoadState (Padrao)

- Idle
- Loading
- Ready
- Empty
- Error

---

## 2) Regras Gerais

- Nada deve vazar para fora de `.reading`.
- Mensagens curtas e factuais.
- Preferir placeholders simples a skeleton shimmer.

---

## 3) Fallback para Alienigenas

Se um alien falhar:

- manter wrapper `.surface`
- mensagem: "Nao foi possivel carregar"
- opcao: link externo (se existir)
- alternativa: screenshot ou imagem (quando aplicavel)

Exemplo:

```html
<figure class="surface surface-pad stack-xs alien">
  <div class="t-body">Nao foi possivel carregar.</div>
  <a class="t-meta" href="...">Abrir em nova aba</a>
</figure>
```
