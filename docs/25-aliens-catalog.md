# 25 — Catalogo de Alienigenas (Casos Criticos)

> Este documento complementa a spec de aliens com casos que escapam do baseline.

---

## Visao Geral

Se nao foi desenhado aqui, e alienigena.
Regras universais em [18-alien-elements-spec.md](./18-alien-elements-spec.md).

Resumo minimo:

- vivem em `.surface`
- respeitam `.reading`
- usam caption `.t-meta`
- nao introduzem nova paleta, tipografia ou hierarquia

---

## 1) Tabelas

- wrapper com `overflow-x: auto`
- bordas minimas com `--border-subtle`
- tipografia consistente (preferir `.t-body`)

---

## 2) Codigo e Syntax Highlight

- tema monocromatico (cinzas do H=260)
- evitar cores neon
- botao copiar opcional e discreto

---

## 3) PDFs, Iframes e Embeds Sociais

- preferir screenshot + link
- se embed for inevitavel:
  - isolar em surface
  - fornecer fallback
  - considerar Engaged para reduzir poluicao

---

## 4) Charts e Widgets de Terceiros

- validar contraste com tokens do sistema
- remover UI chrome quando possivel
- sempre documentar origem e contexto via caption

---

## 5) Relacao com Engaged

Quando um alien introduz controles ou foco ativo,
seguir [19-focus-transfer-spec.md](./19-focus-transfer-spec.md).
