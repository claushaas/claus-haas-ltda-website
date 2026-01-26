# 14 — Checklist de PR

> Este documento define o checklist de qualidade para cada Pull Request.

---

## Propósito

Este checklist garante que cada mudança no código mantém a integridade do sistema de design e a qualidade geral do projeto.

**Use antes de abrir qualquer PR.**

---

## Checklist Obrigatório

### 1. Cores

- [ ] Não introduziu cores fora dos tokens definidos
- [ ] Não usou valores HEX/RGB inline
- [ ] Accent usado apenas para links e focus
- [ ] OKLCH como formato primário (ver [16-color-system-spec.md](./16-color-system-spec.md))
- [ ] Contraste validado nos pares exigidos do spec

### 2. Sombras e Bordas

- [ ] Não introduziu drop-shadow/box-shadow tradicional (usar apenas iluminação global)
- [ ] Não introduziu radius fora de `--radius-surface`
- [ ] Não adicionou bordas decorativas

### 3. Espaçamento

- [ ] Não usou valores arbitrários de espaçamento
- [ ] Usou apenas tokens `--space-*`
- [ ] Stacks usando classes canônicas (`.stack-*`)

### 4. Tipografia

- [ ] Hierarquia textual sem ambiguidade
- [ ] Papéis distintos têm visuais distintos
- [ ] Usou classes tipográficas (`.t-heading`, `.t-body`, `.t-meta`)
- [ ] Não introduziu novos tamanhos ou pesos de fonte

### 5. Elevação

- [ ] `.surface` usado apenas onde necessário
- [ ] Elevation não usada para "embelezar"
- [ ] Sem múltiplos níveis de elevação
- [ ] Sem animações de elevação

### 6. Motion e Foco

- [ ] Motion respeita [22-motion-policy.md](./22-motion-policy.md)
- [ ] Reduced motion funciona
- [ ] Engaged segue [19-focus-transfer-spec.md](./19-focus-transfer-spec.md)
- [ ] Scroll lock e focus trap corretos quando aplicavel

### 7. Layout

- [ ] Usou classes canônicas (`.page`, `.reading`, `.section`)
- [ ] Largura de leitura respeitada (~60–75ch)
- [ ] Responsividade funciona

### 8. Componentes

- [ ] Não introduziu componentes proibidos (ver lista abaixo)
- [ ] Componentes novos usam apenas classes canônicas
- [ ] Componentes documentados se novos

### 9. Acessibilidade

- [ ] Focus visível e acessível (`:focus-visible`)
- [ ] Contraste atende WCAG AA
- [ ] Headings em ordem hierárquica
- [ ] `aria-labels` onde necessário
- [ ] Navegação por teclado funciona

### 10. Resiliência

- [ ] Load/Error/Empty respeitam [24-resilience-loading-error.md](./24-resilience-loading-error.md)
- [ ] Aliens possuem fallback e legenda

### 11. Código

- [ ] `npm run biome:check` passa sem erros
- [ ] `npm run typecheck` passa sem erros
- [ ] Sem `// @ts-ignore` ou `any` desnecessário
- [ ] Sem console.log de debug

### 12. Valores Arbitrários

- [ ] Nenhum valor arbitrário em `className` (ex: `[#123456]`, `[13px]`)
- [ ] Se exceção foi necessária, está documentada

---

## Componentes Proibidos

Os seguintes padrões são explicitamente proibidos:

| Componente | Motivo |
| ---------- | ------ |
| Cards decorativos | Ruído visual |
| Modals genéricos | Substituídos por Focus Transfer |
| Dropdowns | Menus ocultos |
| Hamburger menu | Menus ocultos |
| Tabs | Oculta informação |
| Accordions | Oculta informação |
| Toasts | Interrupção |
| FABs | Tendência UI |
| Badges decorativos | Ruído visual |

---

## Perguntas de Validação

Antes de finalizar o PR, pergunte:

1. **Hierarquia é óbvia?**  
   Um visitante novo entenderia a estrutura imediatamente?

2. **Há ambiguidade visual?**  
   Dois elementos que parecem iguais significam a mesma coisa?

3. **Elevation é necessária?**  
   Espaçamento e tipografia não resolveriam?

4. **Isso envelhece bem?**  
   Em 2 anos, ainda fará sentido?

5. **Isso serve ao propósito?**  
   Ajuda a clarificar quem sou e como trabalho?

---

## Processo de Review

### Antes de Abrir PR

1. ✅ Rodar checklist acima
2. ✅ Testar visualmente em browser
3. ✅ Testar em dark mode (se aplicável)
4. ✅ Testar responsividade básica

### Descrição do PR

Incluir:

- O que foi alterado
- Por que foi alterado
- Screenshots se houver mudanças visuais
- Quais itens do checklist são relevantes

### Durante Review

- Verificar cada item do checklist
- Questionar qualquer desvio
- Exigir documentação para exceções

---

## Exceções

Se uma exceção ao sistema for absolutamente necessária:

1. **Documentar** o motivo no PR
2. **Justificar** por que o sistema não atende
3. **Propor** mudança no sistema se for recorrente
4. **Nunca** fazer exceção silenciosa

> Exceções não documentadas são bugs.

---

## Critério de Aprovação

Um PR pode ser mergeado se:

- [ ] Todos os itens obrigatórios do checklist estão ✅
- [ ] Exceções (se houver) estão documentadas
- [ ] Testes de lint/type passam
- [ ] Review visual foi feito
