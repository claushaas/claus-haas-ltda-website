# Instruções para o GitHub Copilot

> Este arquivo orienta o Copilot e toda a equipe sobre padrões, práticas e decisões técnicas do projeto. Mantenha-o atualizado conforme o projeto evoluir. Se precisar propor mudanças, abra um PR explicando o motivo da alteração.

Estas diretrizes garantem consistência, qualidade e segurança no desenvolvimento mobile com Expo, React Native, React 19, TypeScript, Supabase e I18n. Siga sempre as recomendações abaixo ao gerar código ou revisar PRs.

Você está ajudando um desenvolvedor a criar um site de sua empresa prestadora de serviços de desenvolvimento e automação.

Seu raciocínio deve ser minucioso, então não há problema se for muito longo. Você pode pensar passo a passo antes e depois de cada ação que decidir tomar.

Você DEVE iterar e continuar até que o problema esteja resolvido.

Somente finalize sua resposta quando tiver certeza de que o problema foi resolvido. Passe pelo problema passo a passo e verifique se suas alterações estão corretas. NUNCA termine sua resposta sem ter resolvido o problema, e quando disser que vai fazer uma chamada de ferramenta, certifique-se de que REALMENTE a fez, em vez de encerrar sua vez.

Tire seu tempo e pense em cada passo – lembre-se de verificar sua solução rigorosamente e fique atento a casos extremos, especialmente com as alterações que você fez. Sua solução deve estar perfeita. Caso contrário, continue trabalhando nela. Ao final, você deve testar seu código rigorosamente usando as ferramentas fornecidas, e fazer isso várias vezes, para cobrir todos os casos de borda. Se não estiver robusto, itere mais até estar perfeito. Deixar de testar o código suficientemente é o PRINCIPAL motivo de falha nesse tipo de tarefa; certifique-se de lidar com todos os casos de borda, e rode os testes existentes se estiverem disponíveis.

Você DEVE planejar extensivamente antes de cada chamada de função, e refletir profundamente sobre os resultados das chamadas anteriores. NÃO resolva todo o processo apenas fazendo chamadas de função, pois isso pode prejudicar sua capacidade de resolver o problema com clareza.

## Fluxo de Trabalho

### Estratégia Geral de Resolução de Problemas
1. Entenda profundamente o problema. Leia cuidadosamente o issue e pense criticamente sobre o que é necessário.
2. Investigue o código-fonte. Explore os arquivos relevantes, procure funções-chave e colete contexto.
3. Desenvolva um plano claro e passo a passo. Divida a correção em etapas pequenas e gerenciáveis.
4. Implemente a correção de forma incremental. Faça alterações pequenas e testáveis no código.
5. Depure conforme necessário. Use técnicas de depuração para isolar e resolver problemas.
6. Teste com frequência. Rode testes após cada alteração para verificar a correção.
7. Prossiga até que a causa raiz esteja resolvida e todos os testes passem.
8. Reflita e valide de forma abrangente. Após passar nos testes, pense na intenção original, escreva testes adicionais para garantir a correção e lembre-se de que há testes ocultos que também devem passar para a solução ser completa.

> Consulte as seções detalhadas abaixo para mais informações sobre cada etapa.

### 1. Entenda Profundamente o Problema
Leia cuidadosamente o issue e pense bem antes de começar a codar.

### 2. Investigação do Código
- Explore os arquivos e diretórios relevantes.
- Busque por funções, classes ou variáveis relacionadas ao problema.
- Leia e entenda os trechos de código relevantes.
- Identifique a causa raiz do problema.
- Atualize sua compreensão continuamente à medida que coleta mais contexto.

### 3. Desenvolva um Plano Detalhado
- Esboce uma sequência de etapas simples e verificáveis para resolver o problema.
- Divida a correção em alterações pequenas e incrementais.

### 4. Fazendo Alterações no Código
- Antes de editar, leia sempre o conteúdo relevante do arquivo para garantir o contexto completo.
- Se um patch não for aplicado corretamente, tente reaplicá-lo.
- Faça alterações pequenas, testáveis e incrementais que façam sentido com base na investigação e no plano.

### 5. Depuração
- Faça alterações apenas se tiver alta confiança de que podem resolver o problema.
- Ao depurar, tente determinar a causa raiz em vez de corrigir apenas os sintomas.
- Depure o quanto for necessário para identificar a causa e encontrar a correção.
- Use logs ou código temporário para inspecionar o estado do programa, incluindo mensagens descritivas ou erros.
- Para testar hipóteses, adicione testes ou funções auxiliares.
- Reavalie suas suposições caso ocorra comportamento inesperado.

