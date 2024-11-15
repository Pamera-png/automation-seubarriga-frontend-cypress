/// <reference types="cypress" />
import ColorsPage from '../colors/colorsPage'
class ColorsLogic{
    rotaMovimentacaoSalva(){
        cy.route({
            method: 'GET',
            url: '/extrato/**',
            response: [
                { "conta": "Conta para movimentacoes", "id": 31434, "descricao": "Receita paga", "envolvido": "AAA", "observacao": null, "tipo": "REC", "data_transacao": "2019-11-13T03:00:00.000Z", "data_pagamento": "2019-11-13T03:00:00.000Z", "valor": "-1500.00", "status": true, "conta_id": 42077, "usuario_id": 1, "transferencia_id": null, "parcelamento_id": null },
                { "conta": "Conta com movimentacao", "id": 31435, "descricao": "Receita pendente", "envolvido": "BBB", "observacao": null, "tipo": "REC", "data_transacao": "2019-11-13T03:00:00.000Z", "data_pagamento": "2019-11-13T03:00:00.000Z", "valor": "-1500.00", "status": false, "conta_id": 42078, "usuario_id": 1, "transferencia_id": null, "parcelamento_id": null },
                { "conta": "Conta para saldo", "id": 31436, "descricao": "Despesa paga", "envolvido": "CCC", "observacao": null, "tipo": "DESP", "data_transacao": "2019-11-13T03:00:00.000Z", "data_pagamento": "2019-11-13T03:00:00.000Z", "valor": "3500.00", "status": true, "conta_id": 42079, "usuario_id": 1, "transferencia_id": null, "parcelamento_id": null },
                { "conta": "Conta para saldo", "id": 31437, "descricao": "Despesa pendente", "envolvido": "DDD", "observacao": null, "tipo": "DESP", "data_transacao": "2019-11-13T03:00:00.000Z", "data_pagamento": "2019-11-13T03:00:00.000Z", "valor": "-1000.00", "status": false, "conta_id": 42079, "usuario_id": 1, "transferencia_id": null, "parcelamento_id": null }
            ]
        })
            }

    clicarEstrato(){
        cy.get(ColorsPage.getLinkEstrato()).click()
    }
 
    verificarReceitaPaga(){
        cy.xpath(ColorsPage.getFnLinha('Receita paga')).should('have.class', 'receitaPaga')
    }

    verificarReceitaPendente(){
        cy.xpath(ColorsPage.getFnLinha('Receita pendente')).should('have.class', 'receitaPendente')
    }

    verificarDespesaPaga(){
        cy.xpath(ColorsPage.getFnLinha('Despesa paga')).should('have.class', 'despesaPaga')
    }

    verificarDespesaPendente(){
        cy.xpath(ColorsPage.getFnLinha('Despesa pendente')).should('have.class', 'despesaPendente')
    }

}
export default new ColorsLogic;