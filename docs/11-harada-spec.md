# 11 — Especificação Completa: Rota `/harada`

> Este documento contém a especificação completa da rota `/harada`.

---

## 1. Objetivo

Implementar a rota **/harada** no site pessoal como um **documento vivo**, baseado em dados, versionável em Git e renderizado de forma determinística a partir de um **JSON semântico** preenchido por humano.

A rota não deve ser indexada por mecanismos de busca e deve priorizar clareza, estabilidade e baixo acoplamento.

---

## 2. Princípios de Design

| Princípio | Descrição |
| --------- | --------- |
| **Data → UI** | Nenhuma lógica de negócio embutida no layout |
| **Contrato explícito** | Decisões estruturais fixas e documentadas |
| **Versionamento nativo** | Git como fonte da verdade |
| **Semântico para humanos** | JSON fácil de preencher e revisar |
| **Determinismo** | Mesma entrada gera sempre o mesmo grid |
| **Baixa dívida técnica** | Decisões travadas cedo |

---

## 3. Estrutura de Conteúdo

### 3.1 Estrutura de Arquivos

```text
app/
  content/
    harada/
      index.json       # Controle de versões
      schema.json      # Documentação do schema (opcional)
      2026-01.json     # Versão específica
```

### 3.2 index.json

```json
{
  "latest": "2026-01",
  "versions": ["2026-01"]
}
```

| Campo | Descrição |
| ----- | --------- |
| `latest` | Versão carregada por default |
| `versions` | Histórico (opcional no MVP) |

---

## 4. Schema do Harada

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
  "actions": [["... x8"], ["... x8"], ...] // 8 arrays de 8 strings
}
```

### 4.2 Regras Estruturais

| Regra | Validação |
| ----- | --------- |
| Themes | `themes.length === 8` |
| Actions | `actions.length === 8` |
| Actions por tema | `actions[i].length === 8` |
| Tamanho de string | Goal, theme, action ≤ 120 caracteres |

### 4.3 Ordem dos Temas (Contrato Fixo)

| Índice | Direção | Posição no Grid |
| ------ | ------- | --------------- |
| 0 | Norte (N) | (3,4) |
| 1 | Nordeste (NE) | (3,5) |
| 2 | Leste (E) | (4,5) |
| 3 | Sudeste (SE) | (5,5) |
| 4 | Sul (S) | (5,4) |
| 5 | Sudoeste (SW) | (5,3) |
| 6 | Oeste (W) | (4,3) |
| 7 | Noroeste (NW) | (3,3) |

---

## 5. Normalização para Grid 9×9

### 5.1 Conceito

O JSON **não** armazena o grid. Ele é **derivado em memória**.

```text
JSON (actions + themes + goal)
  → validação
  → normalização
  → grid 9×9
  → render
