# Content Specification

## Purpose

Este documento define **que conteudo existe**, **por que existe** e **como deve ser escrito** para o site.

Ele e uma especificacao **normativa** (um contrato), nao um rascunho de copy. Serve como fonte unica de verdade para criar, revisar e evoluir o conteudo do site com consistencia.

---

## Fontes canonicas (inputs) e intencao

Este contrato e derivado diretamente destes inputs:

- `app/content/content-spec/inputs.md/how-to-work-with-claus.md`
- Conversa "Arquitetura de Conteudo" (ChatGPT share): `https://chatgpt.com/share/6977910f-3e18-8007-a119-ecbe49a89501`

Se este documento entrar em conflito com os inputs acima, **os inputs vencem** e este arquivo deve ser ajustado.

Trechos-ancora (para manter o espirito intacto):

> "Vou tratar isso como um manual operacional humano." — `how-to-work-with-claus.md`
>
> "Clareza e percebida como respeito." — `how-to-work-with-claus.md`
>
> "Este site nao e um portfolio. E um manual operacional publico." — "Arquitetura de Conteudo"
>
> "O site nao e narrativo. Ele e instrumental." — "Arquitetura de Conteudo"
>
> "Se uma pagina nao muda o estado mental do visitante, ela e ruido." — "Arquitetura de Conteudo"

---

## 1. Filosofia de conteudo (nao negociavel)

### 1.1. O site e um sistema (nao uma historia)

Este site nao existe para contar uma historia pessoal.

Ele existe para **externalizar um sistema em operacao**:

- reduzir ambiguidade
- tornar criterios e decisoes auditiveis
- filtrar compatibilidade cognitiva
- acelerar colaboracoes boas e evitar as ruins

Isso implica:

- cada rota responde **uma unica pergunta**
- nenhuma rota compete por atencao (sem redundancia funcional)
- o visitante consegue dizer "sim" ou "nao" rapidamente

Filtro nao e "trade-off"; e **reducao intencional de ilusoes de compatibilidade**.

### 1.2. Limites cognitivos liberam criatividade (conforto de errar)

O contrato existe para estabelecer limites claros do trabalho.

O objetivo nao e deixar o site "frio"; e criar **clareza suficiente** para que:

- o foco fique intenso
- a direcao fique obvia
- o medo de errar desapareca

Metafora operacional: cada rota deve deixar explicito o "destino" e o "modo de viagem". So depois disso vem a pergunta: **"eu quero fazer essa viagem?"**

### 1.3. Sentimento desejado (macro)

O site deve passar, consistentemente:

- calma e precisao (sem pressa e sem floreio)
- assertividade sem agressividade
- respeito ao tempo do visitante (e ao proprio)
- espaco seguro para discordar, desde que com logica/dados
- baixa friccao para sair (fechar a aba) ou seguir (rota seguinte clara)

---

## 2. Regras globais de escrita (valem para todas as rotas editoriais)

### 2.1. Estrutura obrigatoria por pagina

Cada pagina editorial deve explicitar:

- **Pergunta respondida** (uma frase)
- **Papel cognitivo** (para que ela existe no sistema)
- **Sentimento desejado** (como deve "bater")
- **Condicao de saida** (o que fazer depois)

### 2.2. Tom e estilo

- direto e literal (pouco subtexto)
- factual, quase como um README
- claro sobre o que e:
  - sabido
  - nao sabido
  - assumido
- preferencia por:
  - opcoes + trade-offs
  - criterios explicitos
  - consequencias praticas

### 2.3. Padroes proibidos (anti-blocos)

- linguagem motivacional/aspiracional
- storytelling pessoal como estrutura principal
- claims vagos ("apaixonado", "experiente", "inovador")
- pitch, CTA agressivo, "me contrate"
- repeticao da mesma funcao em paginas diferentes

### 2.4. Incerteza permitida (sem perder rigor)

E permitido dizer "ainda nao sei" e publicar em estado incompleto **desde que**:

- a pagina esteja rotulada (ex.: `Draft`)
- exista data ou contexto de "quando isso foi verdade"
- esteja claro o que mudaria a conclusao

