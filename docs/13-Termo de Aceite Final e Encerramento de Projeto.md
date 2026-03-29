# 13 - Termo de Aceite Final e Encerramento de Projeto

**Referência:** [09 - Plano de Testes de Software](09-Plano%20de%20Testes%20de%20Software.md) | [10 - Registro de Testes de Software](10-Registro%20de%20Testes%20de%20Software.md) | [11 - Plano de Testes de Usabilidade](11-Plano%20de%20Testes%20de%20Usabilidade.md) | [12 - Registro de Testes de Usabilidade](12-Registro%20de%20Testes%20de%20Usabilidade.md)

Este documento formaliza a entrega definitiva do software, atestando que o sistema foi construído, testado e validado em conformidade com os requisitos acordados no início do projeto.

## 1. Declaração de Recebimento e Homologação
Eu, **[Nome do Cliente ou Representante Legal]**, na qualidade de representante de **[Razão Social / CNPJ]**, declaro ter recebido acesso integral ao sistema **[Nome do Projeto / Sistema]** operando em ambiente de produção (ou ambiente de hospedagem homologado).

Atesto que acompanhei as demonstrações realizadas ao longo dos ciclos de desenvolvimento iterativos, participei (ou deleguei representante para participar) dos Testes de Software e Usabilidade (Docs 09, 10, 11 e 12) e concordo que o software atende integralmente aos Requisitos Funcionais e Não Funcionais estabelecidos na Especificação do Projeto.

Reconheço que o desenvolvimento foi conduzido com práticas do **Personal Software Process (PSP)**, incluindo rastreamento de defeitos por tipo e fase de injeção, revisões de design e código documentadas (PSP2) e ciclos iterativos com post-mortem (PSP3). Os relatórios de qualidade derivados desse processo (Doc 10, seção 2) estão disponíveis para auditoria.

Declaro o sistema **APROVADO E HOMOLOGADO**.

## 2. Entregáveis e Transferência
Reconheço o recebimento dos seguintes ativos técnicos:
* [ ] Credenciais de acesso com perfil de Administrador no ambiente de produção.
* [ ] Transferência de propriedade do repositório de código-fonte (GitHub / GitLab).
* [ ] Documentação técnica completa e manuais de uso estruturados.
* [ ] Chaves de acesso aos serviços de infraestrutura (Banco de Dados, Hospedagem, DNS).

## 3. Garantia e Encerramento
Com a assinatura do presente termo, o projeto é considerado concluído e entregue. Inicia-se, a partir desta data, o período de **[X] dias de garantia técnica**, que cobre exclusivamente a correção de *bugs* ou falhas ocultas nas funcionalidades já aprovadas e homologadas.

Solicitações de melhorias, alterações de layout, novas integrações ou desenvolvimento de módulos adicionais não contemplados no escopo original deverão ser negociados formalmente sob novo contrato de prestação de serviços ou contrato de manutenção contínua.

## 4. Atestado de Qualidade de Processo (PSP3)

O desenvolvedor declara que, ao longo de todos os ciclos de desenvolvimento deste projeto:

- [ ] O tempo de trabalho foi registrado por fase em todos os ciclos (PSP0 — Log de Tempo, Doc 04, seção 5.1).
- [ ] Todos os defeitos identificados foram registrados com Tipo, Fase de Injeção e Fase de Remoção (PSP0 — Log de Defeitos, Doc 04, seção 5.2).
- [ ] O Padrão de Codificação (PSP0.1, Doc 07, seção 6) foi seguido e verificado em cada revisão de código.
- [ ] As revisões de design e de código (PSP2) foram executadas como etapas bloqueantes antes de cada Pull Request (Doc 04, seção 5.7).
- [ ] Os dados de cada ciclo foram registrados no Post-mortem (PSP3, Doc 04, seção 5.8), retroalimentando as estimativas do ciclo seguinte.
- [ ] O Phase Yield foi calculado e registrado no Doc 10, seção 2.

> **Referência PSP:** HUMPHREY, Watts S. *A Discipline for Software Engineering*. Addison-Wesley, 1995. Pesquise: `"PSP process attestation quality data post-mortem"` ou `"PSP3 cyclic development process improvement"`.

---

**Local e Data:** ____________________, ______ de ________________________ de 20____.

**Assinatura do Cliente / Contratante:** _________________________________________________

**Assinatura do Desenvolvedor / Contratada:** ____________________________________________
