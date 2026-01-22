# 19 — Especificacao de Transferencia de Foco (Midias Ativas)

> Este documento define como o sistema transfere foco quando o usuario escolhe engajar com midias ativas.

---

## Visao Geral

O site opera sobre uma mesa calma e legivel.
A maior parte do conteudo existe para ser lida.

Alguns conteudos existem para serem **manuseados**.

Quando o usuario escolhe engajar com esse conteudo, o sistema deve:

- reconhecer a escolha
- transferir foco deliberadamente
- reduzir estimulos concorrentes

Foco nunca e roubado.
Foco e **convidado e aceito**.

Este nao e um sistema de modal.
E um sistema de **foco intencional**.

Relacionamentos diretos:

- Contencao de alienigenas em [18-alien-elements-spec.md](./18-alien-elements-spec.md)
- Hierarquia textual em [06-semantic-text.md](./06-semantic-text.md)
- Tokens e classes em [08-css-implementation.md](./08-css-implementation.md)
- Contrato de estado global em [20-global-state-contract.md](./20-global-state-contract.md)
- Motion e reduced motion em [22-motion-policy.md](./22-motion-policy.md)

---

## 1) Estados de Atencao

O sistema define tres estados:

### 1.1 Ambiente (Default)

- conteudo repousa na mesa
- fluxo de leitura continuo
- elementos competem de forma calma

### 1.2 Focado (Pre-Engajamento)

- usuario identifica o alvo (hover, tap, intencao)
- nada se move
- linguagem visual permanece calma

Exemplos:

- thumbnail de video
- imagem em surface
- preview de galeria

### 1.3 Engajado (Foco Ativo)

- usuario confirma a escolha (click / tap)
- foco e transferido
- todo o resto vira contexto

---

## 2) Modelo de Transferencia

Ao entrar em **Engajado**:

1. O elemento selecionado **elevado** da mesa
2. A mesa recua para o fundo
3. O escopo de interacao se reduz ao elemento ativo

Sensacao desejada:

> "Eu peguei isso para olhar de perto."

Sensacao proibida:

> "Um modal apareceu."

---

## 3) Overlay de Foco (Recuo da Mesa)

### 3.1 Proposito

O overlay nao e decorativo. Ele existe para:

- suprimir informacao concorrente
- preservar contexto espacial
- sinalizar mudanca temporaria de modo

### 3.2 Caracteristicas Visuais

- cor derivada de `--bg-base`
- opacidade sutil (nunca preto puro)
- sem blur por default
- sem gradiente
- sem ruido de animacao

Tokens recomendados:

```css
:root {
  --focus-overlay: oklch(0.22 0.02 260 / 0.45);
}

.dark {
  --focus-overlay: oklch(0.16 0.02 260 / 0.65);
}
```

Regra:

- o overlay reduz competicao, nao esconde a mesa

---

## 4) Surface Ativa (Estado "Em Maos")

O elemento ativo vira uma **surface primaria temporaria**.

Caracteristicas:

- centralizada no viewport
- tamanho contido (nunca edge-to-edge)
- continuidade visual com paper-on-paper
- usa os mesmos tokens de surface

Nao deve parecer outro sistema.

---

## 5) Movimento e Transicao (Critico)

Animacao e **transporte**, nao espetaculo.

### 5.1 Significado do Movimento

O movimento deve explicar:

- de onde o elemento veio
- onde ele esta agora
- que o estado e reversivel

### 5.2 Movimentos Permitidos

- escala sutil (aprox. 0.95 → 1.0)
- translacao gentil ao centro
- leve aumento de elevacao (dentro do sistema)

### 5.3 Movimentos Proibidos

- bounce
- overshoot
- spring exagerado
- fade sem deslocamento espacial

Se o usuario percebe a animacao em si, ela esta forte demais.

---

## 6) Trava de Mesa (Escopo de Interacao)

Enquanto **Engajado**:

- scroll de fundo desativado
- foco de teclado preso na surface ativa
- `Esc` encerra o estado
- clique fora encerra o estado

Isso comunica:

> "Voce esta segurando isso agora."

---

## 7) Aplicacao por Tipo de Conteudo

### 7.1 Video

#### Dormente

- thumbnail estatico e proprio
- vive em surface
- intencionalmente sem drama

#### Engajado

- thumbnail transita para player
- surface move ao centro
- overlay aplicado
- playback inicia **apos** a transicao

Sem autoplay antes do engajamento.
Sem UI do provedor ate o estado ativo.

### 7.2 Imagem / Galeria

#### Dormente

- imagem como folha impressa
- parte do fluxo de leitura

#### Engajado

- imagem sobe para surface focada
- galeria vira carrossel elegante
- setas e gestos discretos
- sem chrome visivel sem necessidade

Objetivo: inspecao, nao consumo compulsivo.

### 7.3 Audio

Audio e especial:

- pode nao exigir foco visual
- overlay e opcional

Regras:

- audio longo: permitir background
- audio curto e contextual: foco opcional

Nunca forcar overlay para audio.

---

## 8) Acessibilidade e Agencia

Transferencia de foco deve ser:

- acessivel por teclado
- amigavel a leitor de tela
- reversivel a qualquer momento

O usuario precisa sentir controle.

---

## 9) Wrapper Canonico de Foco

Estrutura recomendada:

```html
<div class="focus-layer" role="dialog" aria-modal="true">
  <div class="focus-surface">
    <!-- midia ativa -->
  </div>
</div>
```

`.focus-layer` existe apenas em estado Engajado.

---

## 10) O Que Isto Substitui

Este sistema substitui:

- modais genericos
- lightboxes
- full-screen takeover
- autoplay

Ele e mais intencional e menos agressivo.

---

## 11) Regra Final de Integridade

> Foco e mudanca de estado, nao interrupcao.

Se o usuario se sente interrompido, falhou.
Se o usuario se sente guiado, funcionou.

A mesa permanece.
O papel permanece.
O usuario apenas escolheu aproximar algo.