Isso e parte do conforto de errar: tornar o estado do pensamento visivel, sem performar certeza.

### 2.5. i18n (en/pt)

- todo conteudo visivel ao usuario deve existir em `en` e `pt`
- traduzir significa manter a funcao e o tom (nao "embelezar")
- evitar idiomatismos que percam a funcao na traducao

---

## 3. Especificacao por rota (contrato de conteudo)

As rotas editoriais deste contrato sao as rotas sob `/:lang/*` definidas em `app/routes.ts`.

Rotas de infra (`redirect-root`, `redirect-catchall`, `devtools-probe`) nao carregam conteudo editorial e ficam fora do escopo.

---

### `/:lang` (index) — Home

#### Pergunta respondida

> Devo continuar explorando este site ou fechar a aba?

#### Papel cognitivo

Filtro cognitivo imediato e roteador.

A home nao explica tudo. Ela **orienta** e aponta caminhos.

#### Sentimento desejado

- "Entendi o que e isto" em 5 segundos
- sem pressao para continuar
- clareza como respeito (nada de truques)

#### Blocos obrigatorios

- uma frase funcional de posicionamento (nao pitch)
- "este site e" / "este site nao e" (versao curta)
- mapa do sistema: links para rotas nucleares
- sinalizacao de compatibilidade (para quem faz sentido / nao faz)

#### Exemplos de formulacao (nao copy final)

> "Este site nao e um portfolio. E um manual operacional publico." — "Arquitetura de Conteudo"
>
> "Esse e um cerebro operando em publico." — `how-to-work-with-claus.md`

#### Anti-blocos (nao entra)

- biografia
- listagem de projetos
- explicacoes longas

#### Condicao de saida

- navegar para uma rota nuclear
- fechar a aba

#### Criterios de pronto

- em 1 leitura rapida, a pessoa sabe se vale investir tempo
- os links levam para as perguntas certas (sem redundancia)

---

### `/:lang/how-i-work`

#### Pergunta respondida

> Como colaborar com esta pessoa na pratica?

#### Papel cognitivo

Contrato cognitivo explicito.

Esta e a pagina "manual operacional humano" do site.

#### Sentimento desejado

- previsibilidade ("sei o que esperar")
- seguranca para discordar (desde que com criterio)
- clareza sem teatralidade

#### Blocos obrigatorios

- por que esta pagina existe (um paragrafo curto, sem desculpas)
- TL;DR (3 a 7 bullets)
- manual completo (versao longa), cobrindo:
  - modelo mental
  - o que gera melhores outputs (entradas boas)
  - como problemas sao abordados (debug de premissas, opcoes + trade-offs)
  - comunicacao (como escrever mensagens que funcionam)
  - autonomia/ownership (como delegar de verdade)
  - como discordar e decidir
  - friccoes comuns e como evitar
  - nao-compatibilidades (o que nao funciona)

#### Estrutura sugerida

- "Como trabalhar comigo" (manual)
- "Como me acionar" (formato de entrada)
- "Como discordar bem" (criterios e exemplos)
- "O que nao funciona" (anti-padroes)

#### Anti-blocos (nao entra)

- historia pessoal
- lista de ferramentas (vai em `/uses`)
- linguagem defensiva ("desculpa ser assim")
- mensagens vagas como:
  - "ve isso quando puder"
  - "acho que talvez"
  - "nao sei direito, mas..."

#### Condicao de saida

- decidir colaborar ou nao
- ir para `/contact` com input claro
- ir para `/principles` para entender o porque

#### Criterios de pronto

- qualquer pessoa consegue interagir melhor com 1 leitura
- existe pelo menos 1 template de mensagem/brief

---

### `/:lang/principles`

#### Pergunta respondida

> Qual modelo mental e quais invariantes dirigem decisoes aqui?

#### Papel cognitivo

Tornar invariantes auditiveis.

Esta pagina explica **por que** o "How I Work" funciona desse jeito.

#### Sentimento desejado

- coerencia
- "posso prever decisoes"
- "posso desafiar isso com logica"

