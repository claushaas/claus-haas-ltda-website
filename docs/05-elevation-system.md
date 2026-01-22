# 05 — Sistema de Elevação (Paper on Paper)

> Este documento define o sistema de elevação semântica "papel sobre papel".

---

## Contexto

Algumas partes do site requerem elementos que estão **próximos em espaço**, mas **claramente separados em significado**.

Nestes casos, espaçamento e tipografia sozinhos não são suficientes.

Para resolver isso sem introduzir ruído visual, o sistema usa **profundidade perceptual** como ferramenta semântica.

> Profundidade não é decoração. Profundidade é estrutura.

---

## Modelo Conceitual

O viewport inteiro representa uma **mesa de trabalho** abstrata.

- A superfície da mesa é calma, neutra e contínua
- Conteúdo não é "impresso na tela", mas **colocado sobre uma superfície**
- Alguns elementos repousam diretamente na mesa
- Outros são **folhas de papel colocadas sobre ela**

Nada flutua.
Nada paira.
Nada compete por atenção.

Tudo é **quietamente suportado**.

---

## Luz como Constante Estrutural

O sistema assume uma **única fonte de luz fixa**:

| Aspecto | Especificação |
| ------- | ------------- |
| Posição | Topo-centro do viewport |
| Qualidade | Suave, difusa (estilo softbox) |
| Temperatura | Levemente fria |
| Intensidade | Apenas suficiente para revelar estrutura |

Esta luz existe para:

- Revelar separação
- Criar contraste sutil
- Tornar camadas perceptíveis

Ela **nunca** deve:

- Dramatizar
- Decorar
- Atrair atenção

> Se a luz é notada conscientemente, está forte demais.

---

## Significado da Elevação

Elevação **NÃO** significa:

- ❌ Importância
- ❌ Ênfase
- ❌ Interatividade

Elevação significa:
> "Este elemento existe em um plano físico diferente do documento base."

### Planos Semânticos

O sistema define **dois planos semânticos apenas**.
Nenhum plano adicional é permitido.

| Plano | Nome | Significado | Exemplos |
| ----- | ---- | ----------- | -------- |
| 0 | Base Plane | Raciocínio contínuo, fluxo narrativo, superfície principal | Texto body, parágrafos, headings, listas |
| 1 | Elevated Plane | Estruturas agrupadas, sistemas limitados, unidades auto-contidas | Harada boards, frames conceituais, blocos relacionados |

Elevação é especialmente adequada para:

- Frames conceituais
- Sistemas dentro de sistemas
- Artefatos estruturados (ex: boards Harada)

---

## Sensação "Paper on Paper"

Elementos elevados devem sentir como:

- ✓ Papel repousando sobre papel
- ✓ Folhas colocadas cuidadosamente sobre uma mesa
- ✓ Objetos que podem ser observados como um todo

Eles **NÃO** devem sentir como:

- ❌ Cards
- ❌ Painéis
- ❌ Widgets UI
- ❌ Containers flutuantes

### Dicas Visuais Mínimas

- Diferenciação sutil de background
- Sombreamento extremamente sutil
- Contraste tonal suave

**Evitar:**

- Bordas
- Cantos afiados
- Peso visual alto

---

## Background como Ambiente

O background não é uma cor plana.
Ele representa o **ambiente**.

Características:

- Variação tonal extremamente sutil
- Gradiente quase imperceptível
- Sem direcionalidade visível
- Sem floreio estético

Seu papel é:

- Prover contexto de profundidade
- Suportar superfícies elevadas
- Reduzir fadiga visual

> Se o background se torna "interessante", ele falhou.

---

## Light e Dark Modes

Ambos os modes obedecem ao mesmo modelo físico.

### Light Mode

Elevação é percebida através de:

- Sombra mínima
- Separação tonal leve

Contraste permanece contido.

### Dark Mode

Elevação é percebida primariamente através de:

- Aumento de luminosidade da superfície
- Menor dependência de sombra

**Efeitos de glow são explicitamente proibidos.**

Em ambos os modes:
> Elevação deve ser **inferida**, não **anunciada**.

---

## Regras de Uso

Elevação é uma **ferramenta semântica de último recurso**.

### Regras

1. Use elevação **apenas** quando proximidade é requerida
2. **Nunca** use elevação para "fazer algo parecer melhor"
3. **Nunca** empilhe múltiplos níveis de elevação
4. **Nunca** anime elevação

> Se espaçamento ou hierarquia podem resolver o problema, elevação não deve ser usada.

### Quando Usar

