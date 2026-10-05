# Pendências

Histórico:
- **2026-10-05:** reestruturação de 13 documentos (PSP, PMBOK, ISO 25010) para um kit enxuto, organizado por risco. Versão antiga na tag `v1-completo`.
- **2026-10-05:** adicionados proposta curta, manutenção mensal, padrões comerciais e geração de PDF.
- **2026-10-05:** cláusulas reforçadas com base legal (propriedade intelectual, entrada como arras, limite de responsabilidade, LGPD, autonomia, assinatura eletrônica como título executivo, nota sobre CDC).

## Em aberto (dependem de você)

- [ ] **Revisão jurídica:** levar `docs/interno/revisao-juridica.md` (ou o PDF dele) para a advogada. Ele tem o contexto, as cláusulas, a base legal, as perguntas e o campo de parecer. Depois, aplicar os ajustes nos documentos e guardar o parecer assinado.
- [ ] **Confirmar os valores** em `docs/interno/padroes-comerciais.md`, principalmente a **hora de referência** (está em branco) e os valores dos planos de manutenção.
- [ ] **Identidade visual dos PDFs:** trocar `--marca` em `ferramentas/estilo.css` e, se quiser, incluir um logo.
- [ ] **Usar em 1 ou 2 projetos reais** e ajustar com base na retrospectiva do que faltou ou sobrou.

## Ideias para depois (só se a prática pedir)

- Modelo de proposta para **banco de horas** (escopo aberto, cobrança por hora consumida).
- Checklist de **onboarding de cliente** (acessos, contas no nome do cliente, canal de comunicação).
- Remover automaticamente as instruções (`>` e itálico) na geração do PDF. Hoje é preciso apagar à mão, e o script só avisa os placeholders.