#### Blocos obrigatorios

- principios (os que nao mudam)
- anti-principios (o que e evitado conscientemente)
- implicacoes praticas por dominio (design, codigo, produto)

#### Cada principio deve conter

- enunciado curto
- consequencia pratica (como muda decisoes)
- anti-exemplo (como parece quando da errado)

#### Exemplos de principios (sementes, nao exaustivo)

- clareza > conforto
- sistemas > opinioes
- premissas explicitas > alinhamento implicito
- decisoes > opinioes

#### Anti-blocos (nao entra)

- valores genericos de poster
- frases de efeito

#### Condicao de saida

- aceitar/rejeitar compatibilidade
- navegar para `how-i-work` ou `projects`

---

### `/:lang/about`

#### Pergunta respondida

> Quem e esta pessoa, sem distorcao de marketing?

#### Papel cognitivo

Contexto humano minimo.

Nao e autobiografia; e baseline para reduzir erro de leitura.

#### Sentimento desejado

- sobriedade
- "sei onde esta pessoa se encaixa"

#### Blocos obrigatorios

- descricao objetiva (o que faz / onde atua)
- dominios de foco (problemas tipicos)
- interesses estruturais (o que tende a observar e otimizar)
- definicao em tres camadas (o que / como / por que)

#### Anti-blocos (nao entra)

- storytelling de carreira
- narrativa emocional
- autoelogio

#### Condicao de saida

- ganhar contexto suficiente
- ir para `projects` (evidencias) ou `how-i-work` (colaboracao)

---

### `/:lang/projects`

#### Pergunta respondida

> Que trabalho concreto e verificavel existe?

#### Papel cognitivo

Evidencia sem promocao.

#### Sentimento desejado

- confianca por prova (nao por promessa)
- "sei o que essa pessoa entrega"

#### Blocos obrigatorios

- lista curada (poucos, bons, verificaveis)
- cada projeto em formato problema -> abordagem -> status
- links para artefatos (repo, demo, docs, screenshots, etc.)

#### Template minimo por projeto

- contexto (o que existia antes)
- problema (qual ambiguidade/risco foi reduzido)
- restricoes
- abordagem (com trade-offs)
- evidencias/artefatos
- status (ativo, em manutencao, pausado, encerrado)
- proximo passo (ou motivo de encerramento)

#### Regra de inclusao

So entram projetos com artefatos tangiveis.

#### Anti-blocos (nao entra)

- adjetivos sem prova
- "case" com narrativa publicitaria

#### Condicao de saida

- abrir um artefato
- ir para `contact`

---

### `/:lang/uses`

#### Pergunta respondida

> Que ferramentas e setups sao usados de verdade (e por que)?

#### Papel cognitivo

Transparencia pratica.

#### Sentimento desejado

- utilidade imediata
- "isso e replicavel"

#### Blocos obrigatorios

- hardware
- software
- tooling de desenvolvimento
- automacao / uso de IA
- heuristicas de selecao (como decide trocar/manter)

#### Anti-blocos (nao entra)

- endosso/propaganda
- link de afiliado
- "lista de compras" sem criterio

#### Condicao de saida

- copiar/replicar um setup
- entender criterios de escolha

---

### `/:lang/contact`

#### Pergunta respondida

> Qual e o proximo passo correto?

#### Papel cognitivo

Handoff com baixa friccao.

#### Sentimento desejado

- "sei exatamente como acionar"
- "posso errar no contato sem ser punido" (porque o formato e claro)

#### Blocos obrigatorios

- quando contatar (casos objetivos)
- quando nao contatar
- um unico metodo de contato
- formato esperado (template)

#### Template sugerido (obrigatorio)

```text
Assunto: [objetivo em 1 linha]

Contexto:
- ...

Objetivo:
- ... (decidir? explorar? executar?)

Restricoes:
- prazo:
- orcamento:
- stack/ambiente:

O que ja tentamos:
- ...

Pergunta:
- ...
```

#### Anti-blocos (nao entra)

- multiplos canais concorrentes
- "me chama" sem contexto

