# 15 — Critérios de Sucesso

> Este documento define como saber se a v0.2 foi bem-sucedida.

---

## Critérios Primários

### 1. Clareza Imediata

**Critério:** Pessoas alinhadas sentem clareza imediatamente.

**Como validar:**

- Mostrar o site para pessoas que conhecem o autor
- Perguntar: "Isso faz sentido? Isso é o Claus?"
- Resposta esperada: "Sim, óbvio"

**Indicadores de sucesso:**

- [ ] Nenhuma pergunta sobre "o que é isso"
- [ ] Navegação intuitiva sem explicação
- [ ] Conteúdo ressoa com quem conhece

---

### 2. Auto-Filtro

**Critério:** Pessoas desalinhadas se auto-filtram.

**Como validar:**

- O site não tenta agradar a todos
- Pessoas que não são o público sentem que "não é para elas"
- Isso é intencional e positivo

**Indicadores de sucesso:**

- [ ] Nenhum elemento "marketeiro"
- [ ] Tom direto, não persuasivo
- [ ] Conteúdo operacional, não promocional

---

### 3. Longevidade

**Critério:** O site envelhece bem sem pressão por redesign.

**Como validar:**

- Em 6 meses: ainda parece atual?
- Em 1 ano: precisa de mudanças visuais?
- Em 2 anos: ainda faz sentido?

**Indicadores de sucesso:**

- [ ] Sem uso de tendências visuais
- [ ] Design atemporal
- [ ] Apenas conteúdo muda, não visual

---

### 4. Fim de Debates de Design

**Critério:** Decisões sobre design param de ser debatidas.

**Como validar:**

- Novas páginas seguem o sistema sem discussão
- Não há "e se fizéssemos diferente?"
- O sistema é claro e completo

**Indicadores de sucesso:**

- [ ] Checklist de PR é suficiente
- [ ] Novos contribuidores entendem rapidamente
- [ ] Sem exceções frequentes

---

### 5. Conteúdo como Única Variável

**Critério:** Apenas o conteúdo muda ao longo do tempo.

**Como validar:**

- Atualizações são apenas de texto
- Estrutura permanece estável
- Design não é tocado

**Indicadores de sucesso:**

- [ ] Commits são principalmente em `/content/` ou texto
- [ ] CSS/componentes raramente mudam
- [ ] Novas rotas seguem templates existentes

---

## Critérios Técnicos

### 6. Performance

**Critério:** O site é rápido e leve.

**Métricas alvo:**

| Métrica | Alvo |
| ------- | ---- |
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| Bundle JS | < 100KB (gzip) |

**Como validar:**

- Lighthouse score > 90
- Core Web Vitals verdes
- Teste em conexão 3G

---

### 7. Acessibilidade

**Critério:** O site é acessível para todos.

**Métricas alvo:**

| Aspecto | Requisito |
| ------- | --------- |
| Contraste | WCAG AA |
| Navegação | Funciona 100% via teclado |
| Screen readers | Estrutura semântica correta |
| Focus | Sempre visível |

**Como validar:**

- Lighthouse Accessibility > 95
- Teste manual com teclado
- Teste com VoiceOver/NVDA (opcional)

---

### 8. Estabilidade

**Critério:** Nenhum bug visual ou funcional.

**Como validar:**

- Teste em Chrome, Firefox, Safari
- Teste em mobile (iOS, Android)
- Dark mode funciona
- Responsividade funciona

**Indicadores de sucesso:**

- [ ] Nenhum layout quebrado
- [ ] Nenhum texto cortado
- [ ] Nenhum elemento sobreposto

---

## Critérios Qualitativos

### 9. Sensação

**O site deve sentir:**

| ✅ Deve sentir | ❌ Não deve sentir |
| ------------- | ----------------- |
| Calmo | Agitado |
| Quieto | Barulhento |
| Deliberado | Improvizado |
| Confiável | Instável |
| Denso mas não pesado | Vazio ou sobrecarregado |

**Como validar:**

- Impressão de primeira visita
- Feedback de 3-5 pessoas

---

### 10. Hierarquia Óbvia

**Critério:** A hierarquia é óbvia sem esforço.

**Como validar:**

- Olhar para qualquer página por 5 segundos
- A estrutura deve ser clara
- Não deve haver confusão sobre "o que é isso"

**Indicadores de sucesso:**

- [ ] Headings são distintos de body
- [ ] Meta é claramente secundário
- [ ] Seções são claramente separadas

---

### 11. Elevação Inferida

**Critério:** A elevação é inferida, não notada.

**Como validar:**

- Mostrar `/harada` para alguém
- Perguntar: "Você nota as sombras?"
- Resposta ideal: "Que sombras?"

**Indicadores de sucesso:**

- [ ] Separação de blocos é clara
- [ ] Sombras não chamam atenção
- [ ] Não parece "card UI"

---

## Checklist Final de Lançamento

Antes de considerar a v0.2 completa:

### Funcionalidade

- [ ] Todas as rotas funcionam
- [ ] Navegação completa
- [ ] Links não quebrados
- [ ] Dark mode funciona (se implementado)

### Conteúdo

- [ ] Home completa
- [ ] /how-i-work com conteúdo real
- [ ] /about com conteúdo real
- [ ] /principles com lista real
- [ ] /harada funcional

### Qualidade

- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 95
- [ ] Lighthouse Best Practices > 90
- [ ] Lighthouse SEO > 90 (exceto /harada que é noindex)

### Sistema

- [ ] Todos os tokens implementados
- [ ] Todas as classes canônicas implementadas
- [ ] Checklist de PR documentado
- [ ] Zero erros de lint/type

---

## Definição de "Pronto"

A v0.2 está pronta quando:

1. ✅ Todos os critérios primários são atendidos
2. ✅ Todos os critérios técnicos são atendidos
3. ✅ Checklist final de lançamento está completo
4. ✅ O autor olha para o site e pensa: "Isso sou eu"

> O último critério é o mais importante.
