# 20 — Contrato de Estado Global (Desk / Paper / Focus)

> Este documento define a maquina de estados do site para evitar conflitos entre specs.

---

## Visao Geral

Se um estado nao existe aqui, ele nao existe no produto.
Este contrato e a fonte de verdade para:

- foco intencional (ver [19-focus-transfer-spec.md](./19-focus-transfer-spec.md))
- contencao de alienigenas (ver [18-alien-elements-spec.md](./18-alien-elements-spec.md))
- resiliencia de load/error (ver [24-resilience-loading-error.md](./24-resilience-loading-error.md))
- motion e reduced motion (ver [22-motion-policy.md](./22-motion-policy.md))

---

## 1) Entidades Mentais

- **Desk (mesa)**: viewport e ambiente.
- **Paper (papel)**: area de leitura dentro da mesa.
- **Alien**: midia ou UI que nao nasce do sistema.
- **Focus Transfer**: mudanca deliberada de atencao.

---

## 2) Dimensoes de Estado (Orthogonal)

O site nao tem um unico estado. Ele tem dimensoes que coexistem.

### 2.1 Modo de cor

- `ColorMode = Light | Dark`

### 2.2 Preferencia de movimento

- `MotionMode = Normal | Reduced`
- Derivado de `prefers-reduced-motion`.

### 2.3 Estado de carregamento

- `LoadState = Idle | Loading | Ready | Error | Empty`

### 2.4 Estado de atencao (global)

- `Attention = Ambient | Focused | Engaged`

Definicoes:

- **Ambient**: leitura normal.
- **Focused**: intencao sinalizada, sem takeover.
- **Engaged**: overlay, foco preso, scroll travado.

### 2.5 Modalidade de input

- `Input = Keyboard | Pointer | Touch | Assistive`

A regra e: funcionar bem para todas as modalidades.

---

## 3) Maquina de Estados de Atencao

### 3.1 Transicoes permitidas

- `Ambient -> Focused`
  - Trigger: hover, foco via teclado, touch de intencao

- `Focused -> Engaged`
  - Trigger: click/tap/Enter/Espaco em alvo manuseavel

- `Engaged -> Ambient`
  - Trigger: Escape, click fora, botao fechar, back

### 3.2 Invariantes em Engaged

Quando `Attention = Engaged`, aplicar sempre:

1. Overlay recuando a desk (sem mudar o hue)
2. Scroll do background travado
3. Focus trap dentro do conteudo engajado
4. Escape fecha
5. Click fora fecha
6. Back fecha (via history state)

### 3.3 Regra de nao roubar foco

O sistema nunca entra em `Engaged` sem acao explicita do usuario.
Sem autoplay, sem interstitial, sem takeover educativo.

---

## 4) Estados por Alien

Cada alien possui estado local:

- `AlienState = Dormant | Active | Failed`

Definicoes:

- **Dormant**: preview boring (thumbnail/estatico)
- **Active**: controlavel, foco transferido se necessario
- **Failed**: fallback textual + link externo (se fizer sentido)

O alien nunca altera tokens globais de cor, tipografia ou motion.

---

## 5) Estados por Rota

Cada rota deve declarar:

- quais aliens sao permitidos
- se suporta `Engaged`
- quais LoadStates sao possiveis
- se ha busca local
- se ha navegacao por ancoras

Ver [10-route-specs.md](./10-route-specs.md) para estrutura.

---

## 6) Criterios de Pronto para Merge

Uma feature so entra se:

- nao criou estado especial fora deste contrato
- Engaged esta consistente (overlay, foco, scroll, escape, back)
- Reduced motion funciona sem quebrar fluxo
- Load/Error/Empty nao quebram layout

Checklist operacional em [14-pr-checklist.md](./14-pr-checklist.md).