### 6. Testes
- Rode testes frequentemente.
- Após cada alteração, verifique a correção executando testes relevantes.
- Se falharem, analise os erros e revise sua correção.
- Escreva testes adicionais se necessário para cobrir comportamentos ou casos extremos.
- Certifique-se de que todos os testes passem antes de finalizar.
- Para rodar os testes: `npm test` ou `yarn test`.
- Os testes devem ficar em arquivos `.test.ts` ou `.test.tsx` próximos ao código testado ou em uma pasta `__tests__`.
- Exemplo de teste:
```ts
import { soma } from '@/utils/soma';
test('soma dois números', () => {
  expect(soma(2, 3)).toBe(5);
});
```

### 7. Verificação Final
- Confirme que a causa raiz foi corrigida.
- Revise sua solução para garantir correção lógica e robustez.
- Prossiga até ter extrema confiança de que a correção está completa e todos os testes passam.

### 8. Reflexão Final e Testes Adicionais
- Reflita cuidadosamente sobre a intenção original do usuário e o enunciado do problema.
- Pense sobre casos extremos ou cenários que podem não estar cobertos por testes existentes.
- Escreva testes adicionais para validar completamente a correção.
- Rode esses novos testes e certifique-se de que todos passem.
- Esteja ciente de que existem testes ocultos adicionais que também devem passar para a solução ser bem-sucedida.
- Não assuma que a tarefa está completa apenas porque os testes visíveis passaram; continue refinando até ter confiança de que a correção é robusta e abrangente.

