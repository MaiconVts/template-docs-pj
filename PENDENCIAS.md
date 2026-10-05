# Pendências

Histórico:
- **2026-10-05:** reestruturação de 13 documentos (PSP, PMBOK, ISO 25010) para um kit enxuto, organizado por risco. Versão antiga na tag `v1-completo`.
- **2026-10-05:** adicionados proposta curta, manutenção mensal, padrões comerciais e geração de PDF.
- **2026-10-05:** cláusulas reforçadas com base legal (propriedade intelectual, entrada como arras, limite de responsabilidade, LGPD, autonomia, assinatura eletrônica como título executivo, nota sobre CDC).

## Em aberto (dependem de você)

- [ ] **Revisão jurídica (uma consulta, vale para todos os projetos).** As cláusulas já foram ajustadas com base na lei (ver `docs/interno/padroes-comerciais.md`). Leve ao advogado a proposta (seções 5, 8 e 9), a proposta curta e a manutenção (seção 4), com estas perguntas:
  1. A cessão de direitos condicionada à quitação e a licença dos componentes genéricos estão bem redigidas (Lei 9.609/98, art. 4º)?
  2. O aceite tácito em 5 dias úteis, contado do aviso por escrito, se sustenta? E se o cliente for consumidor?
  3. A retenção da entrada como arras e a regra de cancelamento resistem ao CDC quando o cliente é pessoa física?
  4. O limite de responsabilidade (valor recebido, sem lucros cessantes) é válido entre empresas? Vale incluir um teto de horas para a garantia?
  5. As cláusulas de LGPD bastam para o papel de operador, ou é preciso um acordo de tratamento de dados separado para clientes com dados sensíveis?
  6. A cláusula de autonomia reduz o risco de vínculo empregatício em contratos longos com um único cliente?
  7. Que provedor de assinatura eletrônica usar para garantir o título executivo (CPC, art. 784, §4º)? Qual o foro a indicar?
- [ ] **Confirmar os valores** em `docs/interno/padroes-comerciais.md`, principalmente a **hora de referência** (está em branco) e os valores dos planos de manutenção.
- [ ] **Identidade visual dos PDFs:** trocar `--marca` em `ferramentas/estilo.css` e, se quiser, incluir um logo.
- [ ] **Usar em 1 ou 2 projetos reais** e ajustar com base na retrospectiva do que faltou ou sobrou.

## Ideias para depois (só se a prática pedir)

- Modelo de proposta para **banco de horas** (escopo aberto, cobrança por hora consumida).
- Checklist de **onboarding de cliente** (acessos, contas no nome do cliente, canal de comunicação).
- Remover automaticamente as instruções (`>` e itálico) na geração do PDF. Hoje é preciso apagar à mão, e o script só avisa os placeholders.
