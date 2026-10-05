# [Nome do Projeto]

> Copie este arquivo para a raiz do repositório do cliente como `README.md`.
> Ele é a documentação técnica do projeto e o principal item da entrega. Mantenha-o atualizado à medida que o projeto avança, sem deixar para o final.

[1 linha: o que o sistema faz e para quem.]

**Produção:** [URL] · **Homologação:** [URL] · **Responsável técnico:** [Nome, contato]

## Stack

| Camada | Tecnologia | Onde roda |
| :--- | :--- | :--- |
| Front-end | [Ex.: React + Vite] | [Ex.: Vercel] |
| Back-end | [Ex.: Node.js / .NET] | [Ex.: Render / VPS] |
| Banco | [Ex.: PostgreSQL] | [Ex.: Supabase / Neon] |
| Outros | [Ex.: Resend (e-mail), S3 (arquivos)] | — |

## Rodando localmente

```bash
# pré-requisitos: [Ex.: Node 22, Docker]
cp .env.example .env    # preencha as variáveis abaixo
[comando de instalação]
[comando para subir o banco / migrations]
[comando para rodar]
```

### Variáveis de ambiente

| Variável | Para que serve | Exemplo |
| :--- | :--- | :--- |
| `DATABASE_URL` | Conexão com o banco | `postgres://...` |
| `[OUTRA]` | [...] | [...] |

## Testes

```bash
[comando de testes]
```

[Ex.: Os testes cobrem as regras de negócio principais. O CI roda testes e lint em cada pull request.]

## Publicação (deploy)

[Ex.: Merge na `main` publica automaticamente na Vercel e no Render. Migrations rodam no start da API.]

## Backup e recuperação

[Ex.: Backup diário automático do provedor, retido por 7 dias. Para restaurar: ...]

## Estrutura de pastas

```
[árvore resumida, só as pastas que importam]
```

## Regras de negócio que não são óbvias no código

- [Ex.: Operador só inativa registros; exclusão definitiva é exclusiva do Administrador.]
- [Ex.: CPF/CNPJ validado pelos dígitos verificadores no back-end.]

## Decisões técnicas

Ver [`docs/decisoes.md`](docs/decisoes.md).
