# 00 — Origem e Contexto

> Este documento registra a origem da v0.2 do site e o contexto da conversa que deu início a este projeto.

---

## Como Começou

A versão 0.2 do site nasceu de uma conversa reflexiva que começou com uma pergunta simples:

> *"Se você fosse falar de mim para meus colegas de equipe e liderança, para mostrar de forma clara como interagir comigo para obter melhores outputs do meu trabalho, o que você falaria?"*

A intenção não era resolver um problema de relacionamento profissional. Era sobre **reduzir ambiguidade**.

Conhecer um pouco da forma de pensar, se relacionar, agir e se expressar do outro pode facilitar muito a clareza da comunicação e fazer entender a real intenção sem a ambiguidade das diferenças cognitivas e culturais de cada um.

---

## A Evolução da Ideia

O que começou como um texto "How I Work" evoluiu para algo maior:

1. **Primeira percepção:** Um texto sobre "como trabalho comigo" seria útil
2. **Segunda percepção:** Isso combina com traços cognitivos (ENTJ no MBTI, por exemplo)
3. **Terceira percepção:** Isso deveria virar um projeto — um site pessoal
4. **Quarta percepção:** O site não deve ser um currículo, blog ou portfolio tradicional
5. **Conclusão:** O site deve ser a **expressão mais clara e objetiva possível de quem eu sou**

---

## O Insight Central

> *"Este site não vai mais ser apenas uma espécie de currículo, nem blog, nem profissional, nem pessoal. Virá antes disso tudo. Será a expressão mais clara e objetiva possível do que o Claus é, de como ele funciona, do que ele faz."*

Este insight define todo o projeto:

- O site **vem antes** de todas as outras categorias
- Ele existe para **explicar** quem é o Claus
- Clareza é o objetivo primário
- Tudo que não serve a esse propósito é ruído

---

## Design Como Expressão

Na conversa, surgiu um princípio importante sobre design:

> *"O design sempre me interessa, e quero que ele transmita o que eu sou. Beleza, definir a fonte, a cor etc são secundários. Transmitir a minha pessoa vem em primeiro lugar."*

Isso estabelece a hierarquia:

1. **Primeiro:** Transmitir quem sou
2. **Segundo:** Decisões estéticas (fontes, cores, etc.)

O design não é decoração — é comunicação.

---

## Decisões Tomadas na Conversa

### Fonte

Foram consideradas:

- **Fira Code** — descartada (monospace, vibe de terminal)
- **Lora** — descartada (serifada, elegante demais)
- **Inter** — escolhida ✓

Racional da Inter:

- Neutra
- Alta legibilidade em texto longo
- Headings fortes mas não dramáticos
- Desenhada para desaparecer durante a leitura
- Atemporal e estável

### Cores

Decisões:

- Mesma fonte para todos os tipos de texto
- Algum azul para accent
- Tom de cinza combinando com azul para demais cores
- Luminosidades diferentes para hierarquia
- Sem glow, sem saturação excessiva

### Stack

- **React Router v7** (originalmente "Remix", mas clarificado para RR v7)
- **Tailwind v4** — CSS-first
- **Vite** — bundler
- Majoritariamente estático

---

## Artefatos da Conversa

A conversa produziu vários artefatos que foram expandidos nesta documentação:

1. **Design Brief** — expandido em [01-philosophy.md](./01-philosophy.md) e [03-design-philosophy.md](./03-design-philosophy.md)
2. **Design System** — expandido em [04-design-system.md](./04-design-system.md)
3. **Tokens** — detalhados em [08-css-implementation.md](./08-css-implementation.md)
4. **Rotas** — especificadas em [02-information-architecture.md](./02-information-architecture.md) e [10-route-specs.md](./10-route-specs.md)
5. **Harada** — detalhado em [11-harada-spec.md](./11-harada-spec.md)

---

## Conversa sobre Elevação

Uma parte importante da conversa tratou de como lidar com elementos que precisam estar próximos mas claramente separados (como os quadros do Harada):

> *"Alguns elementos, como por exemplo os quadros na rota harada, precisarão estar próximos mas precisarão de uma clara separação visual entre eles. Então penso em tonalizar o background, tanto no light quanto no dark com esse efeito de luz partindo de um ponto fixo e o efeito de elevação sutil em cards e qualquer elemento que precise passar a sensação de estar acima do background. Literalmente como algo deitado sobre o documento principal, e não impresso nele diretamente."*

Isso levou ao conceito de **"paper on paper"** — papel sobre papel — detalhado em [05-elevation-system.md](./05-elevation-system.md).

---

## Metáfora Visual

A metáfora final que guia o design:

> *"O viewport deve significar de forma um pouco abstrata como uma mesa de trabalho, onde uma fonte de luz está no topo e centralizada, como um softbox que aplica luz suficiente apenas para gerar o contraste necessário entre a papelada em cima da mesa de alguém que gosta de ambientes considerados minimalistas e essenciais. Uma luz um pouco fria de quem quer ver as coisas como elas são, nuas e cruas."*

---

## Referências

- Conversa original: [ChatGPT Share](https://chatgpt.com/share/69712a03-05e0-8007-8941-c9c8d9b23c4b)
- Conversa sobre efeito de elevação: [ChatGPT Share - Efeito de Elevação Web](https://chatgpt.com/share/6970f8e4-2234-8007-8940-09413a626e1b)
