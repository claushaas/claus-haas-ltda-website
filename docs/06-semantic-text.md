# 06 — Clareza Semântica: Texto, Espaço e Significado Visual

> Este documento define como texto, espaçamento e elementos visuais codificam significado de forma inequívoca.

---

## Requisito Central

> **Toda distinção visual deve carregar significado.**

Não deve haver **ambiguidade** entre diferentes tipos de texto, seções ou níveis de ênfase.

- Se dois elementos parecem similares, devem significar a mesma coisa
- Se significam coisas diferentes, devem parecer diferentes de **forma relevante e perceptível**

Diferenciação visual não é decoração — é **semântica**.

---

## Texto Como Interface Principal

Texto é a interface principal deste site.

Portanto:

- Hierarquia deve ser **imediatamente perceptível**
- Papéis devem ser **inequívocos**
- Ênfase deve ser **intencional**
- Repetição deve **reforçar significado**, não confundir

Um leitor nunca deve precisar perguntar:
> "Isso é um título, uma seção, uma nota, ou apenas texto enfatizado?"

A resposta deve ser óbvia pela forma visual apenas.

---

## Papéis de Texto (Semânticos, Não Estilísticos)

Cada papel de texto tem um **único significado explícito** e uma **única representação visual**.

### Body Text (Texto Principal)

| Aspecto | Especificação |
| ------- | ------------- |
| **Significado** | Narrativa primária e raciocínio |
| **Peso** | Normal (400) |
| **Legibilidade** | Máxima |
| **Cor** | `--text-secondary` |
| **Line Height** | Confortável (1.7) |

Este é o estado padrão do pensamento.

### Section Heading (Título de Seção)

| Aspecto | Especificação |
| ------- | ------------- |
| **Significado** | Mudança de contexto conceitual |
| **Peso** | Mais pesado que body (600) |
| **Tamanho** | Maior que body |
| **Contraste** | Mais forte |
| **Separação** | Vertical clara |

Um heading deve sinalizar:
> "Agora estamos raciocinando sobre um conceito diferente."

### Subsection Heading (Se Usado)

| Aspecto | Especificação |
| ------- | ------------- |
| **Significado** | Subdivisão do mesmo espaço conceitual |
| **Distinção** | Visualmente distinto de body |
| **Hierarquia** | Claramente mais fraco que section heading |
| **Regra** | Nunca ambíguo com body text |

> Se a distinção entre section e subsection não é óbvia, um deles deve ser removido.

### Meta / Texto de Suporte

| Aspecto | Especificação |
| ------- | ------------- |
| **Significado** | Informação secundária, contexto, clarificação |
| **Contraste** | Menor |
| **Tamanho** | Menor |
| **Competição** | Nunca compete com body text |
| **Cor** | `--text-muted` |

Meta text deve parecer **opcional**.
Se atrai atenção, está incorretamente estilizado.

### Ênfase

| Aspecto | Especificação |
| ------- | ------------- |
| **Significado** | Importância local dentro de uma sentença |
| **Frequência** | Rara |
| **Regra 1** | Não deve substituir estrutura |
| **Regra 2** | Não deve ser confundida com headings |

> Se ênfase começa a parecer estrutural, a estrutura está errada.

### Listas

| Aspecto | Especificação |
| ------- | ------------- |
| **Significado** | Conceitos ou itens paralelos |
| **Alinhamento** | Claro |
| **Espaçamento** | Consistente |
| **Ruído** | Nenhum |

Listas são para estrutura, não decoração.

---

## Espaçamento Como Significado

Espaçamento não é padding estético.
Espaçamento é um **delimitador semântico**.

### Espaçamento Vertical Deve Comunicar

- Continuação vs separação
- Mesmo tópico vs novo tópico
- Ênfase vs transição

### Regras de Espaçamento

1. Espaçamento idêntico = relação semântica idêntica
2. Relações semânticas diferentes = espaçamentos diferentes
3. Valores arbitrários de espaçamento são **proibidos**

> Se um novo valor de espaçamento parece necessário, a hierarquia está incorreta.

---

## Dimensões Como Sinais

Cada dimensão visual tem um papel definido:

| Dimensão | Papel |
| -------- | ----- |
| **Tamanho** | Hierarquia |
| **Peso** | Ênfase e autoridade |
| **Cor** | Papel semântico, não decoração |
| **Opacidade / Contraste** | Prioridade |

### Regras de Uso

- Nenhuma dimensão deve ser usada redundantemente sem propósito
- Não use tamanho E cor se uma já comunica o significado
- Não use cor para "consertar" hierarquia pouco clara
- Se múltiplos sinais são usados, devem reforçar o mesmo significado
- Sinais nunca devem contradizer uns aos outros

---

## Proibição de Estados Ambíguos

O sistema não permite:

- ❌ Dois significados diferentes compartilhando a mesma aparência visual
- ❌ Um significado tendo múltiplas representações visuais

**Ambiguidade é tratada como bug de design.**

Se ambiguidade aparece:

1. Remova uma variante
2. Simplifique a hierarquia
3. Ou colapse papéis

> Nunca adicione um novo estilo para "resolver" confusão.

---

## Consistência Sobre Expressividade

Consistência é priorizada sobre expressividade.

Uma vez que um padrão visual é estabelecido:

- Deve ser **reutilizado**
- Não deve ser **reinterpretado**
- Não deve ser **levemente alterado**

Variação sutil é fonte de fricção cognitiva.

O sistema deve parecer:
> "Previsível, aprendível, e estável."

---

## Classes Tipográficas Canônicas

```css
.t-heading {
  font-size: var(--text-heading);
  line-height: var(--line-heading);
  font-weight: var(--weight-semibold);
  color: var(--text-primary);
}

.t-body {
  font-size: var(--text-body);
  line-height: var(--line-body);
  font-weight: var(--weight-regular);
  color: var(--text-secondary);
}

.t-meta {
  font-size: var(--text-meta);
  line-height: var(--line-meta);
  font-weight: var(--weight-medium);
  color: var(--text-muted);
}
```

---

## Princípio Guia

> **Se o significado de um pedaço de texto não é óbvio pela sua forma visual, o sistema falhou.**

Tipografia, espaçamento e ênfase existem para **codificar significado**, não estilo.

Este site trata ambiguidade visual como um **erro funcional**, não como uma discordância subjetiva.

---

## Checklist de Validação

Ao revisar qualquer página, pergunte:

- [ ] Cada papel de texto é visualmente distinto?
- [ ] A hierarquia é óbvia sem esforço?
- [ ] Espaçamento comunica relações claramente?
- [ ] Não há dois elementos que parecem iguais mas significam coisas diferentes?
- [ ] Ênfase é rara e justificada?
- [ ] Meta text não compete com body text?
