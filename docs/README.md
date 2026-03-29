# Template de Documentação para Projetos de Software — Regime PJ

**Versão:** 1.0.0
**Categoria:** Gestão de Projetos de Software / Documentação Técnica e Operacional
**Regime:** Pessoa Jurídica (PJ) — Prestação de Serviços de Desenvolvimento de Software

---

## Sobre este Template

Este repositório de documentos foi concebido para estruturar, de ponta a ponta, o ciclo de vida de um projeto de desenvolvimento de software contratado sob o regime de **Pessoa Jurídica (PJ)**. Ele cobre desde o primeiro alinhamento de expectativas com o cliente até o encerramento formal da entrega, passando por especificação técnica, cronograma, design de interface, arquitetura, testes e homologação.

O objetivo central é simples: **eliminar a ambiguidade**. Projetos de software falham, atrasam ou geram conflitos principalmente por ausência de documentação que registre o que foi combinado, quando e por quem. Este template oferece a estrutura para que cada decisão relevante seja registrada, revisada e formalmente aceita — antes de se tornar um problema.

> **Nota de escopo:** Este conjunto de documentos é um **instrumento de gestão e comunicação**, não um contrato jurídico. Ele complementa — mas não substitui — um contrato de prestação de serviços elaborado por profissional habilitado.

---

## Fundamentos e Referências Técnicas

Os documentos foram estruturados com base nas seguintes referências reconhecidas pelo mercado:

**PMBOK (Project Management Body of Knowledge)**
Guia de boas práticas em gerenciamento de projetos publicado pelo PMI (Project Management Institute). Influencia diretamente o documento de Cronograma de Entregas, especialmente nas seções de estimativas, reservas de contingência, análise de caminho crítico e métricas de desempenho via Earned Value Management (EVM).

**ISO/IEC 25010 — SQuaRE**
Norma internacional que define o modelo de qualidade de produto de software, dividido em características como Funcionalidade, Confiabilidade, Usabilidade, Eficiência, Manutenibilidade e Segurança. Referenciada nos documentos de Especificação, Arquitetura e Testes de Software.

**LGPD — Lei Geral de Proteção de Dados (Lei nº 13.709/2018)**
Legislação brasileira que regulamenta o tratamento de dados pessoais. Considerada nos documentos de Testes de Software e Usabilidade, com cenários específicos para validação do direito ao esquecimento, anonimização e consentimento.

