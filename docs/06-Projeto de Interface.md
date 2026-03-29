# 06 - Projeto de Interface e Experiência do Usuário (UI/UX)

**Documento de Origem:** [02 - Especificação do Projeto](02-Especificacao-do-Projeto.md)

Este documento detalha o planejamento visual e interativo da plataforma. Apresenta os fluxos de navegação que o usuário percorrerá e a estrutura visual das telas (wireframes / protótipos), garantindo que a interface atenda integralmente aos Requisitos Funcionais (RF) e Não Funcionais (RNF) previamente aprovados.

## 1. Diagrama de Fluxo de Usuário (User Flow)
O diagrama abaixo ilustra a jornada lógica do usuário dentro do sistema, mapeando as interações desde o login até a execução das rotinas principais. Ele serve como base para a arquitetura do Front-end e para o mapeamento dos endpoints da API no Back-end.

*(O fluxo deve mapear ações como pesquisar, filtrar, editar e configurar, conectando as telas do sistema de forma lógica e sequencial.)*

> `[ INSERIR IMAGEM DO FLUXOGRAMA AQUI OU UTILIZAR MERMAID.JS ]`
> *Link externo (se aplicável):* [Visualizar Fluxograma Interativo no Miro / Lucidchart]([URL_DO_FLUXOGRAMA])

---

## 2. Protótipos de Interface (Wireframes / Alta Fidelidade)
A seguir estão estruturados os layouts e a disposição dos elementos visuais da aplicação. A prototipagem permite a validação da usabilidade e da responsividade antes do início da codificação das telas, evitando retrabalho na fase de desenvolvimento.

**Acesso ao Protótipo Interativo:**
🔗 [Link para o Projeto no Figma / Penpot]([URL_DO_PROTOTIPO])

### 2.1. Telas Principais e Mapeamento de Requisitos
| Nome da Tela | Descrição / Objetivo | Requisitos Atendidos | Link Direto / Print |
| :--- | :--- | :--- | :--- |
| **Tela de Autenticação** | Login, recuperação de senha e validação de 2FA (se aplicável). | RF-001, RNF-004 | `[ Print da Tela ]` |
| **Dashboard Administrativo** | Visão geral, gráficos gerenciais e atalhos rápidos de navegação. | RF-003 | `[ Print da Tela ]` |
| **Listagem / CRUD** | Tabela de dados de [Entidade] com filtros, paginação e botões de ação. | RF-002, RN-001 | `[ Print da Tela ]` |

---

## 3. Identidade Visual e Assets (UI Components)
Diretrizes visuais que nortearão o desenvolvimento Front-end:
* **Paleta de Cores:** `[ Inserir códigos Hexadecimais — Ex: Primária #0056b3 / Secundária #6c757d ]`
* **Tipografia:** `[ Ex: Inter, Roboto — Tamanhos e pesos base ]`
* **Animações e Interações:** Recursos interativos específicos desenvolvidos em Rive ou Spline estão mapeados diretamente no protótipo interativo.
* **Biblioteca de Componentes:** O desenvolvimento utilizará [Tailwind CSS / Bootstrap / Material UI], padronizado conforme as telas aprovadas.

---

## 4. Revisão de Design (PSP2) e Aceite de Interface

Para prevenir retrabalho na camada de visualização (Front-end), a codificação das telas somente será iniciada após dois processos distintos: a **Revisão de Design (PSP2)** realizada pelo desenvolvedor e o **Aceite Formal** do cliente.

**4.1. Revisão de Design — PSP2 (Etapa Interna, Desenvolvedor)**
Antes de abrir qualquer Pull Request de Front-end, o desenvolvedor deve verificar:
- [ ] O layout implementado corresponde fielmente ao protótipo aprovado nesta seção?
- [ ] Os breakpoints de responsividade (Mobile First) estão respeitados conforme Doc 08?
- [ ] Os seletores CSS/SCSS seguem a nomenclatura BEM definida no Padrão de Codificação (Doc 07, seção 6.2)?
- [ ] Todos os elementos interativos possuem estados visuais de feedback (hover, active, disabled, loading)?
- [ ] A acessibilidade básica está atendida (atributos `alt`, contraste mínimo WCAG 2.1 AA)?

Defeitos identificados nesta revisão devem ser registrados no Log de Defeitos (Doc 04, seção 5.2) com Tipo 80 (Função) ou Tipo 20 (Sintaxe), conforme aplicável.

> **Referência PSP2 Design Review:** HUMPHREY, Watts S. *A Discipline for Software Engineering*. Addison-Wesley, 1995, cap. 11. Pesquise: `"PSP design review checklist front-end"`.

**4.2. Validação e Aceite de Interface — Cliente**

Para prevenir retrabalho na camada de visualização (Front-end), a codificação das telas somente será iniciada após a validação e o aceite formal das estruturas propostas nesta seção.

**Data de Validação:** ____/____/________
**Responsável pela Aprovação:** [Nome do Cliente / Representante]

- [ ] O contratante revisou os fluxos lógicos e confirma que atendem à operação do negócio.
- [ ] O contratante navegou pelos protótipos e aprova a disposição dos elementos e a identidade visual proposta.
- [ ] Fica formalmente acordado que alterações visuais estruturais solicitadas após este aceite poderão impactar o cronograma e gerar custos adicionais de desenvolvimento.

**Aprovação Registrada:**
- [ ] Via Issue #XXX no repositório do projeto.
- [ ] Via e-mail / reunião (evidência arquivada em `/docs/evidencias`).
