# 04 - Metodologia e Processo de Trabalho

**Documento de Origem:** [02 - Especificação do Projeto](02-Especificacao-do-Projeto.md)

Este documento descreve as ferramentas, os ambientes e o processo de trabalho adotados para garantir a transparência, a qualidade do código e a entrega contínua de valor ao longo de todo o ciclo de vida do projeto.

## 1. Abordagem de Desenvolvimento
O projeto adota uma **metodologia iterativa e incremental**. Em lugar de uma única entrega final, o desenvolvimento é estruturado em ciclos com pontos de controle formais (demonstrações), assegurando que a solução Full Stack — interface, regras de negócio e segurança — esteja permanentemente alinhada às expectativas do contratante.

No plano individual, cada ciclo de desenvolvimento segue as práticas do **Personal Software Process (PSP3)**, em que cada iteração produz um incremento funcional e, ao final, retroalimenta o histórico de métricas pessoais do desenvolvedor (tempo, tamanho, defeitos). Isso garante que cada nova estimativa seja baseada em dados reais, e não em suposições.

> **Referência PSP3:** HUMPHREY, Watts S. *A Discipline for Software Engineering*. Addison-Wesley, 1995, cap. 14.
> Pesquise: `"PSP3 cyclic process Humphrey"` ou acesse [sei.cmu.edu/education-outreach/courses/psp.cfm](https://sei.cmu.edu/education-outreach/courses/psp.cfm).

## 2. Papéis e Interações
Embora a execução técnica seja centralizada na figura do desenvolvedor, o sucesso do projeto depende da participação ativa de ambas as partes:

* **Desenvolvedor (Líder Técnico):** Responsável pela arquitetura da solução, design de interface (UI/UX), codificação (Front-end e Back-end), automação de testes (funcionais e de segurança cibernética) e versionamento do código.
* **Cliente (Validador):** Responsável por fornecer as regras de negócio, aprovar as interfaces propostas, participar das demonstrações iterativas e realizar a homologação final da solução.

## 3. Ambientes e Ferramentas de Trabalho
As ferramentas relacionadas abaixo compõem a stack de gestão e desenvolvimento, cobrindo desde a prototipação até a entrega do código com validação funcional e de segurança.

| Propósito | Ferramenta / Tecnologia | Observação |
| :--- | :--- | :--- |
| **Gestão e Tarefas** | GitHub Projects / Issues | Board Kanban compartilhado no repositório do projeto |
| **Design e Prototipação** | Figma / Rive / Spline | Links dos wireframes detalhados no Doc 06 |
| **Codificação (IDE)** | Visual Studio / VS Code | Ambiente local de desenvolvimento |
| **Banco de Dados** | MySQL / MongoDB | Ambiente de modelagem local ou cloud |
| **Qualidade e Testes (QA)** | xUnit / Jest / Playwright | Automação de testes unitários, de integração e E2E |
| **Segurança e LGPD (SAST)** | SonarQube / Snyk | Análise estática contínua de vulnerabilidades |
| **Comunicação Rápida** | WhatsApp / Telegram | Alinhamentos pontuais e urgentes |
| **Reuniões e Demos** | Google Meet / Teams | Reuniões de checkpoint e apresentações ao cliente |

## 4. Controle de Versão e Gestão de Código
A proteção do código-fonte e do histórico do projeto é realizada via **Git**, hospedado no **GitHub**. O fluxo de trabalho garante ao contratante o acesso permanente à versão mais estável e segura da solução.

### 4.1. Estratégia de Branches
* `main`: Contém a versão estável, testada e homologada do software (Produção).
* `dev`: Ambiente de integração contínua, onde as novas funcionalidades são consolidadas e validadas.
* `feature/nome-da-feature`: Ramificações temporárias para o desenvolvimento isolado de cada requisito.

### 4.2. Gestão de Demandas (Issues)
Toda alteração, correção ou nova funcionalidade deve ser registrada via **GitHub Issues**, utilizando as seguintes etiquetas (labels):
* `bug`: Falha identificada em funcionalidade já aprovada.
* `enhancement`: Melhoria em funcionalidade existente.
* `feature`: Nova funcionalidade solicitada pelo contratante.
* `security`: Ajustes relacionados a vulnerabilidades ou adequação à LGPD.

### 4.3. Integração Contínua e Automação (CI/CD)
Para garantir que novas implementações funcionem corretamente e não introduzam brechas de segurança, o repositório utiliza **GitHub Actions**. Toda abertura de *Pull Request* para as branches `dev` ou `main` dispara automaticamente uma esteira que executa:

1. **Validação Funcional:** Executa a suíte de testes automatizados (unitários e de integração) para garantir que as regras de negócio, as rotas e os CRUDs do sistema funcionam conforme especificado, sem regressão de funcionalidades existentes.
2. **Validação de Segurança (SAST):** Executa verificações de segurança em busca de vulnerabilidades clássicas (OWASP Top 10, injeção de SQL, vazamento de chaves e dados sensíveis).

O código somente é integrado (*merged*) após aprovação em 100% dessas validações automatizadas.

## 5. Processo Pessoal de Software (PSP)

O desenvolvimento deste projeto incorpora práticas do **Personal Software Process (PSP)**, método criado por Watts S. Humphrey no SEI/CMU. O PSP estrutura o trabalho do desenvolvedor individual em níveis de maturidade progressivos (PSP0 → PSP3), promovendo autodisciplina, medição contínua e melhoria da qualidade e da previsibilidade das entregas.

> **Referência geral PSP:** HUMPHREY, Watts S. *A Discipline for Software Engineering*. Addison-Wesley, 1995. ISBN 978-0201546101.
> Pesquise: `"PSP Humphrey discipline software engineering"` ou acesse [sei.cmu.edu/education-outreach/courses/psp.cfm](https://sei.cmu.edu/education-outreach/courses/psp.cfm).

### 5.1. Registro de Tempo (PSP0)
Todo tempo de trabalho é registrado por fase, permitindo calcular a produtividade histórica do desenvolvedor (LOC/hora) e alimentar estimativas futuras via método PROBE (seção 5.5).

| Campo | Descrição |
| :--- | :--- |
| **Data** | Data da sessão de trabalho |
| **Fase** | Planejamento / Design / Codificação / Revisão / Teste / Post-mortem |
| **Início** | Horário de início |
| **Fim** | Horário de encerramento |
| **Interrupções (min)** | Tempo de interrupção dentro da sessão |
| **Tempo Líquido (min)** | (Fim − Início) − Interrupções |
| **Observação** | Motivo de interrupção ou nota relevante |

> **Referência PSP0:** Humphrey, cap. 3 — "Time Recording". Pesquise: `"PSP Time Recording Log template"`.

### 5.2. Registro de Defeitos (PSP0 / PSP0.1)
Todo defeito identificado — em qualquer fase do processo — é registrado imediatamente. O histórico alimenta a análise de Fase de Injeção × Fase de Remoção, base do indicador **Phase Yield** (PSP2, seção 5.7).

| Campo | Descrição |
| :--- | :--- |
| **ID** | Identificador sequencial |
| **Data** | Data da descoberta |
| **Tipo** | Categoria do defeito (ver Taxonomia abaixo) |
| **Fase de Injeção** | Fase em que o defeito foi introduzido |
| **Fase de Remoção** | Fase em que o defeito foi identificado e corrigido |
| **Tempo de Correção (min)** | Tempo gasto para corrigir |
| **Descrição** | Descrição objetiva do defeito |

**Taxonomia de Tipos de Defeito (PSP — Padrão SEI):**

| Tipo | Categoria | Exemplos Práticos |
| :--- | :--- | :--- |
| **10** | Documentação | Comentários incorretos, README desatualizado |
| **20** | Sintaxe | Erro de compilação, vírgula ausente, tipo inválido |
| **30** | Build / Empacotamento | Dependência ausente, erro de configuração de projeto |
| **40** | Atribuição | Variável não inicializada, valor incorreto atribuído |
| **50** | Interface | Parâmetro em ordem errada, contrato de API violado |
| **60** | Verificação | Condição de guarda ausente, null não tratado |
| **70** | Dados | Estrutura de dados incorreta, formato inválido |
| **80** | Função | Lógica de negócio errada, algoritmo incorreto |
| **90** | Sistema | Falha de integração, concorrência, timing |
| **100** | Ambiente | Erro de CI/CD, variável de ambiente ausente |

> **Referência PSP0:** Humphrey, cap. 4 — "Defect Recording". Pesquise: `"PSP Defect Type Standard SEI"` ou `"Humphrey defect taxonomy types 10 to 100"`.

### 5.3. Padrão de Codificação (PSP0.1)
O padrão de codificação é estabelecido **antes** do início de qualquer ciclo de desenvolvimento e é referenciado obrigatoriamente em toda revisão de código (PSP2, seção 5.7). Seu objetivo principal é eliminar defeitos de Tipo 20 (Sintaxe) e Tipo 80 (Função) ainda na fase de codificação.

O padrão completo — regras de nomenclatura, tamanho máximo de método, tratamento de exceções e CSS/SCSS — está documentado no **Doc 07 — Arquitetura da Solução, seção 6**.

> **Referência PSP0.1:** Humphrey, cap. 5 — "Coding Standards". Pesquise: `"PSP coding standard checklist PSP0.1"`.

### 5.4. Medição de Tamanho — LOC (PSP0.1)
O tamanho do software é medido em **Linhas de Código Lógicas (LOC)** — declarações executáveis, excluindo linhas em branco e comentários. A medição é realizada ao final de cada fase de codificação e registrada para alimentar o histórico de produtividade.

> Exemplo: um método com 15 declarações executáveis tem tamanho = 15 LOC.

A contagem segue o padrão definido no **Doc 07 — Arquitetura da Solução, seção 7.1**.

> **Referência PSP0.1:** Humphrey, cap. 5 — "Size Measurement". Pesquise: `"PSP LOC counting standard logical lines"`.

### 5.5. Estimativa por Proxy — Método PROBE (PSP1)
O método **PROBE (PROxy-Based Estimating)** utiliza o histórico de produtividade (LOC/hora registrado via PSP0) para gerar estimativas paramétricas de tamanho e esforço para novas funcionalidades. Cada requisito é decomposto em objetos (métodos, classes, endpoints) classificados por complexidade relativa (P/S/M/G/XG — *Proxy Size*).

O PROBE é aplicado durante o planejamento de cada fase do cronograma (Doc 05), garantindo que as estimativas sejam baseadas em dados históricos reais.

> **Referência PSP1:** Humphrey, cap. 6 — "Size Estimating" e cap. 7 — "The PROBE Estimating Method". Pesquise: `"PROBE method PSP proxy-based estimating"` ou `"PSP1 size estimation template"`.

### 5.6. Planejamento de Tarefas (PSP1.1)
Com a estimativa de tamanho (LOC) obtida via PROBE, o desenvolvedor converte LOC em horas utilizando a taxa de produtividade histórica. As tarefas são distribuídas no calendário com datas previstas de início e fim, gerando um plano de compromisso pessoal alinhado ao cronograma externo (Doc 05).

> **Referência PSP1.1:** Humphrey, cap. 8 — "Schedule Planning". Pesquise: `"PSP task planning template PSP1.1"`.

### 5.7. Revisão de Design e de Código (PSP2) — Etapa Bloqueante
As revisões de design e de código são etapas **obrigatórias e bloqueantes**: nenhum código entra em Pull Request sem revisão pessoal documentada. O objetivo é remover defeitos antes da fase de testes automatizados (CI/CD), que funcionam como rede de segurança secundária — não como filtro primário.

**Indicador Phase Yield:** `(defeitos removidos na fase / defeitos injetados antes do final da fase) × 100%`. Meta mínima: **≥ 70%** de yield na revisão antes dos testes.

**Checklist de Revisão de Design:**
- [ ] O design resolve o requisito sem lógica desnecessária?
- [ ] As dependências entre módulos estão minimizadas (baixo acoplamento)?
- [ ] As interfaces (contratos de API, assinaturas de métodos) estão claras e documentadas?
- [ ] Padrões de projeto aplicáveis foram considerados (Repository, Factory, DTO)?
- [ ] O design respeita os princípios SOLID? (Pesquise: `"SOLID principles Robert C. Martin"`)

**Checklist de Revisão de Código:**
- [ ] O código segue o Padrão de Codificação (Doc 07, seção 6)?
- [ ] Variáveis e parâmetros têm nomes descritivos?
- [ ] Todos os caminhos de erro estão tratados (null, exceções)?
- [ ] Não há lógica duplicada que deveria ser abstraída?
- [ ] Os testes cobrem os caminhos críticos?
- [ ] Nenhum dado sensível (chaves, senhas, tokens) está exposto no código?

> **Referência PSP2:** Humphrey, cap. 10 — "Code Reviews" e cap. 11 — "Design Reviews". Pesquise: `"PSP code review checklist"` ou `"PSP design review checklist"`.

### 5.8. Ciclo Iterativo com Retroalimentação (PSP3)
O **PSP3** estrutura o desenvolvimento em ciclos curtos e autossuficientes. Ao final de cada ciclo, o desenvolvedor executa um **Post-mortem**: registra o que planejou versus o que realizou (tempo, tamanho, defeitos) e atualiza seu banco de dados histórico pessoal. Essa retroalimentação melhora progressivamente a precisão das estimativas ao longo do projeto.

Fluxo de cada ciclo PSP3:
`Planejamento → Design → Design Review → Codificação → Code Review → Compilação → Teste → Post-mortem`

> **Referência PSP3:** Humphrey, cap. 14 — "The Cyclic Personal Process". Pesquise: `"PSP3 cyclic development post-mortem"`.

---

## 6. Ciclo de Validação e Entregas (Ritos)
O processo de trabalho segue as seguintes etapas formais:

1. **Kick-off e Setup:** Assinatura dos termos de contexto e aceite, configuração do repositório e criação da arquitetura base da solução.
2. **Ciclos de Desenvolvimento (Sprints / Milestones):** Construção contínua das funcionalidades priorizadas na Especificação do Projeto.
3. **Demonstrações de Progresso:** Reuniões síncronas ou envio de vídeos demonstrando as telas e integrações (API) operando em ambiente de testes.
4. **Ajustes Iterativos:** Correções baseadas no feedback das demonstrações, realizadas antes do encerramento do módulo correspondente.
5. **Homologação Final (UAT):** O sistema é congelado para que o contratante execute os testes de aceite e responda às métricas de aceitação definidas.
