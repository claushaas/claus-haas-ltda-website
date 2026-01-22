# 17 — Especificacao do Sistema Tipografico (Responsivo e Contextual)

> Este documento define como a tipografia responde ao contexto do viewport, preservando legibilidade, hierarquia e calma.

---

## Visao Geral

Tipografia nao e decoracao.
Tipografia e estrutura.

Se a largura de leitura e contextual, o tamanho da fonte nao pode ser absoluto.
Este spec define um modelo tipografico responsivo por contrato, nao por achismo.

Relacionamentos diretos:

- Tokens e classes vivem em [08-css-implementation.md](./08-css-implementation.md)
- A base do design system vive em [04-design-system.md](./04-design-system.md)
- A largura de leitura segue o contrato de "mesa vs papel" em [04-design-system.md](./04-design-system.md)

---

## 1) Principios Centrais (Nao Negociaveis)

1. Tipografia deve responder ao **contexto fisico** do viewport.
2. Tamanho de fonte e definido como **intervalo**, nao valor fixo.
3. Hierarquia e expressa por:
   - tamanho
   - peso
   - espaco
   - nunca por cor isolada
4. Deve manter leitura calma em:
   - celulares pequenos
   - laptops
   - monitores ultra-wide
5. Escala deve ser:
   - previsivel
   - suave
   - entediante (no bom sentido)

Sem saltos. Sem "hero text". Sem dramatizacao.

---

## 2) Modelo Mental

- Viewport = mesa
- `.reading` = papel
- Tipografia deve parecer proporcional ao papel, nao a mesa

Portanto:

- Tipografia escala com **largura do viewport**
- Mas e **clampada** para preservar legibilidade
- E respeita papeis semanticos (body, heading, meta)

---

## 3) Papeis Semanticos (Vocabulario Fechado)

Existem apenas estes papeis:

- **Body** → raciocinio continuo
- **Heading** → contexto de secao
- **Meta** → apoio e informacao secundaria

Nao adicionar novos papeis sem atualizar este spec.

---

## 4) Estrategia de Tamanho (Clamp-based)

Cada papel define:

- um minimo (mesas pequenas)
- um ideal (mesas normais)
- um maximo (mesas grandes)

O tamanho usa `clamp()` com base em `vw`.

---

## 5) Tokens de Tamanho (Fonte de Verdade Unica)

```css
:root {
  /* Body */
  --font-body-min: 0.95rem;
  --font-body-ideal: 1rem;
  --font-body-max: 1.05rem;

  /* Heading */
  --font-heading-min: 1.25rem;
  --font-heading-ideal: 1.375rem;
  --font-heading-max: 1.5rem;

  /* Meta */
  --font-meta-min: 0.8rem;
  --font-meta-ideal: 0.875rem;
  --font-meta-max: 0.9rem;
}
```

Valores deliberadamente conservadores.
Conforto vence impacto visual.

---

## 6) Line Height (Fixo, Nao Escala)

Line height codifica ritmo de leitura, nao tamanho fisico.
Nao deve escalar com viewport.

```css
:root {
  --line-body: 1.7;
  --line-heading: 1.4;
  --line-meta: 1.5;
}
```

---

## 7) Classes Canonicas de Tipografia

Classes ligam papel semantico → escala responsiva → ritmo.

```css
@layer components {
  .t-body {
    font-size: clamp(
      var(--font-body-min),
      0.9rem + 0.3vw,
      var(--font-body-max)
    );
    line-height: var(--line-body);
    font-weight: 400;
  }

  .t-heading {
    font-size: clamp(
      var(--font-heading-min),
      1.1rem + 0.6vw,
      var(--font-heading-max)
    );
    line-height: var(--line-heading);
    font-weight: 600;
  }

  .t-meta {
    font-size: clamp(
      var(--font-meta-min),
      0.75rem + 0.2vw,
      var(--font-meta-max)
    );
    line-height: var(--line-meta);
    font-weight: 500;
  }
}
```

---

## 8) Por Que Funciona

### Telas pequenas (celulares)

- texto permanece legivel
- headings nao esmagam o conteudo
- nao existe micro-tipografia

### Telas medias (laptops)

- tamanho ideal e atingido
- leitura fica "sem esforço"

### Telas grandes (ultra-wide)

- tamanho para de crescer
- largura nao expande
- excesso vira ambiente, nao texto

Resultado:

> o papel continua humano, independente do tamanho da mesa

---

## 9) Relacao com Largura de Leitura

Tipografia e largura evoluem juntas, mas de forma independente:

- Largura usa `ch` + `clamp` (ver [04-design-system.md](./04-design-system.md))
- Tipografia usa `rem + vw` + `clamp` (este spec)

Nem uma segue a outra cegamente.
Nem uma ignora o contexto.

Isso evita:

- texto gigante em colunas estreitas
- texto micro em colunas largas

---

## 10) Regras de Uso (Estritas)

1. Paragrafos → `.t-body`
2. Titulos de secao → `.t-heading`
3. Captions, meta, helper → `.t-meta`
4. Nunca empilhar utilitarios de tamanho (`text-sm`, `text-lg`, etc.)
5. Nunca sobrescrever `font-size` inline
6. Se a tipografia parece errada:
   - ajuste largura, espaco ou hierarquia primeiro
   - so depois revise tokens

---

## 11) Checklist de Validacao

Antes de aprovar mudancas, verifique:

- Body e confortavel por 5+ minutos
- Comprimento de linha fica ~60–75 caracteres
- Headings orientam, nao dominam
- Meta e legivel, mas claramente secundaria
- Escala e invisivel (sem efeito "wow")

Se a tipografia chama atencao para si, falhou.

---

## 12) Regra de Integridade Final

> Tipografia deve parecer proporcional ao papel, nao reativa a mesa.

Se o usuario percebe a escala, o sistema esta agressivo.
Se o usuario esquece que a tipografia existe, o sistema funciona.