## Estilo e Estrutura de Código
- Escreva código TypeScript conciso e tecnicamente preciso com exemplos claros.
- Use Zod para validação de schemas e inferência de tipos.
- Use Zustand para gerenciamento de estado.
- Use padrões de programação funcional e declarativa; evite usar classes.
- Priorize iteração e modularidade, evitando duplicação de código.
- Use nomes de variáveis descritivos com verbos auxiliares (ex: `isLoading`, `hasError`).
- Estrutura de arquivos: exporte componentes, componentes filhos, utilitários, conteúdo estático, definições de tipos.
- Siga a [documentação oficial do React Router 7](https://reactrouter.com/home) para configuração e setup de projetos.
- **Prefira exportações nomeadas**

## Stack e Tecnologias

- **TypeScript** (configuração estrita)
- **Estilo**: Biome para lint/format, estilos em arquivos TypeScript

- **React 19**
  - Utilize o novo hook `use` para gerenciamento de dados assíncronos e carregamento de recursos, sempre que aplicável.
  - Prefira componentes funcionais e hooks. Evite classes.
  - Use Suspense para carregamento de dados e fallback de UI, quando apropriado.
  - Aproveite melhorias de performance e renderização automática do React 19.
  - **Referências (refs):** Prefira passar refs como props diretamente para componentes filhos, ao invés de usar `forwardRef`. Veja exemplos e recomendações na [documentação oficial do React 19](https://react.dev/reference/react/forwardRef#alternatives-to-forwardref).
  - **useTransition:** Utilize o hook `useTransition` para lidar com atualizações de UI que podem ser adiadas, melhorando a experiência do usuário em operações assíncronas ou pesadas. Veja exemplos na [documentação oficial](https://react.dev/reference/react/useTransition).
  - **Actions em forms:** Aproveite o novo suporte a actions em formulários, permitindo passar funções diretamente para a prop `action` em `<form>`, facilitando o gerenciamento de submissão e side effects. Veja detalhes no [post oficial do React 19](https://react.dev/blog/2024/12/05/react-19#actions-for-forms).
  - Considere outras novidades do React 19, como melhorias em contextos, eventos e suporte aprimorado a Server Components (quando aplicável).

## Sintaxe e Formatação

- Prefira o uso de arrow functions (`const minhaFuncao = () => {}`) para componentes e funções, exceto quando houver motivo técnico claro para usar `function` (ex: hoisting, contexto de `this` ou funções puras que se beneficiam de hoisting).
- Evite chaves desnecessárias em condicionais; use sintaxe concisa para instruções simples.
- Use JSX declarativo.
- Use Recursos do ES6+: Aproveite os recursos modernos como funções arrow, destructuring e template literals para escrever código conciso.

## Boas Práticas

- Use imports absolutos com `~/` conforme configurado no `tsconfig.json`.
- Prefira componentes funcionais e hooks.
- Para textos, utilize o hook `useTranslation` do `react-i18next` e as chaves dos arquivos de tradução.
- Persistência de idioma deve ser feita via cookie `i18next`.
- Não exponha chaves do Supabase no código-fonte; use variáveis de ambiente.
- Siga o padrão de navegação do `react-router`.
- Use Biome para lint e formatação antes de commitar. Para rodar: `npm run biome:check`

## Convenções
- Componentes devem ser nomeados em PascalCase.
- Funções utilitárias em camelCase.
- Evite lógica de negócio em componentes de UI.
- Prefira hooks customizados para lógica compartilhada.
- Comente o código apenas quando necessário para explicar decisões não óbvias.
- Documente componentes e funções utilitárias exportadas.

## Otimização de Desempenho
- Minimize o uso de `useState` e `useEffect`; priorize as funcionalidades do react 19, como o novo hook `use`.
- Use `AppLoading` e `SplashScreen` do Expo para otimizar a experiência de inicialização do app.
- Evite re-renderizações desnecessárias usando os hooks e metodologias mais modernas do react 19.

## Tratamento de Erros e Validações
- Priorize o tratamento de erros e casos extremos.
- Use retornos antecipados para condições de erro, evitando estruturas profundamente aninhadas.
- Trate erros e estados inválidos logo no início das funções.
- Utilize cláusulas de guarda (guard clauses) para validar pré-condições e estados inválidos.
- Implemente logs de erro adequados e mensagens amigáveis ao usuário.
- Use tipos ou fábricas de erros personalizados para um tratamento de erros consistente.

# Padrões e Exemplos por Biblioteca

## @radix-ui/colors & tailwindcss-radix-colors
- Utilize tokens de cor do Radix para garantir acessibilidade e consistência visual.
- Prefira importar apenas os tokens necessários para evitar bundle grande.
- Integre com Tailwind usando o plugin `tailwindcss-radix-colors`.
- Exemplo de uso em Tailwind:
  ```ts
  <div className="bg-radix-slate-1 text-radix-slate-12">...</div>
  ```
- Para temas customizados, configure no `tailwind.config.ts`.

## motion
- Use a biblioteca `motion` para animações declarativas e acessíveis.
- Prefira animações baseadas em estado e transições do React 19.
- Exemplo:
  ```tsx
  import { motion } from 'motion';
  <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} />
  ```
- Combine com Suspense para animações de carregamento.

## i18next, i18next-browser-languagedetector, i18next-http-backend, react-i18next
- Centralize textos em arquivos de tradução em `public/locales/{lang}.json`.
- Use o hook `useTranslation` para acessar textos:
  ```tsx
  import { useTranslation } from 'react-i18next';
  const { t } = useTranslation();
  <span>{t('chave.exemplo')}</span>
  ```
- Persistência de idioma via cookie `i18next`.
- Configure detecção automática de idioma no setup do i18next.
- Use fallback para `en`.

## react-router
- Siga a documentação oficial para configuração de rotas.
- Prefira rotas declarativas e navegação por hooks.
- Exemplo:
  ```tsx
  import { useNavigate } from 'react-router';
  const navigate = useNavigate();
  <button onClick={() => navigate('/rota')}>Ir</button>
  ```

## TailwindCSS
- Use utilitários do Tailwind para estilização rápida e consistente.
- Prefira classes utilitárias e evite CSS customizado quando possível.
- Organize estilos globais em `app/app.css`.
- Integre com Radix e motion para temas e animações.

## Biome
- Use Biome para lint e formatação: `npm run biome:check`.
- Corrija todos os avisos antes de commitar.
- Configure regras adicionais em `biome.json` se necessário.

## Vite
- Use scripts do Vite para desenvolvimento e build.
- Hot reload já habilitado por padrão.
- Plugins recomendados: `vite-plugin-svgr`, `vite-tsconfig-paths`, `@tailwindcss/vite`.
- Exemplo de importação de SVG:
  ```tsx
  import { ReactComponent as Logo } from '~/assets/images/face.svg';
  <Logo />
  ```

## Cloudflare Workers & Wrangler
- Use `wrangler` para deploy e testes locais de workers.
- Scripts úteis:
  - `npm run deploy` para publicar
  - `npm run cf-typegen` para gerar tipos
- Configure variáveis de ambiente sensíveis no painel do Cloudflare, nunca no código-fonte.

## Observações sobre Zustand e Zod
- **Zod** e **Zustand** são recomendados para validação e estado, mas não estão instalados. Considere adicioná-los para seguir as melhores práticas descritas acima.
- Exemplo de uso do Zod:
  ```ts
  import { z } from 'zod';
  const schema = z.object({ email: z.string().email() });
  ```
- Exemplo de uso do Zustand:
  ```ts
  import { create } from 'zustand';
  export const useStore = create(set => ({ count: 0, inc: () => set(state => ({ count: state.count + 1 })) }));
  ```

# Referências
- [Radix Colors](https://www.radix-ui.com/colors)
- [motion](https://motion.dev/)
- [i18next](https://www.i18next.com/)
- [react-i18next](https://react.i18next.com/)
- [React Router 7](https://reactrouter.com/home)
- [TailwindCSS](https://tailwindcss.com/)
- [Biome](https://biomejs.dev/)
- [Vite](https://vitejs.dev/)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)