| Cenário | Usar Elevação? |
| ------- | -------------- |
| Separar seções de conteúdo | ❌ Não — use espaçamento |
| Destacar informação importante | ❌ Não — use tipografia |
| Agrupar elementos muito próximos que precisam de separação | ✓ Sim |
| Grid Harada com múltiplos blocos adjacentes | ✓ Sim |

---

## Regra de Integridade do Sistema

> **Profundidade é parte da linguagem, não do estilo.**

Qualquer uso de elevação que:

- Chame atenção para si mesmo
- Pareça decorativo
- Se assemelhe a tendências modernas de UI

é considerado uma **violação do sistema**.

O resultado correto é uma percepção quieta:
> "Estes elementos são separados, mas pertencem juntos."

Nada mais.
Nada menos.

---

## Implementação Técnica: Iluminação Global

A conversa de referência ([Efeito de Elevação Web](https://chatgpt.com/share/6970f8e4-2234-8007-8940-09413a626e1b)) define um sistema de iluminação sofisticado que **não usa sombras clichês**.

O objetivo é criar uma percepção de iluminação espacial real, onde:

- Todos os elementos respondem à **mesma fonte de luz global**
- A intensidade varia com a **distância até a luz**
- O efeito é **inferido**, não anunciado

### Princípio Físico

> Não estamos simulando "drop shadows". Estamos simulando **iluminação ambiente** com uma fonte de luz fixa.

A luz não está próxima ao observador — ela está posicionada em um ponto específico do viewport (topo-centro), de forma que:

- Elementos próximos à luz têm highlights mais fortes
- Elementos distantes têm efeito mais sutil
- A direção da luz é consistente para todos os elementos

---

## Modelo de Iluminação

### Ponto de Luz Global

```ts
const LIGHT = {
  x: window.innerWidth / 2,  // centro horizontal
  y: 0,                       // topo do viewport
};
```

### Variáveis por Elemento

Para cada elemento elevado, calculamos:

| Variável | Descrição |
| -------- | --------- |
| `d` | Distância do centro do elemento até o ponto de luz |
| `angle` | Ângulo do vetor elemento → luz |
| `f` | Fator de intensidade (0 a 1) baseado em falloff |

### Função de Falloff

Usamos **falloff racional** (suave, estável, fácil de tunar):

```ts
const RANGE = 800; // alcance da luz em pixels

function falloff(distance: number): number {
  return 1 / (1 + distance / RANGE);
}
```

Características:

- `RANGE ≈ 600–900px` funciona bem para a maioria dos viewports
- Nunca explode (sem valores extremos)
- Nunca zera (sempre há algum efeito)

---

## Variáveis CSS Dinâmicas

O JavaScript calcula e injeta variáveis CSS em cada elemento elevado:

| CSS Variable | Significado | Range |
| ------------ | ----------- | ----- |
| `--a` | Ângulo da luz (direção) | `0deg` a `360deg` |
| `--hi` | Intensidade do highlight (rim light) | `0.12` a `0.34` |
| `--ao` | Intensidade da oclusão | `0.10` a `0.30` |
| `--sh` | Intensidade do shading interno | `0.06` a `0.16` |

### Valores Base e Máximo

```ts
const BASE = {
  hi: 0.12, // highlight mínimo (longe da luz)
  ao: 0.10, // oclusão mínima
  sh: 0.06, // shading mínimo
};

const MAX = {
  hi: 0.34, // highlight máximo (perto da luz)
  ao: 0.30, // oclusão máxima
  sh: 0.16, // shading máximo
};
```

---

## Implementação JavaScript

```ts
const LIGHT = { x: window.innerWidth / 2, y: 0 };
const RANGE = 800;

const BASE = { hi: 0.12, ao: 0.10, sh: 0.06 };
const MAX = { hi: 0.34, ao: 0.30, sh: 0.16 };

function updateElevatedElement(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  const dx = LIGHT.x - cx;
  const dy = LIGHT.y - cy;

  const distance = Math.hypot(dx, dy);
  const angle = Math.atan2(dy, dx) * 180 / Math.PI;

  // Falloff racional
  const f = 1 / (1 + distance / RANGE);

  const hi = BASE.hi + (MAX.hi - BASE.hi) * f;
  const ao = BASE.ao + (MAX.ao - BASE.ao) * f;
  const sh = BASE.sh + (MAX.sh - BASE.sh) * f;

  el.style.setProperty('--a', `${angle}deg`);
  el.style.setProperty('--hi', hi.toFixed(3));
  el.style.setProperty('--ao', ao.toFixed(3));
  el.style.setProperty('--sh', sh.toFixed(3));
}

// Atualizar todos os elementos elevados
function updateAllElevated() {
  LIGHT.x = window.innerWidth / 2;
  document.querySelectorAll('.surface').forEach(updateElevatedElement);
}

// Chamar no resize e scroll
window.addEventListener('resize', updateAllElevated);
window.addEventListener('scroll', updateAllElevated, { passive: true });
updateAllElevated();
```

---

## Implementação CSS

O CSS consome as variáveis sem saber da geometria:

```css
.surface {
  /* Background base */
  background: var(--bg-surface);
  border-radius: var(--radius-surface);
  
  /* Highlight (rim light) - borda interna iluminada */
  box-shadow: 
    inset 0 0 0 1px rgba(255, 255, 255, var(--hi, 0.12));
  
  /* Gradiente interno para oclusão e shading */
  background-image: 
    linear-gradient(
      calc(var(--a, 0deg) + 180deg),
      rgba(0, 0, 0, var(--ao, 0.10)) 0%,
      transparent 40%
    ),
    linear-gradient(
      var(--a, 0deg),
      rgba(255, 255, 255, var(--sh, 0.06)) 0%,
      transparent 30%
    );
}
```

---

## ⚠️ O Que NÃO Fazer

### Não usar drop-shadow tradicional

```css
/* ❌ ERRADO - Isso é exatamente o clichê que queremos evitar */
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
```

A conversa de referência é explícita:

> "Não escale a sombra externa com a distância. Sombra externa denuncia 'drop-shadow fake'."

### O que deve variar com a distância

- ✅ Rim light (highlight interno)
- ✅ Oclusão (gradiente de sombra interna)
- ✅ Shading (gradiente de luz interna)

### Se usar sombra externa (último recurso)

- Mantenha **fixa** (não varia com distância)
- **Grande** e **extremamente difusa**
- Ou simplesmente **não use**

---

## Zonas Perceptuais

O sistema cria três zonas claras:

| Zona | Distância | Efeito |
| ---- | --------- | ------ |
| Perto da luz | `d < RANGE * 0.3` | Bordas vivas, separação forte |
| Média | `RANGE * 0.3 < d < RANGE` | Elevação clara, mas calma |
| Longe | `d > RANGE` | Camadas quase planas |

---

## Tokens de Fallback

Para quando JS não estiver disponível ou como valores iniciais:

### Light Mode

```css
:root {
  --bg-surface: #ffffff;
  --bg-surface-muted: #f9fafb;
  --radius-surface: 6px;
  
  /* Fallback estáticos (sem JS) */
  --hi: 0.18;
  --ao: 0.15;
  --sh: 0.08;
  --a: 90deg;
}
```

### Dark Mode

```css
.dark {
  --bg-surface: #111827;
  --bg-surface-muted: #1f2933;
  
  /* Dark mode usa luminosidade, menos oclusão */
  --hi: 0.10;
  --ao: 0.08;
  --sh: 0.04;
}
```

---

## Arquitetura Correta

A separação de responsabilidades é fundamental:

| Camada | Responsabilidade |
| ------ | ---------------- |
| **JavaScript** | Espaço, geometria, física (calcula variáveis) |
| **CSS** | Aparência (consome variáveis) |

O CSS **nunca** deve saber sobre posições ou distâncias.
O JavaScript **nunca** deve definir cores ou gradientes diretamente.

---

## Limite Perceptual

Mesmo com implementação correta, o efeito será sutil quando:

- Distância é muito grande (`d >> RANGE`)
- Viewport é pequeno
- Contraste do display é baixo

**Isso é física, não bug.**

Por isso:

- `BASE.*` nunca é zero
- Sempre há algum efeito mínimo
- O sistema degrada graciosamente

---

## Síntese

Quando você junta:

1. **Ponto de luz global** — posição fixa, consistente
2. **Vetor por elemento** — direção calculada
3. **Falloff consistente** — intensidade por distância

...a UI começa a se comportar como um **ambiente iluminado**, não como um conjunto de componentes estilizados.

> Isso é o teto do que dá para fazer em CSS + JS sem entrar em canvas/WebGL — e já é surpreendentemente convincente.

---

## Referência Visual

A metáfora visual completa:

> *"O viewport significa de forma abstrata uma mesa de trabalho, onde uma fonte de luz está no topo e centralizada, como um softbox que aplica luz suficiente apenas para gerar o contraste necessário entre a papelada em cima da mesa de alguém que gosta de ambientes considerados minimalistas e essenciais. Uma luz um pouco fria de quem quer ver as coisas como elas são, nuas e cruas."*

---

## Referências

- Conversa original: [Efeito de Elevação Web](https://chatgpt.com/share/6970f8e4-2234-8007-8940-09413a626e1b)
