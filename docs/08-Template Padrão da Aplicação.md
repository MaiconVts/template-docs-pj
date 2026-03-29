# 08 - Template Padrão da Aplicação

**Documentos de Origem:** [02 - Especificação do Projeto](02-Especificacao-do-Projeto.md) | [04 - Metodologia](04-Metodologia.md) | [06 - Projeto de Interface](06-Projeto%20de%20Interface.md)

Este documento define o layout padrão da aplicação, transversal a todas as telas do sistema. O objetivo é garantir a consistência da identidade visual, assegurar a responsividade em diferentes dispositivos e padronizar a iconografia utilizada.

## 1. Identidade Visual

A identidade visual da aplicação foi projetada para ser limpa, moderna e acessível, em conformidade com as diretrizes estabelecidas na Especificação do Projeto.

* **Paleta de Cores Principal:**
    * **Cor Primária:** `#[Hex Code]` — Utilizada em botões de ação principal e cabeçalhos.
    * **Cor Secundária:** `#[Hex Code]` — Utilizada em elementos de destaque e hiperligações.
    * **Cor de Fundo:** `#[Hex Code]` — Fundo geral das páginas da aplicação.
    * **Cor de Texto:** `#[Hex Code]` — Texto corrido, garantindo alto contraste e legibilidade.
* **Tipografia:**
    * **Fonte Principal:** `[Nome da Fonte — ex: Roboto, Inter]` (via Google Fonts).
    * **Títulos (H1, H2, H3):** Peso `Bold` ou `Semi-bold`.
    * **Corpo de Texto:** Peso `Regular`, tamanho base de `16px`.

## 2. Estrutura do Layout

O layout base adota uma estrutura em blocos semânticos (HTML5) para facilitar a navegação, a manutenção do código e a acessibilidade.

* **Cabeçalho (`<header>`):**
    * Logotipo da aplicação posicionado à esquerda.
    * Menu de navegação principal ao centro ou alinhado à direita.
    * Menu de perfil do usuário / botão de *login* e *logout* na extremidade direita.
* **Área de Conteúdo (`<main>`):**
    * Contêiner central dinâmico onde as telas e formulários serão renderizados conforme a navegação.
    * Largura máxima definida (`max-width: 1200px`) com margens automáticas para centralização em telas de grandes dimensões.
* **Rodapé (`<footer>`):**
    * Informações de *copyright*, links institucionais, políticas de privacidade e contatos da equipe de desenvolvimento.

## 3. Responsividade

A aplicação adota a abordagem *Mobile First*, garantindo que a interface se adapte de forma fluida a qualquer tamanho de tela, por meio de *Media Queries* no CSS ou da grade de um framework base (ex: Bootstrap, Tailwind CSS).

* **Smartphones (Telas pequenas):** `max-width: 768px` — O menu principal é recolhido em um ícone de "hambúrguer". Os blocos de conteúdo assumem largura total (`100%`).
* **Tablets (Telas médias):** `min-width: 769px` até `1024px` — Elementos organizam-se em grade de 2 colunas, quando aplicável.
* **Desktops (Telas grandes):** `min-width: 1025px` — Visualização completa com menus expandidos e uso integral da grade de componentes.

## 4. Iconografia

Os ícones utilizados em botões, menus e alertas visam facilitar o reconhecimento rápido das ações pelo usuário, reduzindo a carga cognitiva na interação.

* **Biblioteca Utilizada:** `[Indicar a biblioteca — ex: FontAwesome / Phosphor Icons / Material Icons]`
* **Padrão de Uso:**
    * **Ações de edição:** Ícone de lápis.
    * **Ações de exclusão:** Ícone de lixeira (com elemento vermelho para sinalizar alerta).
    * **Navegação:** Setas e ícones representativos do contexto de cada módulo.

---
> **Nota de Implementação:** Os arquivos de estilização global (CSS/SCSS) e os componentes de layout base que refletem estas diretrizes estão armazenados e centralizados na pasta `[caminho/para/pasta/styles]` do repositório do projeto.

## 5. Conformidade com o Padrão de Codificação (PSP0.1)

Este template visual é parte integrante do **Padrão de Codificação (PSP0.1)** definido no **Doc 07 — Arquitetura da Solução, seção 6**. As seguintes regras se aplicam à implementação deste template:

* Os seletores CSS/SCSS devem seguir a nomenclatura **BEM** (`bloco__elemento--modificador`) conforme definido no Doc 07, seção 6.2.
* Cada componente visual (botão, card, modal, tabela) deve ter seu estilo centralizado em um arquivo de componente dedicado — não inline.
* A paleta de cores, tipografia e breakpoints definidos neste documento devem ser declarados como **variáveis CSS** (ou tokens SCSS), nunca duplicados como valores literais no código.
* O Padrão de Codificação e este template visual são referenciados obrigatoriamente no **Checklist de Revisão de Código (PSP2)** antes de qualquer Pull Request de Front-end (Doc 04, seção 5.7).

> **Referência PSP0.1 / PSP2:** HUMPHREY, Watts S. *A Discipline for Software Engineering*. Addison-Wesley, 1995, cap. 5 e cap. 10. Pesquise: `"PSP coding standard visual design review"` ou `"BEM CSS methodology naming convention"` para a convenção de nomenclatura.
