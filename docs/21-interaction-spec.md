# 21 — Spec de Interacoes (Teclado, Foco, Navegacao)

> Este documento define como o usuario interage com o site em todas as modalidades.

---

## Visao Geral

Interacao precisa ser previsivel.
Se o usuario aprende um comportamento em um lugar, ele deve funcionar em todos.

Este spec complementa:

- [20-global-state-contract.md](./20-global-state-contract.md)
- [19-focus-transfer-spec.md](./19-focus-transfer-spec.md)
- [23-findability-navigation.md](./23-findability-navigation.md)

---

## 1) Navegacao sem friccao

### 1.1 Skip link

- Deve existir um link "Pular para o conteudo".
- Deve ser o primeiro foco ao pressionar Tab.
- Deve levar ao container principal da rota.

### 1.2 Header e navegacao

- Navegacao sempre visivel (sem menu hamburguer por padrao).
- Cada pagina tem H1 unico.
- Sem scroll hijacking.

### 1.3 Ancoras internas

- Secoes longas permitem links por ancora.
- Ao navegar por hash, o foco vai para o heading alvo.
- Foco nao pode ficar obscurecido por UI fixa.

---

## 2) Contrato de Foco (Keyboard-first)

### 2.1 Foco visivel e consistente

- Todo elemento focavel precisa de foco visivel.
- Foco usa tokens de accent, sem glow.

### 2.2 Foco nao obscurecido

- Nenhum elemento focado pode ficar escondido por header ou overlay.

### 2.3 Ordem de tabulacao

- Ordem natural do DOM.
- Evitar `tabIndex` positivo.
- Widgets seguem padroes conhecidos.

---

## 3) Engaged State (Foco Ativo)

Quando `Attention = Engaged`:

- focus trap ativo
- Escape fecha
- foco inicial vai para um elemento util
- ao fechar, foco retorna ao disparador
- scroll do background travado
- Back encerra Engaged

Regras completas em [19-focus-transfer-spec.md](./19-focus-transfer-spec.md).

---

## 4) Interacoes por Tipo de Conteudo

### 4.1 Video

- Dormant: thumbnail propria (nunca do provedor).
- Active: player real apos acao explicita.
- Autoplay proibido.
- Engaged recomendado.

### 4.2 Imagem ampliavel / galeria

- Click/tap abre Engaged.
- Teclado: Escape fecha, Tab navega controles.

### 4.3 Audio

- Preferir sem overlay.
- Engaged apenas se o usuario escolher.

### 4.4 Tabelas e codigo

- Overflow previsivel.
- Estetica boring: sem neon.
- Copiar pode existir sem toast chamativo.

---

## 5) Falhas e Resiliencia

Se um embed falhar:

- fallback textual dentro de surface
- link externo se fizer sentido
- nunca quebrar layout

Detalhes em [24-resilience-loading-error.md](./24-resilience-loading-error.md).
