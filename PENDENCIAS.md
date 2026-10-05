# Pendências

Histórico:
- **2026-10-05:** reestruturação de 13 documentos (PSP, PMBOK, ISO 25010) para um kit enxuto, organizado por risco. Versão antiga na tag `v1-completo`.
- **2026-10-05:** adicionados proposta curta, manutenção mensal, padrões comerciais e geração de PDF.

## Em aberto (dependem de você)

- [ ] **Revisão jurídica**, uma vez, de: aceite tácito, propriedade após quitação, multa e suspensão por atraso, cancelamento, LGPD (proposta, seções 5 e 8, e manutenção, seção 4). Um advogado revisa isso em uma consulta, e a revisão vale para todos os projetos.
- [ ] **Confirmar os valores** em `docs/interno/padroes-comerciais.md`, principalmente a **hora de referência** (está em branco) e os valores dos planos de manutenção.
- [ ] **Identidade visual dos PDFs:** trocar `--marca` em `ferramentas/estilo.css` e, se quiser, incluir um logo.
- [ ] **Usar em 1 ou 2 projetos reais** e ajustar com base na retrospectiva do que faltou ou sobrou.

## Ideias para depois (só se a prática pedir)

- Modelo de proposta para **banco de horas** (escopo aberto, cobrança por hora consumida).
- Checklist de **onboarding de cliente** (acessos, contas no nome do cliente, canal de comunicação).
- Remover automaticamente as instruções (`>` e itálico) na geração do PDF. Hoje é preciso apagar à mão, e o script só avisa os placeholders.
