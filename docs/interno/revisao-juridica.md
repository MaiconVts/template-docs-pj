# Revisão Jurídica do Kit de Documentação

**Solicitante:** Maicon Vitor Theodoro da Silva, desenvolvedor de software (PJ)
**Objetivo:** validar se as cláusulas-padrão das propostas comerciais têm respaldo legal e se protegem o prestador sem riscos de nulidade.

## Contexto

Presto serviços de desenvolvimento de software sob encomenda, por escopo fechado e por manutenção mensal. A maioria dos clientes é PJ (pequenas e médias empresas), mas ocasionalmente atendo pessoa física.

Não uso contrato separado. A **proposta aceita funciona como contrato**: o cliente assina eletronicamente (gov.br, Clicksign ou ZapSign) ou responde por e-mail "De acordo". Acima de R$ 15.000, ou com cliente corporativo, a ideia é usar um contrato formal com a proposta como anexo de escopo.

Os documentos a revisar são estes:

| Documento | Uso | Onde estão as cláusulas |
| :--- | :--- | :--- |
| `docs/essencial/01-proposta-e-escopo.md` | Projetos médios e grandes | Seções 5 (pagamento), 6 (responsabilidades do cliente), 7 (mudanças), 8 (entrega, garantia e propriedade) e 9 (aceite) |
| `docs/essencial/01-proposta-curta.md` | Trabalhos pequenos (uma página) | Seção "Condições" |
| `docs/essencial/04-manutencao-mensal.md` | Manutenção recorrente após a entrega | Seção 4 (condições) |
| `docs/essencial/03-entrega-e-aceite.md` | Termo de entrega e aceite | Seção 4 |

---

## Cláusulas e perguntas

Para cada item: o que a cláusula diz hoje, a base legal que considerei e o que preciso saber.

### 1. Propriedade intelectual

**Cláusula atual (proposta, seção 8):** os direitos patrimoniais sobre o código desenvolvido para o projeto são cedidos ao cliente com a quitação integral; até lá permanecem com o prestador, e o cliente pode usar o que já foi entregue e pago. Ferramentas e componentes genéricos preexistentes ou não específicos do negócio do cliente ficam com o prestador, com licença gratuita, perpétua e não exclusiva ao cliente. O prestador pode citar o projeto em portfólio.

**Base considerada:** Lei 9.609/98, art. 4º. Sem estipulação em contrário, o software desenvolvido sob encomenda pertence ao contratante.

**Perguntas:**
- A redação basta como "estipulação em contrário" para condicionar a cessão à quitação?
- A reserva dos componentes genéricos com licença ao cliente está adequada, ou é preciso listá-los?
- Faltam requisitos formais da cessão (forma escrita, objeto, prazo, território)?

### 2. Aceite tácito

**Cláusula atual (proposta, seção 8):** cada entrega é comunicada por escrito, e o cliente tem 5 dias úteis para testar e apontar problemas. As partes combinam que, sem retorno nesse prazo, a entrega é considerada aceita.

**Base considerada:** CC, art. 111. O silêncio vale como anuência quando as circunstâncias ou os usos o autorizarem e não for necessária declaração expressa. Por isso a cláusula é escrita e o aviso é guardado como evidência.

**Perguntas:**
- A cláusula se sustenta entre PJs?
- Se o cliente for consumidor, ela pode ser considerada abusiva (CDC, art. 51)?
- O prazo de 5 dias úteis é razoável?

### 3. Entrada e cancelamento

**Cláusula atual (proposta, seção 5):**
- O trabalho começa após a compensação da entrada (30%), que remunera o levantamento, o planejamento e a reserva de agenda.
- Qualquer parte pode encerrar o projeto com aviso por escrito. O cliente paga as etapas concluídas e o proporcional da etapa em andamento, e recebe o que foi produzido.
- Se o cliente desistir antes do início, a entrada fica retida como sinal (arras penitenciais, CC, art. 420).

**Base considerada:** CC, arts. 417 a 420. CDC, arts. 51 e 53 (risco de abusividade na perda total de valores pagos).

**Perguntas:**
- A qualificação como arras penitenciais está correta e protege a retenção?
- Contra pessoa física, a retenção integral é defensável, ou o ideal é reter só parte?
- A regra de encerramento por qualquer parte precisa de prazo de aviso ou de multa?

### 4. Atraso de pagamento e suspensão

**Cláusula atual (proposta, seção 5; manutenção, seção 4):** multa de 2%, juros de 1% ao mês e correção pelo IPCA. Após 10 dias de atraso, o trabalho é suspenso e os prazos se estendem pelo mesmo período.

