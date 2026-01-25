# Especificação Técnica — Sistema de Iluminação Global para Elevação de Superfícies

## Status

Proposta técnica completa, pronta para implementação.

## Objetivo

Definir um **modelo determinístico e global de iluminação** para simular elevação de superfícies (ex.: cards sobre background) na web, **sem depender de sombras projetadas tradicionais**. O sistema deve:

* Comunicar profundidade por **transição de luz**, não por contraste de cor
* Utilizar **uma única fonte de luz global** (pontual ou direcional)
* Garantir que **todos os componentes respondam coerentemente** à posição dessa luz
* Ajustar **intensidade de luz e oclusão em função da distância** até a fonte
* Ser implementável com **CSS para renderização** e **JS mínimo para geometria**

---

## Princípios Não-Negociáveis

1. **Luz é global, não por componente**
   A fonte de luz existe em coordenadas do espaço (viewport ou container), não em coordenadas locais do componente.

2. **CSS não calcula geometria**
   CSS apenas consome variáveis visuais. Toda geometria (posição, distância, ângulo) é responsabilidade do JS.

3. **Sem sombras pequenas desenhando bordas**
   A separação entre camadas deve ocorrer via *rim light* e *ambient occlusion*, não via drop-shadow convencional.

4. **O efeito nunca zera completamente**
   Intensidades possuem valores base mínimos para manter leitura visual consistente.

---

## Modelo Conceitual

### Entidades do Sistema

* **Fonte de Luz Global**
  Um ponto fixo ou animado definido em coordenadas absolutas da viewport:

  ```text
  L = (lightX, lightY)
  ```

* **Superfície Elevada**
  Qualquer elemento DOM que participe do sistema de iluminação.

* **Centro Geométrico da Superfície**

  ```text
  C = (cx, cy)
  ```

---

## Vetor de Luz por Superfície

Para cada superfície:

```text
D = L - C = (dx, dy)
```

* **Ângulo de iluminação**:

```text
a = atan2(dy, dx)  // em graus
```

Esse ângulo define a orientação dos gradientes de luz e sombra no CSS.

---

## Modelo de Intensidade por Distância (Falloff)

### Variáveis

* `d` = distância euclidiana entre superfície e luz
* `R` = alcance nominal da luz (em px)

```text
d = sqrt(dx² + dy²)
```

### Função de Falloff (padrão recomendado)

```text
f(d) = 1 / (1 + d / R)
```

**Justificativa:**

* Suave
* Monotônica
* Nunca explode nem zera
* Fácil de calibrar

---

## Parâmetros Visuais

Cada superfície consome **apenas variáveis CSS**, nunca calcula valores:

| Variável | Significado                    |
| -------- | ------------------------------ |
| `--a`    | Ângulo da luz (deg)            |
| `--hi`   | Intensidade do rim light       |
| `--ao`   | Intensidade da oclusão         |
| `--sh`   | Intensidade do shading interno |

### Valores Base e Máximos (exemplo)

```text
BASE = { hi: 0.12, ao: 0.10, sh: 0.06 }
MAX  = { hi: 0.34, ao: 0.30, sh: 0.16 }
```

Interpolação:

```text
value = BASE + (MAX - BASE) * f(d)
```

---

## Renderização CSS (Responsabilidade Exclusiva do CSS)

### Estrutura

* Elemento base
* `::before` → shading direcional longo
* `::after` → rim light + oclusão

### Exemplo Canônico

```css
.surface {
  position: relative;
  border-radius: 16px;
  background: var(--surface);
  overflow: clip;
}

.surface::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;

  background: linear-gradient(
    var(--a),
    rgba(255,255,255, calc(var(--sh) * 1.2)),
    rgba(255,255,255, 0.02) 35%,
    rgba(0,0,0, var(--sh)) 100%
  );
}

.surface::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;

  background:
    linear-gradient(
      var(--a),
      rgba(255,255,255, var(--hi)),
      rgba(255,255,255, 0) 16%
    ),
    linear-gradient(
      calc(var(--a) + 180deg),
      rgba(0,0,0, var(--ao)),
      rgba(0,0,0, 0) 22%
    );
}
```

---

## Engine de Luz (JS)

### Responsabilidades

* Localizar todas as superfícies participantes
* Calcular centro geométrico
* Calcular vetor e distância até a luz
* Atualizar variáveis CSS

### Algoritmo Canônico

```js
function updateSurface(el, lightX, lightY) {
  const r = el.getBoundingClientRect();
  const cx = r.left + r.width / 2;
  const cy = r.top + r.height / 2;

  const dx = lightX - cx;
  const dy = lightY - cy;

  const d = Math.hypot(dx, dy);
  const a = Math.atan2(dy, dx) * 180 / Math.PI;

  const f = 1 / (1 + d / RANGE);

  const hi = BASE.hi + (MAX.hi - BASE.hi) * f;
  const ao = BASE.ao + (MAX.ao - BASE.ao) * f;
  const sh = BASE.sh + (MAX.sh - BASE.sh) * f;

  el.style.setProperty('--a', `${a}deg`);
  el.style.setProperty('--hi', hi);
  el.style.setProperty('--ao', ao);
  el.style.setProperty('--sh', sh);
}
```

---

## Performance e Escopo

### Boas Práticas

* Atualizar via `requestAnimationFrame`
* Recalcular apenas em `scroll`, `resize`, `ResizeObserver`
* Aplicar apenas em superfícies elevadas relevantes

### Anti‑Padrões

* Aplicar em listas massivas sem virtualização
* Usar `box-shadow` pequeno e escuro como separador
* Calcular geometria no CSS

---

## Limitações Conhecidas

* CSS não suporta iluminação volumétrica real
* Não há auto-oclusão entre superfícies
* Não substitui renderização 3D ou canvas

Essas limitações são **aceitas conscientemente** para manter simplicidade, previsibilidade e custo baixo.

---

## Justificativa Arquitetural

Este modelo separa explicitamente:

* **Espaço e física** → JS
* **Aparência e material** → CSS

O resultado é:

* Sistema auditável
* Fácil de depurar
* Visualmente coerente
* Não dependente de contraste de cor

A UI passa a se comportar como um **ambiente iluminado**, não como um conjunto de componentes isolados.

---

## Critérios de Sucesso

* Dois cards com a mesma cor, em posições diferentes, respondem de forma diferente à luz
* A luz pode ser movida sem alterar CSS
* A remoção do JS remove profundidade, mas não quebra layout

---

## Fim da Especificação
