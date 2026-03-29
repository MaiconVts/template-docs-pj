# 10 - Registro de Testes de Software

**Documentos de Origem:** [06 - Projeto de Interface](06-Projeto%20de%20Interface.md) | [09 - Plano de Testes de Software](09-Plano%20de%20Testes%20de%20Software.md)

Este documento centraliza as evidências de execução dos testes planejados e documenta os resultados obtidos. As evidências incluem links para os logs das *pipelines* de automação (CI/CD), relatórios de análise estática de segurança (SAST) e vídeos (*screencasts*) dos testes ponta a ponta (E2E).

---

> **⚠️ Nota de Adaptação do Template**
>
> Os registros de evidência e o relatório apresentados neste documento são baseados em um **sistema fictício de produtividade (Kanban + Pomodoro)** e têm finalidade exclusivamente ilustrativa — demonstram o formato, o nível de detalhe e o tipo de análise esperados em um projeto real.
>
> **Ao utilizar este template, substitua integralmente** os links de evidência, as análises de resultado e as estratégias de correção pelas informações reais do seu projeto.

---

## 1. Evidências dos Casos de Teste

| **Caso de Teste** | **CT01 — Autenticação e Geração de Token** |
| :--- | :--- |
| **Requisito Associado** | RF-001 — O sistema deve permitir o login do usuário e manter a sessão ativa de forma segura. |
| **Registro de Evidência** | `[Link para o log do GitHub Actions / xUnit — Aprovado com Sucesso]` |

| **Caso de Teste** | **CT02 — Integração: Atualização de Status de Entidade** |
| :--- | :--- |
| **Requisito Associado** | RF-002 — A interface deve permitir a atualização do status dos registros da [Entidade Principal]. |
| **Registro de Evidência** | `[Link para o vídeo do teste automatizado UI / Playwright gerado no repositório]` |

| **Caso de Teste** | **CT03 — Exibição de Métricas no Dashboard** |
| :--- | :--- |
| **Requisito Associado** | RF-003 — O sistema deve exibir as métricas definidas no painel gerencial. |
| **Registro de Evidência** | `[Link para o vídeo ou log evidenciando a correspondência entre dados e exibição]` |

| **Caso de Teste** | **CT04 — Proteção contra Injeção e Vazamento (Segurança)** |
| :--- | :--- |
| **Requisito Associado** | RNF-001 — A aplicação deve higienizar todas as entradas de dados e não expor informações sensíveis no tráfego. |
| **Registro de Evidência** | `[Link para o relatório do SonarQube atestando 0 vulnerabilidades de XSS / SQLi]` |

| **Caso de Teste** | **CT05 — Direito ao Esquecimento (Exclusão Definitiva — LGPD)** |
| :--- | :--- |
| **Requisito Associado** | RNF-002 — O sistema deve fornecer exclusão irreversível dos dados pessoais sob demanda. |
| **Registro de Evidência** | `[Link para log do banco de dados atestando a remoção da entidade e dependências (Cascade Delete)]` |

---

## 2. Registro Consolidado de Defeitos (PSP0)

Esta tabela consolida todos os defeitos identificados durante a execução dos testes. Ela alimenta o cálculo do indicador **Phase Yield (PSP2)** e retroalimenta o planejamento de revisões nos próximos ciclos.

| ID | Caso de Teste | Tipo PSP | Fase de Injeção | Fase de Remoção | Tempo de Correção (min) | Descrição Resumida |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| D-001 | CT04 | 60 — Verificação | Codificação | Teste | [X min] | Sanitização de XSS ausente no campo "Título" do formulário. |
| D-002 | CT02 | 50 — Interface | Codificação | Teste | [X min] | Evento de drag-and-drop não tratado para dispositivos touch. |
| *[Adicionar defeitos reais do projeto]* | | | | | | |

**Cálculo do Phase Yield (PSP2):**
> `Phase Yield = (defeitos removidos na fase / defeitos injetados antes do final da fase) × 100%`
> **Meta mínima de referência:** ≥ 70% de yield nas revisões de código antes dos testes automatizados.

| Fase | Defeitos Injetados (antes da fase) | Defeitos Removidos na Fase | Phase Yield |
| :--- | :--- | :--- | :--- |
| Revisão de Código (PSP2) | [X] | [Y] | [Y/X × 100%] |
| Testes Automatizados (CI/CD) | [X − Y] | [Z] | [Z/(X−Y) × 100%] |

> **Referência PSP2 Phase Yield:** HUMPHREY, Watts S. *A Discipline for Software Engineering*. Addison-Wesley, 1995, cap. 10. Pesquise: `"PSP phase yield defect removal efficiency"`.

---

## 3. Relatório de Testes de Software

### 3.1. Resultados Gerais e Pontos Fortes
*(Exemplo ilustrativo — substituir pelo relatório real do projeto)*

A execução da suíte de testes validou de forma robusta o núcleo da aplicação. O principal ponto forte identificado foi a eficiência da **camada de segurança e adequação à LGPD no backend**. Os testes confirmaram que as senhas estão sendo devidamente codificadas (hash) antes da persistência e que o endpoint de exclusão de conta garante a remoção em cascata de todo o histórico do usuário, sem deixar registros órfãos. A geração do token JWT também se mostrou segura, não expondo informações sensíveis no *payload*.

### 3.2. Fragilidades e Falhas Identificadas
*(Exemplo ilustrativo — substituir pelas falhas reais identificadas)*

Apesar do êxito na validação das regras de negócio, os testes ponta a ponta (E2E) revelaram as seguintes fragilidades:

* **Falha de Sanitização Parcial (CT04):** O campo de "Título" do formulário de cadastro permitiu a execução de um script inofensivo no ambiente de desenvolvimento. *Impacto:* Se não corrigido, representaria uma vulnerabilidade de *Cross-Site Scripting* (XSS) no painel do usuário.
* **Problema de Usabilidade Mobile (CT02):** A funcionalidade de arrastar e soltar registros entre colunas apresentou inconsistências em simuladores de dispositivos móveis com tela *touch*, exigindo múltiplas tentativas por parte do usuário.

### 3.3. Estratégias de Correção e Melhorias
*(Exemplo ilustrativo — substituir pelas ações corretivas reais)*

Para a próxima iteração de desenvolvimento, as seguintes ações corretivas foram priorizadas:

1. **Ajuste de Segurança (Backend):** Implementar um *middleware* global de sanitização na API para garantir que qualquer entrada de *string*, independentemente do endpoint, seja submetida a um filtro rigoroso antes de ser persistida no banco de dados.
2. **Otimização de Interface (Front-end):** Substituir ou refatorar a implementação de *drag-and-drop* por uma solução otimizada para eventos de toque (*touch events*), assegurando paridade de experiência entre desktop e dispositivos móveis.
3. **Evolução Contínua (CI/CD):** Incluir na *pipeline* uma etapa de auditoria de pacotes (npm / NuGet) para bloquear automaticamente *deploys* quando dependências com vulnerabilidades conhecidas forem detectadas.

---

> **Retroalimentação PSP3:** Os dados consolidados neste documento (tipos de defeito, fases de injeção, tempos de correção e Phase Yield) devem ser incorporados ao banco de dados histórico pessoal do desenvolvedor ao final do ciclo, conforme o Post-mortem PSP3 (Doc 04, seção 5.8). Esses dados alimentam diretamente a precisão das estimativas e a eficácia das revisões no próximo projeto.
> Pesquise: `"PSP post-mortem process improvement data"` ou `"PSP3 cyclic development feedback loop"`.
