# Proposta e Escopo — [Nome do Projeto]

**Cliente:** [Razão social / CNPJ ou Nome / CPF]
**Prestador:** [Razão social / CNPJ]
**Data:** DD/MM/AAAA · **Versão:** 1 · **Validade da proposta:** 15 dias

> Documento único de alinhamento. Depois de aceito, ele é a referência do que foi combinado.
> Escreva para o cliente entender. Apague as instruções em itálico antes de enviar.

---

## 1. Contexto e objetivo

*Em 3 a 5 linhas: como o cliente trabalha hoje, qual é o problema e o que muda quando o sistema estiver pronto.*

> Ex.: Hoje a [Empresa] controla os pedidos em planilhas separadas por vendedor, o que gera retrabalho e erros de estoque. O objetivo é centralizar os pedidos num sistema web único, com controle de acesso por perfil e relatório semanal.

**Como saberemos que deu certo:** *(1 a 3 resultados observáveis)*
- [Ex.: Todos os pedidos registrados no sistema, sem planilha paralela]
- [Ex.: Relatório semanal gerado em 1 clique]

## 2. Quem vai usar

| Perfil | O que faz no sistema |
| :--- | :--- |
| Administrador | [Ex.: Gerencia usuários e vê todos os relatórios] |
| Operador | [Ex.: Cadastra e atualiza pedidos do seu setor] |

## 3. O que está incluso

*Liste as entregas como funcionalidades que o cliente reconhece. Cada item precisa ser verificável na entrega.*

| # | Funcionalidade | Detalhe / regra importante |
| :--- | :--- | :--- |
| 1 | Login com e-mail e senha | Recuperação de senha por e-mail |
| 2 | Cadastro de [Entidade] | Operador só inativa; exclusão definitiva só pelo Administrador |
| 3 | Relatório de [X] | Filtro por período, exportação em PDF |
| 4 | Publicação em produção | Em infraestrutura contratada pelo cliente (ver seção 6) |

**Requisitos de qualidade combinados:** *(apenas os que importam para este cliente)*
- Funciona em celular e computador (navegadores atualizados).
- Senhas armazenadas com criptografia; dados trafegam por HTTPS.
- [Ex.: Telas principais carregam em até 3 segundos com até X registros]

## 4. O que NÃO está incluso

*A seção mais importante para evitar conflito. Liste o que o cliente pode presumir que vem junto.*

- Aplicativo para lojas (Android/iOS).
- Migração ou importação de dados de sistemas antigos.
- Criação de identidade visual (logo, paleta), textos e imagens do conteúdo.
- Integrações não listadas na seção 3.
- Suporte, manutenção e hospedagem após o período de garantia.

## 5. Etapas, prazos e pagamento

| Etapa | Entrega | Prazo estimado | Pagamento |
| :--- | :--- | :--- | :--- |
| 0. Início | Proposta aceita | DD/MM | [Ex.: 30%] |
| 1. [Ex.: Protótipo das telas] | Telas navegáveis para aprovação | DD/MM | — |
| 2. [Ex.: Módulo de cadastro] | Funcionando em ambiente de testes | DD/MM | [Ex.: 30%] |
| 3. Entrega final | Sistema em produção + aceite (doc 03) | DD/MM | [Ex.: 40%] |

**Valor total:** R$ [valor] · **Forma de pagamento:** [PIX / boleto], com nota fiscal, vencimento em [5] dias da emissão.

- O trabalho começa após a compensação da entrada, que remunera o levantamento, o planejamento e a reserva de agenda.
- Atraso de pagamento gera multa de 2%, juros de 1% ao mês e correção pelo IPCA. Após 10 dias de atraso, o trabalho é suspenso e os prazos se estendem pelo mesmo período.
- Qualquer parte pode encerrar o projeto com aviso por escrito. Nesse caso, o cliente paga as etapas concluídas e o proporcional da etapa em andamento, e recebe tudo o que foi produzido até ali. Se o cliente desistir antes do início do trabalho, a entrada fica retida como sinal (arras penitenciais, art. 420 do Código Civil).

