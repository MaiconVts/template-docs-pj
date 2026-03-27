# 02 - Especificação do Projeto

**Documento de Origem:** [01 - Visão Geral e Contexto](01-visao-geral-e-contexto.md)

Este documento detalha as regras de negócio, os perfis de acesso e os requisitos técnicos (Funcionais e Não Funcionais) necessários para o desenvolvimento da plataforma. Ele constitui o principal instrumento de referência de escopo para a fase de engenharia e programação, sendo de leitura obrigatória por todas as partes envolvidas no projeto.

## 1. Perfis de Usuário (Personas do Sistema)
Mapeamento dos perfis reais de operação da solução e seus respectivos níveis de acesso, com base no levantamento realizado durante o Kick-off do projeto.

| Perfil | Nível de Acesso | Objetivo Principal no Sistema |
| :--- | :--- | :--- |
| **Administrador** | Total (Root) | Gerenciar configurações globais, permissões de usuários e visualizar métricas gerais de negócio. |
| **Operador / Funcionário** | Restrito | Executar as rotinas diárias (cadastros, atualizações) e gerar relatórios operacionais do seu setor. |
| **Cliente / Usuário Final** | Externo | Acessar área autenticada para consultar informações próprias e realizar autoatendimento. |

---

## 2. Histórias de Usuários (User Stories)
As histórias de usuário traduzem as necessidades de negócio em funcionalidades práticas, estabelecendo um vocabulário comum entre as partes técnica e contratante.

| ID | Eu como... (Perfil) | Quero / Preciso... (Funcionalidade) | Para... (Valor de Negócio) |
| :--- | :--- | :--- | :--- |
| US-01 | Administrador | Cadastrar novos operadores no sistema | Permitir que minha equipe acesse a plataforma com segurança e controle de permissões. |
| US-02 | Operador | Emitir um relatório em PDF filtrado por data | Prestar contas das atividades semanais à diretoria de forma ágil e padronizada. |
| US-03 | Cliente Final | Recuperar minha senha via e-mail | Retomar o acesso ao portal de forma autônoma, sem necessidade de acionamento do suporte. |

---

## 3. Requisitos Funcionais (RF) e Rastreabilidade
Esta seção lista de forma granular o que o sistema *deve fazer*. A coluna **Origem / Solicitação** garante a rastreabilidade de cada item ao escopo formalmente aprovado.

| ID | Descrição da Funcionalidade | Prioridade | Origem / Solicitação | Status |
| :--- | :--- | :--- | :--- | :--- |
| **RF-001** | O sistema deve permitir a autenticação de usuários via e-mail e senha. | ALTA | Reunião Kick-off (DD/MM) | A Fazer |
| **RF-002** | O sistema deve possuir gestão completa (CRUD) de [Entidade Principal]. | ALTA | Proposta Comercial | A Fazer |
| **RF-003** | O painel deve exibir um dashboard com [Métrica X] e [Métrica Y]. | MÉDIA | E-mail do Cliente (DD/MM) | A Fazer |

---

## 4. Requisitos Não Funcionais (RNF) — Padrão ISO/IEC 25010
Define *como* o sistema deve se comportar tecnicamente. Estes itens constituem a base para a validação de qualidade na entrega do projeto.

| ID | Categoria (ISO 25010) | Descrição do Requisito Técnico | Prioridade |
| :--- | :--- | :--- | :--- |
| **RNF-001** | *Eficiência* | As consultas ao banco de dados devem retornar resultados em tempo inferior a 3 segundos. | ALTA |
| **RNF-002** | *Confiabilidade* | A API deve implementar tratamento global de erros, não expondo a stack trace ao usuário final. | ALTA |
| **RNF-003** | *Usabilidade* | A interface web deve ser totalmente responsiva (Mobile First), adaptando-se a telas a partir de 320px de largura. | ALTA |
| **RNF-004** | *Segurança* | As senhas devem ser armazenadas no banco de dados com algoritmo de hash criptográfico (ex: BCrypt / Argon2). | ALTA |

---

## 5. Regras de Negócio (RN)
Condições lógicas que o sistema deve validar obrigatoriamente, tanto na camada de Back-end quanto de Front-end.

| ID | Regra Lógica | Requisito Associado |
| :--- | :--- | :--- |
| **RN-001** | Um usuário com perfil 'Operador' não pode excluir registros definitivamente — somente inativá-los. A exclusão definitiva é de uso exclusivo do perfil 'Administrador'. | RF-002 |
| **RN-002** | O cadastro de [Entidade] somente será considerado válido se o CPF/CNPJ informado for matematicamente válido (validação por dígitos verificadores). | RF-002 |

---

## 6. Restrições do Projeto
Limitações técnicas e operacionais previamente acordadas que delimitam as decisões de desenvolvimento.

| ID | Restrição |
| :--- | :--- |
| **RST-01** | A plataforma será desenvolvida exclusivamente para ambiente Web/Navegador, sem geração de executáveis desktop (.exe) ou aplicativos nativos para lojas de aplicativos. |
| **RST-02** | O banco de dados a ser utilizado deve ser relacional e de código aberto, eliminando custos adicionais de licenciamento para o contratante. |

---

## 7. Modelagem e Processos (Opcional)
*Caso a complexidade do projeto exija, insira nesta seção os fluxogramas macro das rotinas (BPMN simplificado) ou o Diagrama de Casos de Uso. Utilize imagens ou diagramas em Markdown nativo (ex: Mermaid.js).*

> `[ INSERIR IMAGEM DO FLUXOGRAMA DE ARQUITETURA OU PROCESSO AQUI ]`