**Base considerada:**
- CDC, art. 52, §1º: multa de no máximo 2% em relação de consumo.
- Lei 14.905/2024: afasta a Lei de Usura entre PJs; a taxa legal supletiva é Selic menos IPCA.
- CC, art. 476: exceção de contrato não cumprido, que fundamenta a suspensão.

**Perguntas:**
- Os índices estão corretos e bem redigidos?
- A suspensão após 10 dias é válida sem notificação prévia, ou devo prever um aviso?

### 5. Limite de responsabilidade e garantia

**Cláusula atual (proposta, seção 8):**
- Garantia de 60 dias (30 dias na proposta curta) para corrigir defeitos nas funcionalidades entregues, excluídas mudanças e problemas causados por terceiros ou pela infraestrutura.
- A responsabilidade total do prestador fica limitada ao valor recebido no projeto, sem lucros cessantes nem danos indiretos, exceto em caso de dolo ou culpa grave.

**Base considerada:** autonomia contratual entre empresas (CC, art. 421-A). Nulidade da limitação em relação de consumo (CDC, art. 51, I).

**Perguntas:**
- A limitação é válida entre PJs com essa redação?
- A garantia contratual conflita com os prazos legais de vícios (CC, art. 618, e CDC, art. 26)?

### 6. LGPD

**Cláusula atual (proposta, seção 8; manutenção, seção 4):** o cliente é o controlador e o prestador atua como operador. O prestador:
- segue as instruções do cliente;
- acessa dados reais somente quando necessário;
- adota medidas de segurança razoáveis;
- avisa o cliente sobre qualquer incidente de segurança;
- não retém dados após a entrega.

**Base considerada:** LGPD, arts. 37 a 42 (deveres do operador e responsabilidade solidária) e art. 46 (segurança).

**Perguntas:**
- Essas cláusulas bastam, ou é recomendável um acordo de tratamento de dados separado quando há dados sensíveis (saúde, financeiros)?

### 7. Autonomia (risco trabalhista)

**Cláusula atual (proposta, seção 8):** o serviço é prestado por empresa independente, sem exclusividade, subordinação ou controle de horário.

**Base considerada:** CLT, art. 3º (requisitos do vínculo) e jurisprudência sobre "pejotização". A cláusula sozinha não afasta o vínculo se a prática for de subordinação.

**Pergunta:**
- Há algo a acrescentar para contratos longos de manutenção com um único cliente?

### 8. Forma de aceite e cobrança

**Prática atual:** assinatura eletrônica como forma preferida; aceite por e-mail só em trabalhos pequenos.

**Base considerada:**
- CPC, art. 784, III e §4º (Lei 14.620/2023): o contrato assinado eletronicamente é título executivo extrajudicial sem testemunhas.
- MP 2.200-2/2001 e Lei 14.063/2020: validade das assinaturas eletrônicas.
- O aceite por e-mail forma o contrato, mas a cobrança exigiria ação monitória.

**Perguntas:**
- A assinatura eletrônica avançada (Clicksign, ZapSign) basta para o título executivo, ou é preciso a qualificada (ICP-Brasil) ou a gov.br?
- Devo incluir cláusula de foro? Qual?

### 9. Pontos que eu possa ter esquecido

- Falta alguma cláusula essencial para esse tipo de serviço (foro, comunicações oficiais, cessão do contrato, caso fortuito)?
- O valor de corte de R$ 15.000 para exigir contrato formal faz sentido?

---

## Parecer

| Item | Situação | Observação |
| :--- | :---: | :--- |
| 1. Propriedade intelectual | ☐ OK ☐ Ajustar | |
| 2. Aceite tácito | ☐ OK ☐ Ajustar | |
| 3. Entrada e cancelamento | ☐ OK ☐ Ajustar | |
| 4. Atraso e suspensão | ☐ OK ☐ Ajustar | |
| 5. Responsabilidade e garantia | ☐ OK ☐ Ajustar | |
| 6. LGPD | ☐ OK ☐ Ajustar | |
| 7. Autonomia | ☐ OK ☐ Ajustar | |
| 8. Aceite e cobrança | ☐ OK ☐ Ajustar | |
| 9. Pontos esquecidos | ☐ OK ☐ Ajustar | |

**Conclusão:**

☐ As cláusulas-padrão têm respaldo legal e podem ser usadas como estão.
☐ As cláusulas têm respaldo legal após os ajustes indicados acima.

**Advogada responsável:** ______________________________ **OAB:** __________

**Data:** ___/___/_____
