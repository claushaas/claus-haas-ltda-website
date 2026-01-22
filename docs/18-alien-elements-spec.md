# 18 — Especificacao de Elementos Alienigenas (Embeds e Midias Externas)

> Este documento define como elementos externos entram no sistema sem quebrar o campo perceptual.

---

## Visao Geral

Elementos externos sao **alienigenas**:

- vem de fora do sistema
- trazem linguagem visual estranha
- precisam ser contidos, nao absorvidos

O objetivo nao e "estilizar tudo".
O objetivo e **neutralizar o impacto**.

Relacionamentos diretos:

- Tokens e classes canonicamente usados vivem em [08-css-implementation.md](./08-css-implementation.md)
- A hierarquia textual e definida em [06-semantic-text.md](./06-semantic-text.md)
- A logica de planos (mesa + papel) vive em [05-elevation-system.md](./05-elevation-system.md)

---

## 1) Principio Central

> Elementos externos se adaptam ao sistema.  
> O sistema nunca se adapta a eles.

Alienigenas devem:

- parecer colocados na mesa
- respeitar o modelo paper-on-paper
- nao introduzir novas regras de hierarquia
- nunca competir com texto

---

## 2) Classificacao de Alienigenas

Alienigenas sao agrupados por **comportamento**, nao por formato.

### 2.1 Passivos

- imagens
- diagramas
- ilustracoes
- screenshots

Nao tocam, nao movem, nao pedem interacao.

### 2.2 Ativos

- videos
- audio
- embeds interativos (mapas, charts, widgets)

Introduzem:

- movimento
- controles
- ganchos de atencao

### 2.3 Hostis (usar raramente)

- iframes de terceiros
- embeds sociais
- dashboards com branding
- qualquer coisa com UI chrome ou anuncios

Permitidos apenas com **contencao explicita**.

---

## 3) Regras Universais de Contencao

Todo alienigena obedece o mesmo contrato.

### 3.1 Regra de Superficie

Alienigenas sempre vivem em **superficie elevada**.
Nunca direto no base plane.

```css
.alien {
  /* marcador semantico */
}
```

Significado aplicado:

- o elemento foi colocado, nao escrito aqui
- ele vive em outro plano que o texto

### 3.2 Regra de Moldura

O sistema enquadra, o provedor nao.

- sem bordas de provedor
- sem sombras injetadas
- sem cantos arredondados do embed

Toda moldura vem do sistema.

### 3.3 Regra de Largura

Alienigenas respeitam a coluna de leitura.

- padrao: mesma largura de `.reading`
- excecoes: documentadas e raras

Nunca full-bleed por default.

### 3.4 Regra de Legenda

Todo alienigena exige **contexto**.

- legenda obrigatoria
- legenda usa `.t-meta`
- legenda nao e decorativa

Se nao cabe em uma frase, provavelmente nao pertence.

---

## 4) Imagens (Alienigenas Passivos)

### 4.1 Modelo Paper-on-Paper

Imagem e tratada como folha impressa sobre papel.

Regras:

- sempre embrulhada em `.surface`
- sem sombra na propria imagem
- sem borda, a nao ser que seja semantica

```html
<figure class="surface surface-pad stack-xs alien">
  <img src="..." alt="..." />
  <figcaption class="t-meta">Legenda factual.</figcaption>
</figure>
```

### 4.2 Caracteristicas de Imagem

- preferir coloracao neutra
- evitar saturacao alta se nao for obrigatorio
- screenshots devem ser limpas, recortadas, intencionais

Imagens nao podem introduzir um segundo sistema de cor.

---

## 5) Video (Alienigena Ativo)

Video e o alienigena mais perigoso.

### 5.1 Regra do Thumbnail (Obrigatoria)

**Nunca usar thumbnail do provedor.**

Motivos:

- tipografia estrangeira
- framing emocional
- hierarquia sequestrada

Em vez disso:

- gerar thumbnail proprio
- tratar como imagem estatica
- sobrepor affordance de play minima

### 5.2 Dois Estados

1. **Dormente** (default)

   - thumbnail estatico
   - parece imagem
   - intencionalmente sem drama

2. **Ativo**

   - usuario opta explicitamente
   - video carrega e toca

Sem autoplay. Sempre.

### 5.3 Container de Video

```html
<figure class="surface surface-pad stack-xs alien">
  <button class="video-thumbnail">
    <img src="custom-thumbnail.jpg" alt="..." />
    <span class="play-indicator"></span>
  </button>
  <figcaption class="t-meta">Contexto do video.</figcaption>
</figure>
```

Regras:

- play indicator sutil
- sem botao vermelho gigante
- sem branding visivel ate o play

---

## 6) Audio (Alienigena Ativo)

Audio deve ser **calmo, baixo e respeitoso**.

### 6.1 Filosofia

- audio e informacional, nao entretenimento
- controles nao devem chamar atencao
- player nao pode parecer um app de musica

### 6.2 Regras do Player

- sem waveform animado
- sem cores fortes
- sem gradientes
- sem sombra fora da surface

Player e uma **ferramenta**, nao uma feature.

```html
<figure class="surface surface-pad stack-xs alien">
  <audio controls src="audio.mp3"></audio>
  <figcaption class="t-meta">Contexto do audio.</figcaption>
</figure>
```

Guidance:

- usar apenas cores do sistema
- controles minimos
- player default do browser preferido se o customizado adicionar ruido

---

## 7) Embeds Interativos (Alto Risco)

Exemplos:

- mapas
- charts
- widgets de terceiros

### 7.1 Regra de Isolamento

- sempre dentro de `.surface`
- nunca inline com texto
- separar com espacamento antes e depois

### 7.2 Regra de Degradacao

Se o embed:

- falhar
- for bloqueado
- quebrar layout

Deve existir:

- fallback textual
- ou alternativa estatica (imagem/screenshot)

O sistema permanece intacto.

---

## 8) Coisas Esquecidas (Lista Explicita)

Se nao foi desenhado aqui, e alienigena.

Inclui:

- code blocks com syntax highlight
- tweets / posts sociais
- charts gerados por bibliotecas
- tabelas coladas
- formularios externos
- previews de PDF

Todos seguem as regras de contencao.

---

## 9) Wrapper Canonico

Classe recomendada:

```css
@layer components {
  .alien {
    /* marcador semantico */
  }
}
```

Proposito:

- facilita busca no DOM
- permite auditoria
- habilita politicas futuras

---

## 10) Checklist de Decisao

Antes de adicionar um alienigena:

1. Adiciona informacao que texto nao resolve?
2. Cabe em uma frase de contexto?
3. Cabe dentro de uma surface?
4. Respeita a largura de leitura?
5. Evita novas cores ou hierarquia?
6. E "chato" quando ocioso?

Se qualquer resposta for "nao", reavaliar.

---

## 11) Regra Final de Integridade

> Alienigenas sao convidados, nao residentes.

Eles podem existir na mesa,
mas nao definem a mesa,
o papel,
nem a linguagem do sistema.

Se um alienigena chama atencao para si,
ele violou o contrato.

---

## Fechamento

Com isto, o sistema cobre o que costuma quebrar sites:

- largura
- tipografia
- cor
- profundidade
- conteudo externo

Isso torna o site **dificil de degradar** com o tempo,
mesmo com material novo.