```

### 5.2 Posições Fixas

#### Centro (Goal)

- `goal` → posição `(4,4)`

#### Temas (Vizinhos do Centro)

| Tema | Posição |
| ---- | ------- |
| N | (3,4) |
| NE | (3,5) |
| E | (4,5) |
| SE | (5,5) |
| S | (5,4) |
| SW | (5,3) |
| W | (4,3) |
| NW | (3,3) |

### 5.3 Blocos de Ações (3×3)

Cada tema controla um bloco 3×3:

| Tema | Linhas | Colunas |
| ---- | ------ | ------- |
| N | 0–2 | 3–5 |
| NE | 0–2 | 6–8 |
| E | 3–5 | 6–8 |
| SE | 6–8 | 6–8 |
| S | 6–8 | 3–5 |
| SW | 6–8 | 0–2 |
| W | 3–5 | 0–2 |
| NW | 0–2 | 0–2 |

Dentro de cada bloco:

- A célula central `(1,1)` **não é usada**
- As 8 ações ocupam as demais posições em ordem row-major

---

## 6. Comportamento da Rota

### 6.1 Loader

1. Carrega `index.json`
2. Resolve `latest`
3. Carrega `<latest>.json`
4. Valida estrutura
5. Normaliza para grid 9×9
6. Retorna `{ grid, goal, themes, meta, version }`

### 6.2 Headers

```text
X-Robots-Tag: noindex, nofollow, noarchive
```

---

## 7. SEO / Indexação

A rota **não deve ser indexada**.

### Medidas Implementadas

1. **Meta tags:**

   ```html
   <meta name="robots" content="noindex, nofollow, noarchive" />
   ```

2. **Header HTTP:**

   ```text
   X-Robots-Tag: noindex, nofollow, noarchive
   ```

3. **robots.txt:**

   ```text
   User-agent: *
   Disallow: /harada
   ```

> Observação: Isso é best practice, não garantia absoluta contra scraping.

---

## 8. UI / UX

### 8.1 Visual

- Grid 9×9 responsivo
- Diferenciação visual clara:
  - Goal (centro) — destaque especial
  - Themes (vizinhos) — cor/peso diferenciado
  - Actions (blocos) — tiles sutis

### 8.2 Interação

- Cada célula tem texto até 120 chars
- Tooltip com conteúdo completo (hover e foco)
- Acessível via teclado

### 8.3 Print

- Modo print-friendly (sem navegação)

---

## 9. Validação

### 9.1 Em Runtime (Loader)

- Schema validation (Zod recomendado)
- Validação de tamanho (9×9, 8×8)
- Limite de caracteres
- Normalização determinística
- Detecção de colisões antes do render

### 9.2 Opcional (Testes)

- Teste puro de normalização:
  - Mesma entrada → mesmo grid
  - Nenhuma colisão
  - Posições corretas

---

## 10. Roadmap de Implementação

### Fase 1 — Base (MVP)

- [x] Criar estrutura `content/harada`
- [x] Criar `index.json`
- [x] Criar primeira versão do Harada (`2026-01.json`)
- [x] Implementar loader da rota `/harada`
- [x] Validação de schema + tamanho
- [x] Função pura de normalização `actions → grid`
- [x] Render do grid
- [x] Meta tags + headers + robots.txt

### Fase 2 — Qualidade

- [x] Estilos específicos para goal / themes / actions
- [x] Tooltip acessível
- [x] Layout print-friendly

### Fase 3 — Evolução (Futuro)

- [ ] Seleção de versões via UI
- [ ] Histórico visual
- [ ] Status por célula (todo / doing / done)
- [ ] Export (PDF / imagem)

---

## 11. Implementação de Referência

### Loader

```tsx
import type { Route } from "./+types/harada";
import indexData from "~/content/harada/index.json";

export const loader = async () => {
  const { latest } = indexData;
  
  // Import dinâmico da versão
  const haradaData = await import(`~/content/harada/${latest}.json`);
  
  // Validação
  validateHarada(haradaData);
  
  // Normalização
  const grid = normalizeToGrid(haradaData);
  
  return Response.json(
    {
      grid,
      goal: haradaData.goal,
      themes: haradaData.themes,
      meta: haradaData.meta,
      version: latest,
    },
    {
      headers: {
        "X-Robots-Tag": "noindex, nofollow, noarchive",
      },
    }
  );
};

export const meta: Route.MetaFunction = () => [
  { name: "robots", content: "noindex, nofollow, noarchive" },
];
```

### Componente

```tsx
export default function HaradaRoute({ loaderData }: Route.ComponentProps) {
  const { grid, goal, themes, meta } = loaderData;
  
  return (
    <main className="page">
      <div className="reading section stack-lg">
        <header className="stack-sm">
          <h1 className="t-heading">Harada</h1>
          <p className="t-body">
            A structured system. Close elements, clear separation. Paper on paper.
          </p>
          <SiteNav />
        </header>

        <div className="harada-grid" aria-label="Harada grid">
          {/* render do grid */}
        </div>

        <footer className="t-meta">
          Elevation is semantic: it separates planes without implying importance.
        </footer>
      </div>
    </main>
  );
}
```

---

## 12. Critério de Sucesso

| Critério | Descrição |
| -------- | --------- |
| Independência de código | O Harada pode ser alterado **sem tocar no código de UI** |
| Simplicidade de atualização | Um novo Harada é apenas um novo arquivo JSON |
| Estabilidade | O layout nunca quebra ao longo do tempo |
| Versionamento | O histórico fica legível via Git |

---

## 13. Status

**Status da SPEC:** Estável, implementação já iniciada.

Ver progresso em [12-roadmap.md](./12-roadmap.md).
