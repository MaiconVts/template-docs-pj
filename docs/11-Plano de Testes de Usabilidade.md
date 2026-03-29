# 11 - Plano de Testes de Usabilidade

**Documento de Origem:** [06 - Projeto de Interface](06-Projeto%20de%20Interface.md)

Este documento estabelece o planejamento para os testes de usabilidade da aplicação. O foco não é a avaliação do código-fonte, mas sim a qualidade da experiência do usuário (UX), garantindo que a interface seja intuitiva, eficiente e acessível ao público-alvo definido.

---

> **⚠️ Nota de Adaptação do Template**
>
> Os objetivos, cenários e critérios de sucesso apresentados neste documento são baseados em um **sistema fictício de produtividade (Kanban + Pomodoro)** e têm finalidade exclusivamente ilustrativa — demonstram a estrutura e o nível de detalhamento esperados em um projeto real.
>
> **Ao utilizar este template, substitua integralmente** os cenários, os perfis de participantes e os critérios de sucesso pelas funcionalidades e pelo público-alvo reais do seu projeto, conforme definido no documento [02 - Especificação do Projeto](02-Especificacao-do-Projeto.md).

---

## 1. Definição dos Objetivos

Antes do início da coleta empírica, estabelecem-se os objetivos centrais da avaliação de usabilidade:

* Verificar se usuários em primeiro acesso conseguem compreender a lógica de navegação principal e executar as funções centrais sem a necessidade de tutoriais ou suporte.
* Avaliar a clareza visual e os elementos de interação das funcionalidades de maior criticidade.
* Identificar possíveis barreiras de navegação, especialmente em transições entre módulos distintos.
* Mensurar o tempo médio e a taxa de erro para a execução das jornadas críticas de negócio.

## 2. Seleção dos Participantes

Para que os resultados reflitam o uso real, os participantes serão recrutados de forma a representar o público-alvo da solução.

* **Quantidade:** Serão selecionados **6 participantes** (atendendo ao requisito mínimo de 5 e garantindo margem para diversidade de perfis).
* **Composição:**
    * 2 usuários experientes no uso de ferramentas digitais similares ao sistema desenvolvido.
    * 4 usuários sem familiaridade prévia com ferramentas do mesmo segmento, representando o perfil operacional do dia a dia.
    * Todos os participantes deverão possuir familiaridade básica com navegação web e uso de dispositivos móveis.

## 3. Definição de Cenários de Teste

Os **cinco cenários** abaixo representam as tarefas essenciais que um usuário executará no sistema em seu uso cotidiano.

### Cenário 1: Cadastro e Primeiro Acesso (Onboarding)
* **Objetivo:** Avaliar a fluidez do processo de entrada na aplicação.
* **Contexto:** Um novo colaborador ou cliente recebeu o link da plataforma e deseja criar sua conta para iniciar o uso.
* **Tarefa:** Acessar a página inicial, localizar a área de cadastro, preencher os dados solicitados (Nome, E-mail, Senha), aceitar os termos de uso e realizar o primeiro login para visualizar o painel inicial.
* **Critério de Sucesso:** O participante conclui o cadastro e acessa o painel principal em menos de 2 minutos, sem apresentar dúvidas sobre as mensagens de validação do formulário.

### Cenário 2: Criação e Gestão de Registros ([Entidade Principal])
* **Objetivo:** Avaliar a intuitividade do módulo de gestão de dados (UX do CRUD).
* **Contexto:** O usuário necessita registrar uma nova entrada na [Entidade Principal] do sistema.
* **Tarefa:** Localizar o botão de novo registro, preencher os campos obrigatórios, salvar e confirmar que o item aparece listado corretamente.
* **Critério de Sucesso:** O participante identifica imediatamente como criar o registro e conclui o processo sem erros ou necessidade de auxílio.

### Cenário 3: Utilização da Funcionalidade Principal ([RF-00X])
* **Objetivo:** Avaliar a interação com a funcionalidade central de negócio.
* **Contexto:** O usuário deseja utilizar [Funcionalidade Principal] para executar sua rotina de trabalho.
* **Tarefa:** Localizar, ativar e interagir com [Funcionalidade Principal], identificando os controles de início, pausa e encerramento.
* **Critério de Sucesso:** A interface comunica claramente o estado da funcionalidade e o usuário consegue controlar o fluxo sem ambiguidade.

