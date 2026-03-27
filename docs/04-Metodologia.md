# 04 - Metodologia e Processo de Trabalho

**Documento de Origem:** [02 - Especificação do Projeto](02-Especificacao-do-Projeto.md)

Este documento descreve as ferramentas, os ambientes e o processo de trabalho adotados para garantir a transparência, a qualidade do código e a entrega contínua de valor ao longo de todo o ciclo de vida do projeto.

## 1. Abordagem de Desenvolvimento
O projeto adota uma **metodologia iterativa e incremental**. Em lugar de uma única entrega final, o desenvolvimento é estruturado em ciclos com pontos de controle formais (demonstrações), assegurando que a solução Full Stack — interface, regras de negócio e segurança — esteja permanentemente alinhada às expectativas do contratante.

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

## 5. Ciclo de Validação e Entregas (Ritos)
O processo de trabalho segue as seguintes etapas formais:

1. **Kick-off e Setup:** Assinatura dos termos de contexto e aceite, configuração do repositório e criação da arquitetura base da solução.
2. **Ciclos de Desenvolvimento (Sprints / Milestones):** Construção contínua das funcionalidades priorizadas na Especificação do Projeto.
3. **Demonstrações de Progresso:** Reuniões síncronas ou envio de vídeos demonstrando as telas e integrações (API) operando em ambiente de testes.
4. **Ajustes Iterativos:** Correções baseadas no feedback das demonstrações, realizadas antes do encerramento do módulo correspondente.
5. **Homologação Final (UAT):** O sistema é congelado para que o contratante execute os testes de aceite e responda às métricas de aceitação definidas.
