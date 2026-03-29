# 07 - Arquitetura da Solução e Infraestrutura

**Documento de Origem:** [06 - Projeto de Interface](06-Projeto%20de%20Interface.md)

Este documento descreve a estrutura técnica do projeto, detalhando as tecnologias selecionadas, a modelagem do banco de dados, o ambiente de hospedagem e os padrões de qualidade de software adotados.

## 1. Visão Geral da Arquitetura
A plataforma segue uma arquitetura baseada em [Ex: Client-Server / API RESTful / Microsserviços], com separação clara de responsabilidades entre a interface de usuário (Front-end) e as regras de negócio com persistência de dados (Back-end).

> `[ INSERIR DIAGRAMA DE ARQUITETURA DE ALTO NÍVEL AQUI — Ex: C4 Model ou diagrama conectando Front-end, API e Banco de Dados ]`

## 2. Stack Tecnológica
As tecnologias relacionadas abaixo foram selecionadas com base em critérios de escalabilidade, segurança e facilidade de manutenção futura.

| Camada | Tecnologia / Framework | Justificativa de Uso |
| :--- | :--- | :--- |
| **Front-end (Interface)** | [Ex: React.js / HTML + CSS + JS] | Construção de interfaces dinâmicas e responsivas. |
| **Back-end (Regras de Negócio)** | [Ex: C# .NET / Python / Node.js] | Alta performance, tipagem forte e robustez para aplicações corporativas. |
| **Banco de Dados** | [Ex: MySQL / PostgreSQL] | Persistência de dados relacionais com integridade transacional. |
| **Hospedagem / Cloud** | [Ex: AWS / Azure / Vercel] | Alta disponibilidade e facilidade de deploy contínuo. |

## 3. Modelagem de Dados
A estrutura de dados foi projetada para garantir a integridade das informações e a performance das consultas.

### 3.1. Diagrama Entidade-Relacionamento (DER)
O diagrama abaixo mapeia as entidades principais do sistema e seus relacionamentos lógicos.

> `[ INSERIR IMAGEM DO DER (Diagrama Entidade-Relacionamento) AQUI ]`

### 3.2. Dicionário de Dados e Modelo Físico
Os scripts `.sql` responsáveis pela criação das tabelas, índices e chaves estrangeiras (Modelo Físico) estão armazenados e versionados no repositório do projeto.
* 📁 **Caminho dos Scripts:** `/src/bd/schema.sql`

## 4. Hospedagem e Implantação (Deployment)
O ambiente de produção foi configurado para garantir estabilidade e disponibilidade contínua. O lançamento da plataforma segue o modelo de integração contínua definido no Doc 04.

* **Front-end:** Hospedado em [Ex: Vercel / Netlify]. A cada atualização na branch `main`, um novo build é gerado automaticamente.
* **Back-end e API:** Hospedado em [Ex: VPS Linux / AWS EC2 / Azure App Service].
* **Banco de Dados:** Instância gerenciada em [Ex: AWS RDS / Servidor Dedicado], com rotina de backup [Ex: Diária / Semanal].

## 5. Padrões de Qualidade de Software (ISO/IEC 25010 + PSP)
Para assegurar que a solução técnica atenda aos padrões de mercado, o desenvolvimento é guiado pelas seguintes subcaracterísticas da norma internacional ISO/IEC 25010:

| Característica ISO 25010 | Aplicação Prática no Projeto | Métrica de Controle Interno |
| :--- | :--- | :--- |
| **Manutenibilidade** (Modificabilidade) | O código Back-end segue princípios SOLID e Clean Code. Os padrões PSP0.1 garantem consistência de nomenclatura e estrutura. | O projeto deve ser modular; alterações em uma entidade não devem provocar regressão em rotinas isoladas. |
| **Confiabilidade** (Tolerância a falhas) | Tratamento global de exceções na API. | Em caso de erro interno, a API retorna um JSON padronizado sem expor o *stack trace* ao usuário. |
| **Segurança** (Confidencialidade) | Proteção de rotas e dados sensíveis. | Senhas armazenadas com hash criptográfico (BCrypt) e rotas de API protegidas por tokens JWT. |
| **Eficiência** (Comportamento de tempo) | Otimização de consultas ao banco de dados com uso de índices. | Endpoints principais devem apresentar tempo de resposta inferior a [Ex: 500ms]. |

> **Referência ISO/IEC 25010:** Pesquise: `"ISO IEC 25010 SQuaRE software quality model"` ou acesse [iso.org/standard/35733.html](https://www.iso.org/standard/35733.html).

---

## 6. Padrões de Codificação (PSP0.1)

Conforme estabelecido na metodologia (Doc 04, seção 5.3), o padrão de codificação é o alicerce da **revisão pessoal de código (PSP2)**. Deve ser definido antes do início de qualquer ciclo de desenvolvimento e mantido versionado no repositório.

### 6.1. Back-end ([Ex: C#/.NET])

| Categoria | Regra |
| :--- | :--- |
| **Nomenclatura** | Classes e métodos: `PascalCase`. Variáveis e parâmetros: `camelCase`. Constantes: `UPPER_SNAKE_CASE`. |
| **Tamanho de Método** | Máximo de [Ex: 30] linhas lógicas por método. Métodos maiores devem ser refatorados. |
| **Responsabilidade Única** | Cada classe deve ter uma única razão para mudar (SRP — SOLID). |
| **Tratamento de Exceções** | Exceções específicas antes de genéricas. Nunca capturar `Exception` sem tratamento ou registro em log. |
| **Comentários** | Comentários devem explicar *por quê*, não *o quê*. O código deve ser autodescritivo. |
| **Imutabilidade** | Prefira `readonly` e tipos imutáveis sempre que possível. |

### 6.2. Front-end ([Ex: JavaScript / TypeScript])

| Categoria | Regra |
| :--- | :--- |
| **Nomenclatura** | Funções e variáveis: `camelCase`. Componentes: `PascalCase`. Constantes de módulo: `UPPER_SNAKE_CASE`. |
| **Tamanho de Função** | Máximo de [Ex: 20] linhas lógicas por função. |
| **Manipulação do DOM** | Evitar manipulação direta do DOM fora do framework/biblioteca adotado. |
| **CSS/SCSS** | Nomenclatura BEM (`bloco__elemento--modificador`) para seletores. Evitar `!important`. |
| **Async/Await** | Todas as operações assíncronas devem tratar erros com `try/catch` ou `.catch()` encadeado. |

> **Referência PSP0.1:** HUMPHREY, Watts S. *A Discipline for Software Engineering*. Addison-Wesley, 1995, cap. 5. Pesquise: `"PSP coding standard checklist PSP0.1"`.
> **Referência SOLID:** MARTIN, Robert C. *Clean Code*. Prentice Hall, 2008. Pesquise: `"SOLID principles Robert Martin clean code"`.

---

## 7. Medição de Tamanho (LOC) e Prevenção de Defeitos (PSP2)

### 7.1. Contagem de LOC (PSP0.1)
O tamanho do software é medido em **Linhas de Código Lógicas (LOC)**. Para fins de consistência entre revisões e estimativas futuras, aplica-se a seguinte definição:

* **Conta como 1 LOC:** cada declaração executável terminada em `;` (ou equivalente na linguagem adotada).
* **Não conta:** linhas em branco; linhas exclusivamente de comentário; chaves de abertura/fechamento de bloco isoladas (`{` / `}`).

> Exemplo: um método C# com 15 declarações executáveis tem tamanho = **15 LOC**.

A contagem é registrada ao final de cada ciclo de codificação e utilizada para calcular a taxa histórica de produtividade do desenvolvedor (LOC/hora), que alimenta o método PROBE de estimativas (Doc 04, seção 5.5).

> **Referência PSP0.1:** Pesquise: `"PSP LOC counting standard logical lines"` ou `"logical lines of code PSP Humphrey"`.

### 7.2. Padrões de Projeto para Prevenção de Defeitos (PSP2)
A adoção de padrões de projeto reduz defeitos de Tipo 80 (Função) e Tipo 50 (Interface) ao impor estruturas de código com comportamento previsível e testável.

| Padrão de Projeto | Aplicação no Projeto | Tipo de Defeito Prevenido |
| :--- | :--- | :--- |
| **Repository Pattern** | Abstrai o acesso ao banco de dados; a lógica de negócio não acessa o ORM diretamente. | Tipo 80 (Função) — Lógica de query misturada com regra de negócio. |
| **Factory / Factory Method** | Centraliza a criação de objetos complexos, evitando duplicação de lógica de inicialização. | Tipo 40 (Atribuição) — Objeto mal inicializado em múltiplos pontos. |
| **DTO (Data Transfer Object)** | Separa os contratos de API da estrutura interna de entidades do banco de dados. | Tipo 50 (Interface) — Exposição acidental de campos internos ou sensíveis. |

> **Referência Padrões de Projeto:** GAMMA, E. et al. *Design Patterns: Elements of Reusable Object-Oriented Software*. Addison-Wesley, 1994. Pesquise: `"Gang of Four design patterns"` ou `"Repository Pattern C# .NET"`.
> **Referência PSP2:** HUMPHREY, Watts S., cap. 11 — "Design Reviews". Pesquise: `"PSP defect prevention design patterns PSP2"`.