### Cenário 4: Edição de Perfil e Configurações
* **Objetivo:** Verificar a arquitetura de informação do menu do usuário.
* **Contexto:** O usuário deseja alterar sua senha ou atualizar suas informações de exibição no sistema.
* **Tarefa:** Navegar até a área de perfil, localizar os campos de edição, inserir os novos dados e salvar as alterações.
* **Critério de Sucesso:** O participante localiza o menu de perfil em menos de 10 segundos a partir da tela principal e recebe um *feedback* visual claro de confirmação após o salvamento.

### Cenário 5: Exclusão de Conta (Usabilidade e LGPD)
* **Objetivo:** Verificar se o "Direito ao Esquecimento" é acessível sem o uso de *Dark Patterns* (padrões de design que dificultam intencionalmente ações do usuário).
* **Contexto:** O usuário decide encerrar sua conta e remover permanentemente seus dados da plataforma.
* **Tarefa:** Localizar a opção de encerramento de conta nas configurações, ler o aviso de exclusão definitiva e confirmar a ação.
* **Critério de Sucesso:** A opção de exclusão não está oculta ou de difícil acesso. O participante executa a ação de forma autônoma, compreendendo as consequências por meio dos modais de confirmação.

## 4. Métodos de Coleta de Dados

Para garantir a imparcialidade dos resultados e a conformidade legal, a coleta de dados combinará abordagens qualitativas e quantitativas, respeitando integralmente a LGPD.

* **Métricas Quantitativas:**
    * Taxa de Sucesso: percentual de tarefas concluídas sem assistência.
    * Tempo na Tarefa (*Time-on-Task*): tempo medido em segundos para finalizar cada cenário.
    * Quantidade de cliques e taxa de erros não críticos por cenário.
* **Métricas Qualitativas:**
    * Observação direta (ou via *Screencast* / Google Meet) de sinais de frustração ou hesitação durante as tarefas.
    * Questionário Pós-Teste baseado na Escala SUS (*System Usability Scale*) para mensuração da percepção subjetiva de facilidade de uso.
* **Adequação à LGPD:**
    * Todos os testes serão conduzidos mediante consentimento prévio e informado dos voluntários.
    * **Nenhum dado pessoal identificável (nome real, e-mail, endereço IP, imagem do rosto ou voz) será gravado, armazenado ou exposto nos relatórios finais.** Os participantes serão identificados exclusivamente por pseudônimos (ex: "Usuário 1", "Usuário 2").

## 5. Classificação PSP de Problemas de Usabilidade

Problemas de UX identificados nas sessões de teste devem ser classificados conforme a Taxonomia de Defeitos PSP (Doc 02, seção 7), permitindo análise cruzada com os defeitos de software e alimentando o Post-mortem do ciclo PSP3.

| Problema de UX | Tipo PSP Equivalente | Justificativa |
| :--- | :--- | :--- |
| Fluxo de navegação confuso ou sequência de telas incorreta | Tipo 80 (Função) | A lógica de navegação não cumpre a intenção do requisito funcional. |
| Ícone ou rótulo ambíguo | Tipo 10 (Documentação) | Elemento de interface sem comunicação clara de sua função. |
| Formulário aceita entrada inválida sem feedback | Tipo 60 (Verificação) | Ausência de validação de input na camada de apresentação. |
| Elemento fora de posição em determinada resolução | Tipo 20 (Sintaxe/Layout) | Regra CSS/SCSS aplicada incorretamente. |
| Interação quebrada em dispositivo específico | Tipo 90 (Sistema) | Incompatibilidade de evento com o ambiente de execução. |

Os problemas identificados nos testes de usabilidade são registrados no Documento 12 (Registro de Testes de Usabilidade) e retroalimentam o backlog de correções do ciclo PSP3 seguinte.

> **Referência PSP3 retroalimentação:** HUMPHREY, Watts S. *A Discipline for Software Engineering*. Addison-Wesley, 1995, cap. 14. Pesquise: `"PSP3 process improvement usability defects"`.
> **Referência LGPD:** Lei nº 13.709/2018. Pesquise: `"LGPD consentimento tratamento dados pessoais Art 7"`.