**OWASP Top 10**
Lista das vulnerabilidades de segurança mais críticas em aplicações web, publicada pela Open Web Application Security Project. Referenciada no processo de CI/CD e nos cenários de testes de segurança. Pesquise: `"OWASP Top 10 web application security"` ou acesse [owasp.org/www-project-top-ten](https://owasp.org/www-project-top-ten).

**PSP — Personal Software Process**
Método de desenvolvimento individual criado por Watts S. Humphrey no SEI/CMU (Software Engineering Institute, Carnegie Mellon University). Estrutura o trabalho do desenvolvedor em níveis progressivos (PSP0 a PSP3), com práticas de registro de tempo, rastreamento de defeitos por tipo e fase, padrões de codificação, estimativas paramétricas (método PROBE) e revisões de design e código documentadas. Os dados coletados ao longo do projeto retroalimentam a precisão das estimativas e a eficácia das revisões em ciclos futuros.

Referência primária: HUMPHREY, Watts S. *A Discipline for Software Engineering*. Addison-Wesley, 1995. ISBN 978-0201546101. Pesquise: `"PSP Humphrey discipline software engineering SEI"` ou acesse [sei.cmu.edu/education-outreach/courses/psp.cfm](https://sei.cmu.edu/education-outreach/courses/psp.cfm).

Documentos influenciados pelo PSP: 01 (PSP3 na abordagem), 02 (LOC e Taxonomia de Defeitos), 03 (estimativas PROBE), 04 (PSP0–PSP3, central), 05 (produtividade histórica), 06 (PSP2 Design Review), 07 (Padrões de Codificação e LOC), 08 (PSP0.1), 09–12 (classificação de defeitos por Tipo PSP), 13 (Atestado de Qualidade PSP3).

---

## Estrutura de Documentos

A pasta está organizada em **13 documentos principais** distribuídos ao longo de cinco grandes fases do projeto:

---

### Fase 1 — Alinhamento e Escopo

**`01 — Visão Geral e Contexto do Projeto`**
Ponto de partida. Define o problema de negócio do cliente, a solução proposta e o escopo macro (o que está incluso e o que não está). Deve ser preenchido em conjunto com o cliente ainda na fase comercial, antes de qualquer comprometimento técnico.

**`02 — Especificação do Projeto`**
Documento técnico central. Detalha os Requisitos Funcionais (o que o sistema deve fazer), os Requisitos Não Funcionais (como o sistema deve se comportar), as Regras de Negócio, as Restrições e as Histórias de Usuário. É a referência primária para todo o desenvolvimento.

**`03 — Termo de Aceite Inicial e Trava de Escopo`**
Formaliza que o cliente leu, compreendeu e aprovou os dois documentos anteriores. Estabelece as regras de Change Request — qualquer nova demanda fora do escopo aprovado entra por aqui. **Requer assinatura de ambas as partes.**

---

### Fase 2 — Planejamento

**`04 — Metodologia e Processo de Trabalho`**
Descreve como o projeto será conduzido: abordagem iterativa e incremental, papéis, ferramentas, estratégia de branches, gestão de Issues e pipeline de CI/CD. Define as regras do jogo antes do início do desenvolvimento.

**`05 — Cronograma de Entregas`**
Baseado nas práticas do PMBOK. Define as fases do projeto com datas, marcos de aceite, estimativas com Reserva de Contingência por fase e Reserva Gerencial do projeto. Inclui indicadores de desempenho de prazo (SPI/SV via EVM), ferramentas de monitoramento recomendadas, registro de riscos de atraso e gatilhos de escalada. **Requer assinatura de ambas as partes.**

---

### Fase 3 — Design e Arquitetura

**`06 — Projeto de Interface e Experiência do Usuário (UI/UX)`**
Apresenta os fluxos de navegação do usuário (User Flow) e os protótipos de interface (wireframes ou alta fidelidade), com mapeamento direto aos Requisitos Funcionais aprovados. Define a identidade visual e a biblioteca de componentes. A codificação das telas somente tem início após o aceite formal desta seção. **Requer aceite formal do cliente.**

**`07 — Arquitetura da Solução e Infraestrutura`**
Define a stack tecnológica (Front-end, Back-end, Banco de Dados, Hospedagem) com justificativa técnica para cada escolha. Contempla o Diagrama Entidade-Relacionamento (DER), o Modelo Físico do banco de dados e as métricas de qualidade baseadas na ISO/IEC 25010.

**`08 — Template Padrão da Aplicação`**
Define as diretrizes visuais e estruturais transversais a todas as telas: paleta de cores, tipografia, layout semântico em HTML5, breakpoints de responsividade e biblioteca de ícones. Garante consistência visual independentemente de quem desenvolve cada módulo.

---

### Fase 4 — Validação Técnica

**`09 — Plano de Testes de Software`**
Estratégia de validação automatizada da aplicação. Define os cenários de teste funcional (regras de negócio, integrações, endpoints) e de segurança (XSS, injeção, LGPD), com requisito associado, passos de automação e critério de êxito para cada caso.

> Os casos de teste incluídos neste template são **exemplos ilustrativos** baseados em um sistema fictício. Devem ser integralmente substituídos pelos cenários reais do projeto, conforme a Especificação (Doc 02).

**`10 — Registro de Testes de Software`**
Centraliza as evidências de execução dos testes planejados: links para logs de CI/CD, relatórios de análise estática (SAST) e vídeos de testes E2E. Inclui relatório com pontos fortes, falhas identificadas e estratégias de correção para a próxima iteração.

---

### Fase 5 — Validação com Usuários e Encerramento

**`11 — Plano de Testes de Usabilidade`**
Define a metodologia para avaliação da experiência do usuário (UX): objetivos da sessão, perfil e quantidade de participantes, cenários de teste comportamental e métodos de coleta — quantitativos (taxa de sucesso, tempo na tarefa) e qualitativos (observação, Escala SUS). Elaborado com conformidade à LGPD na coleta e no armazenamento dos dados dos voluntários.

**`12 — Registro de Testes de Usabilidade`**
Consolida os dados coletados nas sessões com usuários reais, organizados por cenário e participante. Inclui relatório com métricas gerais, diagnóstico de padrões de comportamento e priorização das melhorias identificadas (Crítico / Moderado / Leve).

**`13 — Termo de Aceite Final e Encerramento de Projeto`**
Formaliza a entrega definitiva. O cliente atesta que o sistema foi recebido, testado e homologado conforme os requisitos acordados. Registra os entregáveis transferidos (código-fonte, credenciais, documentação) e inicia o período de garantia técnica. **Requer assinatura de ambas as partes.**

---

## Como Utilizar este Template

**1. Clone ou copie a pasta `/docs` para o repositório do projeto.**
Mantenha os arquivos versionados no mesmo repositório do código-fonte. Isso garante rastreabilidade entre a documentação e o estado do código em cada entrega.

**2. Preencha os documentos em ordem, respeitando o fluxo.**
Cada documento depende do anterior. Não inicie a Especificação (02) sem ter o contexto (01) alinhado. Não inicie o desenvolvimento sem o Termo de Aceite (03) assinado.

**3. Substitua todos os placeholders pelos dados reais do projeto.**
Consulte a seção de convenções abaixo para identificar todos os campos que precisam ser preenchidos.

**4. Registre os aceites formais como evidência.**
Salve cópias dos documentos assinados no diretório `/docs/evidencias`. Referencie o Issue do GitHub correspondente em cada aceite.

**5. Adapte os exemplos ilustrativos.**
Os documentos de Testes (09 a 12) contêm exemplos baseados em um sistema fictício. Substitua-os pelos cenários reais antes de apresentar ao cliente.

---

## Convenções e Placeholders

Todos os campos a serem preenchidos seguem o padrão de colchetes. Nenhum documento deve ser entregue ao cliente com placeholders em aberto.

| Placeholder | O que preencher |
| :--- | :--- |
| `[Nome da Empresa do Cliente]` | Razão social ou nome fantasia do contratante |
| `[Entidade Principal]` | Entidade de negócio central do sistema (ex: Pedidos, Contratos, Atendimentos) |
| `[RF-00X]` | ID do Requisito Funcional correspondente, definido no Doc 02 |
| `[Ex: ...]` | Decisão técnica real — tecnologia, ferramenta ou valor escolhido para o projeto |
| `[URL_DO_PROTOTIPO]` | Link direto para o projeto no Figma, Penpot ou equivalente |
| `[URL_DO_FLUXOGRAMA]` | Link para o fluxograma no Miro, Lucidchart ou equivalente |
| `DD/MM/AAAA` | Data real do evento ou reunião referenciada |
| `[X] dias` | Valor numérico real (ex: 30 dias de garantia técnica) |
| `[Módulo A]`, `[Módulo B]` | Nomes reais dos módulos funcionais definidos na Especificação |

---

## Estrutura de Arquivos

```
/docs
|
|-- README.md                                          <- Este arquivo
|-- 01-visao-geral-e-contexto.md
|-- 02-Especificacao-do-Projeto.md
|-- 03-Termo de Aceite Inicial e Trava de Escopo.md
|-- 04-Metodologia.md
|-- 05-Cronograma-de-Entregas.md
|-- 06-Projeto de Interface.md
|-- 07-Arquitetura da Solucao.md
|-- 08-Template Padrao da Aplicacao.md
|-- 09-Plano de Testes de Software.md
|-- 10-Registro de Testes de Software.md
|-- 11-Plano de Testes de Usabilidade.md
|-- 12-Registro de Testes de Usabilidade.md
|-- 13-Termo de Aceite Final e Encerramento de Projeto.md
|
+-- /evidencias
    |-- aceite-escopo-inicial.pdf      <- Doc 03 assinado
    |-- aceite-cronograma.pdf          <- Doc 05 assinado
    |-- aceite-interface.pdf           <- Aceite formal do Doc 06
    +-- aceite-final.pdf               <- Doc 13 assinado
```

---

## Pontos de Assinatura Obrigatórios

Os documentos abaixo exigem aceite formal de ambas as partes antes que a fase seguinte possa ser iniciada:

| Documento | Momento do Aceite |
| :--- | :--- |
| **03 — Termo de Aceite Inicial** | Antes do início do desenvolvimento |
| **05 — Cronograma de Entregas** | Antes do início do desenvolvimento |
| **06 — Aceite de Interface** | Antes da codificação das telas |
| **13 — Termo de Aceite Final** | Ao encerramento do projeto |

---

*Este template é de uso livre. Adapte conforme as necessidades do seu projeto e do seu cliente.*
