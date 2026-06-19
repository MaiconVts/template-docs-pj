# 04 - Metodologia e Processo de Trabalho

**Documento de Origem:** [02 - Especificação do Projeto](02-Especificacao-do-Projeto.md)

Este documento descreve as ferramentas, os ambientes e o processo de trabalho adotados para
garantir a transparência, a qualidade do código e a entrega contínua de valor ao longo de
todo o ciclo de vida do projeto.

---

## 1. Abordagem de Desenvolvimento

O projeto adota uma **metodologia iterativa e incremental**, estruturada em ciclos com
pontos de controle formais, assegurando que a solução esteja permanentemente alinhada às
expectativas do contratante.

No plano individual, cada ciclo segue as práticas do **Personal Software Process (PSP3)**,
garantindo que estimativas sejam baseadas em dados reais de produtividade — não em
suposições.

> **Referência PSP3:** HUMPHREY, Watts S. *A Discipline for Software Engineering*.
> Addison-Wesley, 1995, cap. 14.

---

## 2. Ferramentas de Trabalho

| Propósito | Ferramenta / Tecnologia | Observação |
|:---|:---|:---|
| **Gestão e Tarefas** | GitHub Projects / Issues | Board Kanban no repositório do projeto |
| **Design e Prototipação** | [Ferramenta] | Wireframes detalhados no Doc 06 |
| **Codificação (IDE)** | [IDE Principal] | Ambiente local de desenvolvimento |
| **Backend / Framework** | [Linguagem / Framework] | — |
| **Banco de Dados** | [SGBD] | — |
| **Qualidade e Testes (QA)** | [Framework de Testes] | Testes unitários e de integração |
| **Segurança (SAST)** | SonarQube / Snyk | Análise estática de vulnerabilidades |
| **CI/CD** | GitHub Actions | Pipeline automatizado de testes e deploy |
| **Hospedagem** | [Plataforma] | Ambiente de produção |
| **Comunicação** | [Ferramenta] | Alinhamentos e reuniões com o cliente |

---

## 3. Controle de Versão

### 3.1. Estratégia de Branches

| Branch | Finalidade |
|:---|:---|
| `main` | Versão estável e homologada (Produção). |
| `dev` | Integração contínua de novas funcionalidades. *(Descreva quando será criada)* |
| `feature/nome-da-feature` | Desenvolvimento isolado de cada requisito; mesclada via Pull Request. |
| `hotfix/descricao` | Correção urgente em produção; mesclada em `main` e `dev`. |

### 3.2. Gestão de Demandas (Issues)

| Label | Uso |
|:---|:---|
| `bug` | Falha em funcionalidade já aprovada |
| `enhancement` | Melhoria em funcionalidade existente |
| `feature` | Nova funcionalidade solicitada |
| `security` | Ajustes de vulnerabilidade ou conformidade |

### 3.3. CI/CD (GitHub Actions)

Toda abertura de *Pull Request* para `dev` ou `main` dispara automaticamente:

1. **Validação Funcional:** suíte de testes automatizados — garante funcionamento sem regressão.
2. **Validação de Segurança (SAST):** verificações OWASP Top 10, injeção e vazamento de dados.

Integração liberada somente após **100%** de aprovação.

---

## 4. Processo Pessoal de Software (PSP)

O desenvolvimento incorpora práticas do **PSP** (Humphrey, SEI/CMU), estruturado nos
seguintes pilares aplicados a este projeto:

| Prática | Descrição |
|:---|:---|
| **Registro de Tempo (PSP0)** | Todo tempo de trabalho é registrado por fase (Planejamento / Design / Codificação / Revisão / Teste / Post-mortem). |
| **Registro de Defeitos (PSP0)** | Defeitos registrados imediatamente com tipo, fase de injeção e fase de remoção. Taxonomia definida no Doc 02. |
| **Medição de Tamanho — LOC (PSP0.1)** | Tamanho medido em linhas de código lógicas ao final de cada ciclo. Padrão de contagem no Doc 07. |
| **Estimativa PROBE (PSP1)** | LOC histórico convertido em esforço (horas) para planejamento de novas funcionalidades. Base do Doc 05. |
| **Revisão de Design e Código (PSP2)** | Etapa bloqueante antes de qualquer Pull Request. Checklists abaixo. |
| **Post-mortem por ciclo (PSP3)** | Planejado × Realizado registrado ao final de cada iteração para retroalimentar estimativas. |

> **Referência:** HUMPHREY, Watts S. *A Discipline for Software Engineering*. Addison-Wesley, 1995.

### 4.1. Revisão de Design — Checklist (Bloqueante)

- [ ] O design resolve o requisito sem lógica desnecessária?
- [ ] Dependências entre módulos minimizadas (baixo acoplamento)?
- [ ] Interfaces e contratos claros e documentados?
- [ ] Padrões de projeto aplicáveis considerados?
- [ ] Princípios SOLID respeitados?

### 4.2. Revisão de Código — Checklist (Bloqueante)

- [ ] Segue o Padrão de Codificação (Doc 07)?
- [ ] Nomes de variáveis e parâmetros descritivos?
- [ ] Todos os caminhos de erro tratados?
- [ ] Sem lógica duplicada que deveria ser abstraída?
- [ ] Testes cobrem os caminhos críticos?
- [ ] Nenhum dado sensível exposto no código?

---

## 5. Ciclo de Validação e Entregas

| Etapa | Descrição |
|:---|:---|
| **Kick-off e Setup** | Assinatura dos termos, configuração do repositório e arquitetura base. |
| **Ciclos de Desenvolvimento** | Construção contínua das funcionalidades priorizadas no Doc 02. |
| **Demonstrações de Progresso** | Reuniões ou vídeos demonstrando incrementos funcionais em ambiente de testes. |
| **Ajustes Iterativos** | Correções baseadas no feedback, antes do encerramento do módulo. |
| **Homologação Final (UAT)** | Sistema congelado para testes de aceite pelo contratante. |