*Os prazos já incluem margem para imprevistos normais. Prefira prazos em semanas a datas exatas quando o início depender do cliente. Valores padrão em `interno/padroes-comerciais.md`.*

## 6. Responsabilidades do cliente

Para cumprir os prazos acima, o cliente se compromete a:

- Indicar **um responsável** para decisões e aprovações: [Nome, e-mail, telefone].
- Responder dúvidas e aprovar entregas em até **[3] dias úteis**.
- Fornecer conteúdos, acessos e dados de teste até [DD/MM ou "o início da etapa correspondente"].
- Contratar e manter em seu nome os serviços de infraestrutura (hospedagem, domínio, e-mail transacional), com custos por conta do cliente.

Atrasos nesses itens adiam os prazos na mesma proporção, sem penalidade ao prestador.

## 7. Como funcionam mudanças

- Ajustes dentro do que foi descrito na seção 3 estão incluídos, com até **[2] rodadas de revisão** por etapa.
- Qualquer item novo ou mudança de regra é tratado como **mudança de escopo**: envio uma estimativa de prazo e valor (doc 02) e só executo após aprovação por escrito.
- Mudanças pequenas podem ser trocadas por itens de mesmo tamanho ainda não iniciados, sem custo, se ambos concordarem.

## 8. Entrega, garantia e propriedade

- **Homologação:** cada entrega é comunicada por escrito (e-mail ou mensagem), e o cliente tem [5] dias úteis para testar e apontar problemas. As partes combinam que, sem retorno nesse prazo, a entrega é considerada aceita.
- **Garantia:** [60] dias após o aceite final para corrigir, sem custo, defeitos em funcionalidades entregues. Não cobre mudanças, novos recursos nem problemas causados por alterações de terceiros ou de infraestrutura.
- **Propriedade intelectual:** os direitos patrimoniais sobre o código desenvolvido para este projeto são **cedidos ao cliente com a quitação integral**; até lá, permanecem com o prestador, e o cliente pode usar o que já foi entregue e pago. Ficam com o prestador as ferramentas, bibliotecas e componentes genéricos que ele já tinha ou que não são específicos do negócio do cliente; sobre eles, o cliente recebe uma licença de uso gratuita, perpétua e não exclusiva, para usar e alterar o sistema. Bibliotecas de terceiros seguem suas próprias licenças. O prestador pode citar o projeto em portfólio, sem expor dados nem informações confidenciais [remova se o cliente não autorizar].
- **Responsabilidade:** o prestador responde pelos defeitos do que entregou, nos termos da garantia. A responsabilidade total do prestador fica limitada ao valor recebido neste projeto e não inclui lucros cessantes nem danos indiretos, exceto em caso de dolo ou culpa grave.
- **Dados pessoais (LGPD):** o cliente é o controlador dos dados tratados pelo sistema; o prestador atua como operador, segue as instruções do cliente, acessa dados reais somente quando necessário, adota medidas de segurança razoáveis, avisa o cliente sobre qualquer incidente de segurança assim que tomar conhecimento e não retém dados após a entrega.
- **Confidencialidade:** informações do negócio do cliente não serão divulgadas, inclusive após o fim do projeto.
- **Autonomia:** o serviço é prestado por empresa independente, sem exclusividade, subordinação ou controle de horário. O prestador organiza o próprio trabalho para cumprir as entregas combinadas.

## 9. Aceite

> **Prefira assinatura eletrônica** (gov.br, Clicksign, ZapSign, DocuSign). Assinada assim, a proposta vale como título executivo, sem precisar de testemunhas (art. 784, III e §4º, do CPC): se o cliente não pagar, a cobrança judicial vai direto para a execução.
> Aceite por e-mail ("De acordo com a proposta [Nome do Projeto] v1") também forma o contrato, mas a cobrança exige uma ação monitória, que é mais lenta. Use só em trabalhos pequenos.
> Guarde a evidência em `evidencias/`.
> Para projetos acima de [R$ 15.000] ou com cliente corporativo, use também um contrato revisado por advogado; esta proposta passa a ser o anexo de escopo.

**Cliente:** ______________________________ Data: ___/___/_____

**Prestador:** ____________________________ Data: ___/___/_____
