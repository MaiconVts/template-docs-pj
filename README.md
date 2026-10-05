# template-docs-pj

Kit enxuto de documentação para quem presta serviço de desenvolvimento de software como PJ.

**Princípio:** documentar o suficiente para combinar o escopo, cobrar o que é extra, entregar com segurança e orçar melhor no próximo projeto. A documentação acompanha o risco do projeto, não um modelo fixo.

---

## Qual kit usar

| Tamanho do projeto | Use | Tempo de preenchimento |
| :--- | :--- | :--- |
| **Pequeno** (até ~2 semanas, poucas telas, landing page, ajuste pontual) | `01-proposta-e-escopo` (sem as seções 2 e 6, se não fizerem sentido) + aceite por e-mail | ~30 min |
| **Médio** (1–3 meses, sistema web sob medida) | Essencial completo + `README-do-projeto` + `decisoes` | ~2 h no início, minutos por semana |
| **Grande ou cliente corporativo** (vários módulos, dados sensíveis, várias pessoas aprovando) | Tudo acima + `opcionais/` conforme a necessidade + contrato com advogado | conforme o caso |

Em qualquer tamanho, mande o **status semanal** (`interno/modelos-de-mensagem.md`) e preencha a **retrospectiva** no fim.

---

## Estrutura

```
docs/
├── essencial/                    vai para o cliente
│   ├── 01-proposta-e-escopo.md   escopo, fora do escopo, etapas, pagamento, regras. O documento que protege.
│   ├── 02-mudancas-de-escopo.md  histórico de pedidos extras e o modelo de orçamento de cada um
│   └── 03-entrega-e-aceite.md    conferência, itens transferidos, garantia, aceite (final ou por etapa)
├── projeto/                      vai para o repositório do cliente
│   ├── README-do-projeto.md      stack, como rodar, deploy, backup, regras não óbvias
│   └── decisoes.md               registro curto de decisões técnicas (ADR simplificado)
├── opcionais/                    só quando o projeto pede
│   ├── interface.md              protótipo, telas e padrão visual
│   └── testes.md                 roteiro de homologação, problemas e teste com usuários
└── interno/                      só para você
    ├── modelos-de-mensagem.md    proposta, status semanal, aprovação, fora do escopo, encerramento
    └── retrospectiva.md          estimado vs. real, valor/hora real, ajustes no orçamento
```

## Como usar em um projeto

1. Copie `docs/essencial/01-proposta-e-escopo.md`, preencha e envie com a mensagem "Envio da proposta".
2. Com o aceite, salve a evidência em `evidencias/` (pasta privada sua, fora do repositório do cliente).
3. No repositório do cliente, crie o `README.md` a partir de `projeto/README-do-projeto.md` e vá completando durante o projeto.
4. Pedido novo? Registre em `02-mudancas-de-escopo.md` e responda com o modelo "Resposta a pedido fora do escopo".
5. Para fechar, use `03-entrega-e-aceite.md`, depois preencha a retrospectiva.

**Placeholders:** `[texto]` e `DD/MM` devem ser substituídos; linhas em *itálico* e blocos `>` de instrução devem ser apagados antes de enviar.

## Aviso

Este kit é um instrumento de alinhamento e gestão. Para projetos de valor alto ou com cliente corporativo, use também um contrato revisado por advogado, com a proposta como anexo de escopo.

---

*A versão anterior (13 documentos, com PSP, PMBOK e ISO 25010) está no histórico do git, no commit `aad6a18`.*

*Uso livre. Adapte ao seu jeito de trabalhar.*
