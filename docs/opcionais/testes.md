# Testes — [Nome do Projeto]

> **Use quando:** o cliente pede evidência formal de testes, o sistema lida com dinheiro ou dados sensíveis ou haverá teste com usuários reais.
> **No dia a dia:** os testes automatizados ficam no código e rodam no CI. Este arquivo só resume e registra o que o cliente precisa ver.

## 1. O que é testado e como

| Área | Como | Onde ver |
| :--- | :--- | :--- |
| Regras de negócio | Testes automatizados (unitários / integração) | CI: [link] |
| Fluxos principais | [Ex.: E2E com Playwright / roteiro manual abaixo] | [link] |
| Segurança básica | Dependências auditadas, sem segredos no código, validação no back-end, HTTPS | [Ex.: Dependabot / `npm audit`] |
| Dados pessoais | Exclusão e anonimização funcionam; nada sensível em logs | Roteiro abaixo |

## 2. Roteiro de homologação

*Lista que você e o cliente seguem antes do aceite. Mantenha curta: os caminhos que, se falharem, tornam o sistema inútil.*

| # | Passo | Resultado esperado | OK |
| :--- | :--- | :--- | :---: |
| 1 | Entrar com usuário Administrador | Vê o painel completo | [ ] |
| 2 | Operador tenta excluir um registro | Só aparece a opção de inativar | [ ] |
| 3 | Gerar relatório do último mês em PDF | Arquivo baixa com os dados corretos | [ ] |
| 4 | Recuperar senha pelo e-mail | Recebe o link e consegue trocar a senha | [ ] |

## 3. Problemas encontrados

| # | Data | Problema | Gravidade | Situação |
| :--- | :--- | :--- | :--- | :--- |
| P-01 | DD/MM | [Descrição] | Bloqueia / Atrapalha / Cosmético | Corrigido em DD/MM |

*Problemas "Bloqueia" impedem o aceite. Os demais podem entrar como pendência aceita no documento de entrega.*

## 4. Teste com usuários (opcional)

> Só se combinado na proposta. Formato enxuto: 3 a 5 pessoas do perfil real, 20 a 30 minutos cada, uma tarefa por item principal.
> Peça consentimento para gravar e apague as gravações ao fim do projeto (LGPD).

| Tarefa | Concluíram sem ajuda | Onde travaram | Ação |
| :--- | :---: | :--- | :--- |
| [Ex.: Cadastrar um pedido] | 4 de 5 | [Ex.: Não acharam o botão salvar no celular] | [Ex.: Botão fixo no rodapé] |