#### Condicao de saida

- enviar mensagem
- decidir nao enviar

---

### `/:lang/notes`

#### Pergunta respondida

> Que ideias estao sendo exploradas ao longo do tempo?

#### Papel cognitivo

Arquivo publico de pensamento.

#### Sentimento desejado

- laboratorio (processo > performance)
- permissao para incompletude, com rotulo e data

#### Blocos obrigatorios

- indice de notas
- filtros/grupos (tag, ano, tema)
- politica editorial (o que e uma nota aqui)

#### Politica editorial (conteudo minimo)

- notas sao laboratorio
- datas importam
- status importa (draft/stable/archived)

#### Condicao de saida

- abrir uma nota
- voltar para `principles`/`harada`

---

### `/:lang/notes/:slug`

#### Pergunta respondida

> Quero ler uma nota especifica em contexto.

#### Papel cognitivo

Consumo focado.

#### Sentimento desejado

- clareza de contexto
- trilha (de onde veio / para onde ir)

#### Blocos obrigatorios

- conteudo da nota
- metadados (data, tags, status, idioma)
- navegacao (anterior / proxima / indice)

#### Condicao de saida

- seguir para outra nota
- voltar ao indice

---

### `/:lang/harada`

#### Pergunta respondida

> No que esta sendo trabalhado agora, estruturalmente?

#### Papel cognitivo

Snapshot operacional vivo.

#### Sentimento desejado

- maturidade e coerencia (pratica, nao discurso)
- estrutura sem autoajuda

#### Blocos obrigatorios

- explicacao breve do metodo Harada (o suficiente para ler)
- board atual
- regras de leitura (snapshot, nao promessa)

#### Regras fixas do board (conteudo)

- grid 9x9
- goal no centro
- 8 temas ao redor (N, NE, E, SE, S, SW, W, NW)
- cada tema com 8 acoes no bloco 3x3 (centro vazio)
- strings curtas (idealmente <= 120 chars)

#### SEO (obrigatorio)

- esta rota nao deve ser indexada (noindex, nofollow, noarchive)

#### Anti-blocos (nao entra)

- promessas publicas
- linguagem de autoajuda

#### Condicao de saida

- entender o foco atual
- ir para `contact` com contexto melhor

---

### `/:lang/palette-kit`

#### Pergunta respondida

> Como o design system aparece na pratica (com provas)?

#### Papel cognitivo

Prova tecnica.

#### Sentimento desejado

- credibilidade tecnica
- "isso e um sistema, nao um moodboard"

#### Blocos obrigatorios

- o que e Palette-Kit (objetivo tecnico)
- pilares (cor, semantica, resolvers, integracao)
- exemplos/demos
- links (repos, specs)
- status atual (o que existe / o que falta)

#### Anti-blocos (nao entra)

- marketing
- tutoriais longos (o foco e documentar o sistema)

#### Condicao de saida

- validar o sistema
- abrir repos/specs

---

## 4. Checklist de revisao (por pagina)

Uma pagina esta pronta apenas se:

- a pergunta principal esta respondida claramente
- o papel cognitivo nao se sobrepoe a outra rota
- todas as afirmacoes sao concretas ou verificaveis
- a condicao de saida e obvia
- o sentimento desejado aparece sem manipulacao

Checklist adicional (conforto de errar):

- se a pagina estiver incompleta, isso esta explicito (status + data + criterio de mudanca)

---

## 5. Diretorio e versoes

Este diretorio e **documentacao**, nao conteudo runtime:

```text
app/content/content-spec/
```

Arquivos recomendados:

- `content-spec.md` (este contrato)
- `inputs.md/` (inputs brutos, para rastreabilidade)
- `writing-rules.md` (opcional, se regras finas crescerem)
- `review-checklist.md` (opcional, se virar um PR editorial)

---

## Revision history

- v0.3 (2026-01-26): alinhamento explicito com `how-to-work-with-claus.md` + conversa "Arquitetura de Conteudo"; adiciona "sentimento" por rota; detalha blocos/anti-blocos e escopo de rotas.
- v0.2: versao inicial.
