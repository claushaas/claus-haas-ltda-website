# Harada Route — Specification & Roadmap

## 1. Objetivo

Implementar a rota **/harada** no site pessoal como um **documento vivo**, baseado em dados, versionável em Git e renderizado de forma determinística a partir de um **JSON semântico** preenchido por humano.

A rota não deve ser indexada por mecanismos de busca e deve priorizar clareza, estabilidade e baixo acoplamento.

---

## 2. Princípios de Design

* **Data → UI**: nenhuma lógica de negócio embutida no layout
* **Contrato explícito**: decisões estruturais fixas e documentadas
* **Versionamento nativo**: Git como fonte da verdade
* **Semântico para humanos**: JSON fácil de preencher e revisar
* **Determinismo**: mesma entrada gera sempre o mesmo grid
* **Baixa dívida técnica**: decisões travadas cedo

---

## 3. Estrutura de Conteúdo

### 3.1 Estrutura de Arquivos

```text
app/
  content/
    harada/
      index.json
      2026-01.json
```

* `index.json`: controla versionamento e define a versão ativa
* `<version>.json`: conteúdo do Harada (uma versão imutável)

---

### 3.2 index.json

```json
{
  "latest": "2026-01",
  "versions": ["2026-01"]
}
```

* `latest`: versão carregada por default pela rota `/harada`
* `versions`: histórico (opcional no MVP, já previsto)

---

## 4. Schema do Harada (Forma Semântica)

### 4.1 Estrutura Geral

```json
{
  "meta": {
    "title": "Harada Board",
    "period": "2026 Q1",
    "language": "pt",
    "updatedAt": "2026-01-20"
  },
  "goal": "Objetivo central (<=120 chars)",
  "themes": ["... x8"],
  "actions": [["... x8"] x8]
}
```

### 4.2 Regras Estruturais

* `themes.length === 8`
* `actions.length === 8`
* Cada `actions[i].length === 8`
* Cada string (goal, theme, action) **≤ 120 caracteres**
* Ordem dos temas é **contrato fixo**:

  1. Norte (N)
  2. Nordeste (NE)
  3. Leste (E)
  4. Sudeste (SE)
  5. Sul (S)
  6. Sudoeste (SW)
  7. Oeste (W)
  8. Noroeste (NW)

---

## 5. Normalização para Grid 9×9

### 5.1 Conceito

O JSON **não** armazena o grid. Ele é **derivado em memória**.

Pipeline:

```text
JSON (actions + themes + goal)
  → validação
  → normalização
  → grid 9×9
  → render
```

---

### 5.2 Posições Fixas

#### Centro

* `goal` → `(4,4)`

#### Temas (vizinhos do centro)

| Tema | Posição |
| ---- | ------- |
| N    | (3,4)   |
| NE   | (3,5)   |
| E    | (4,5)   |
| SE   | (5,5)   |
| S    | (5,4)   |
| SW   | (5,3)   |
| W    | (4,3)   |
| NW   | (3,3)   |

---

### 5.3 Blocos de Ações (3×3)

Cada tema controla um bloco 3×3 ao redor do centro:

| Tema | Linhas | Colunas |
| ---- | ------ | ------- |
| N    | 0–2    | 3–5     |
| NE   | 0–2    | 6–8     |
| E    | 3–5    | 6–8     |
| SE   | 6–8    | 6–8     |
| S    | 6–8    | 3–5     |
| SW   | 6–8    | 0–2     |
| W    | 3–5    | 0–2     |
| NW   | 0–2    | 0–2     |

Dentro de cada bloco:

* A célula central `(1,1)` **não é usada**
* As 8 ações ocupam as demais posições em ordem row-major

---

## 6. Rota `/harada`

### 6.1 Comportamento

* Sempre carrega `index.json`
* Resolve `latest`
* Carrega `<latest>.json`
* Valida + normaliza
* Renderiza grid 9×9

Sem seleção de versão no MVP.

---

### 6.2 SEO / Indexação

A rota **não deve ser indexada**.

Medidas:

* Meta tags:

  * `noindex, nofollow, noarchive`
* Header HTTP:

  * `X-Robots-Tag: noindex, nofollow, noarchive`
* `robots.txt`:

  ```text
  User-agent: *
  Disallow: /harada
  ```

> Observação: isso é best practice, não garantia absoluta contra scraping.

---

## 7. UI / UX

* Grid 9×9 responsivo
* Diferenciação visual clara:

  * goal (centro)
  * themes (vizinhos)
  * actions (blocos)
* Cada célula:

  * texto até 120 chars
  * tooltip com conteúdo completo
* Modo print-friendly (sem navegação)

---

## 8. Validação

### 8.1 Em Runtime (Loader)

* Schema validation (ex: Zod)
* Validação de tamanho (9×9, 8×8)
* Limite de caracteres

### 8.2 Opcional (Testes)

* Teste puro de normalização:

  * mesma entrada → mesmo grid
  * nenhuma colisão
  * posições corretas

---

## 9. Roadmap de Implementação

### Fase 1 — Base (MVP)

* [ ] Criar estrutura `content/harada`
* [ ] Criar `index.json`
* [ ] Criar primeira versão do Harada
* [ ] Implementar loader da rota `/harada`
* [ ] Validação de schema + tamanho
* [ ] Função pura de normalização `actions → grid`
* [ ] Render do grid existente
* [ ] Meta tags + headers + robots.txt

### Fase 2 — Qualidade

* [ ] Estilos específicos para goal / themes / actions
* [ ] Tooltip acessível
* [ ] Layout print-friendly

### Fase 3 — Evolução (futuro)

* [ ] Seleção de versões via `index.json`
* [ ] Histórico visual
* [ ] Status por célula (todo / doing / done)
* [ ] Export (PDF / imagem)

---

## 10. Critério de Sucesso

* O Harada pode ser alterado **sem tocar no código de UI**
* Um novo Harada é apenas um novo arquivo JSON
* O layout nunca quebra ao longo do tempo
* O histórico fica legível via Git

---

**Status da SPEC:** Estável, pronta para implementação.
