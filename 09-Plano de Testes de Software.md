# 09 - Plano de Testes de Software

**Documentos de Origem:** [02 - Especificação do Projeto](02-Especificacao-do-Projeto.md) | [06 - Projeto de Interface](06-Projeto%20de%20Interface.md)

Este documento apresenta a estratégia de validação da aplicação. O projeto adota uma abordagem de **Testes Automatizados** integrados à esteira de desenvolvimento, cobrindo testes unitários e de integração para as regras de negócio, além de validações de segurança cibernética para garantir a conformidade com as normas da **LGPD (Lei Geral de Proteção de Dados)**.

---

> **⚠️ Nota de Adaptação do Template**
>
> Os casos de teste apresentados nesta seção são baseados em um **sistema fictício de produtividade (Kanban + Pomodoro)** e têm finalidade exclusivamente ilustrativa — demonstram a estrutura, o nível de detalhamento e os tipos de validação esperados em um projeto real.
>
> **Ao utilizar este template, substitua integralmente** os casos de teste, os requisitos associados, os passos de automação e os critérios de êxito pelas funcionalidades reais do seu projeto, conforme definido no documento [02 - Especificação do Projeto](02-Especificacao-do-Projeto.md).

---

## 1. Cenários de Teste Funcional e de Segurança

Os casos de teste abaixo exemplificam as validações executadas para garantir tanto a operação correta do sistema quanto a proteção dos dados dos usuários.

| **Caso de Teste** | **CT01 — Autenticação e Geração de Token** |
| :--- | :--- |
| **Requisito Associado** | RF-001 — O sistema deve permitir o login do usuário e manter a sessão ativa de forma segura. |
| **Objetivo do Teste** | Verificar, via automação (ex: xUnit para backend C#/.NET), se o endpoint de login valida as credenciais corretamente e retorna um token de acesso válido. |
| **Passos (Automação)** | 1. O script envia uma requisição POST com credenciais válidas.<br>2. Valida se o status HTTP retornado é `200 OK`.<br>3. Inspeciona o payload da resposta em busca do Token JWT. |
| **Critério de Êxito** | O token é gerado com sucesso, possui tempo de expiração configurado e permite o acesso às rotas privadas do sistema. |

| **Caso de Teste** | **CT02 — Integração: Atualização de Status de Entidade** |
| :--- | :--- |
| **Requisito Associado** | RF-002 — A interface deve permitir a atualização do status dos registros da [Entidade Principal]. |
| **Objetivo do Teste** | Confirmar a integração ponta a ponta entre a interface e a API, garantindo que o banco de dados reflita corretamente a mudança de estado. |
| **Passos (Automação E2E)** | 1. O robô de teste acessa o painel principal.<br>2. Simula a ação de alterar o status de um registro de [Estado A] para [Estado B].<br>3. Realiza uma requisição GET na API para confirmar o novo status do registro. |
| **Critério de Êxito** | A interface é atualizada sem recarregar a página e o backend confirma que o status da entidade foi persistido na base de dados (Status `200 OK`). |

| **Caso de Teste** | **CT03 — Exibição de Métricas no Dashboard** |
| :--- | :--- |
| **Requisito Associado** | RF-003 — O sistema deve exibir [Métrica X] e [Métrica Y] no painel gerencial. |
| **Objetivo do Teste** | Validar se as métricas exibidas no dashboard correspondem aos dados reais presentes no banco de dados. |
| **Passos (Automação Unitária / UI)** | 1. Insere um conjunto de dados conhecido no ambiente de teste.<br>2. Acessa o dashboard autenticado.<br>3. Compara os valores exibidos na interface com os valores esperados. |
| **Critério de Êxito** | Os valores exibidos no dashboard correspondem exatamente aos dados inseridos no ambiente de teste, sem discrepâncias. |

| **Caso de Teste** | **CT04 — Proteção contra Injeção e Vazamento (Segurança)** |
| :--- | :--- |
| **Requisito Associado** | RNF-001 — A aplicação deve higienizar todas as entradas de dados e não expor informações sensíveis no tráfego de rede. |
| **Objetivo do Teste** | Assegurar que os formulários rejeitam scripts maliciosos (XSS) e que a API não trafega senhas em texto puro. |
| **Passos (Automação / SAST)** | 1. O script tenta criar um registro inserindo `<script>alert(1)</script>` em um campo de texto.<br>2. Valida o retorno da requisição autenticada para verificar a ausência de dados sensíveis (ex: hash de senha) no JSON. |
| **Critério de Êxito** | O payload XSS é neutralizado (sanitizado ou rejeitado com erro `400 Bad Request`) e a API retorna apenas os dados públicos do perfil. |

| **Caso de Teste** | **CT05 — Direito ao Esquecimento (Exclusão Definitiva — LGPD)** |
| :--- | :--- |
| **Requisito Associado** | RNF-002 — O sistema deve fornecer exclusão ou anonimização irreversível dos dados pessoais sob demanda. |
| **Objetivo do Teste** | Garantir que o encerramento da conta remova ou desvincule totalmente os registros pessoais do usuário no banco de dados. |
| **Passos (Automação)** | 1. O teste cria um usuário e gera registros de histórico associados.<br>2. Aciona o endpoint de exclusão de conta (`DELETE /api/users/{id}`).<br>3. Tenta consultar o usuário e seus registros vinculados. |
| **Critério de Êxito** | A API retorna `404 Not Found` para o usuário excluído, garantindo que não existem rastros que possam identificar civilmente a pessoa no banco de dados. |
