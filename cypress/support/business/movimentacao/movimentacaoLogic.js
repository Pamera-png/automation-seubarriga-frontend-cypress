/// <reference types="cypress" />
import MovimentacaoPage from '../movimentacao/movimentacaoPage'
class MovimentacaoLogic{
    rotaMovimentacoes(){
cy.route({
    method: 'POST',
    url: '/transacoes',
    response: {
        "id": 31433, 
        "descricao": "asdasd", 
        "envolvido": "sdfsdfs", 
        "observacao": null, 
        "tipo": "DESP", 
        "data_transacao": "2019-11-13T03:00:00.000Z", 
        "data_pagamento": "2019-11-13T03:00:00.000Z", 
        "valor": "232.00", 
        "status": false, 
        "conta_id": 42069, 
        "usuario_id": 1, 
        "transferencia_id": null, 
        "parcelamento_id": null 
    }
})
    }

    rotaMovimentacaoSalva(){
cy.route({
    method: 'GET',
    url: '/extrato/**',
    response: 'fixture:movimentacaoSalva'
})
    }

    cadastrarMovimentacao(){
        cy.get(MovimentacaoPage.getLinkCadastrarMovimentacao()).click()
    }
    
    digitarDescricao(){
        cy.get(MovimentacaoPage.getTxtDescricao()).type('Desc')
    }
    
    digitarValor(){
    cy.get(MovimentacaoPage.getTxtValor()).type('123')
    }
    
    digitarInteressado(){
    cy.get(MovimentacaoPage.getTxtInteressado()).type('Inter')
    }

    selecionarConta(){
cy.get(MovimentacaoPage.getBtnConta()).select('Banco')
    }

    clicarStatus(){
    cy.get(MovimentacaoPage.getBtnStatus()).click()
    }
    
    clicarSalvar(){
        cy.get(MovimentacaoPage.getBtnSalvar()).click()
    }
    
    validarMovimentacaoSucesso(){
        cy.get(MovimentacaoPage.getLblValidarMensagem()).should('contain', 'sucesso')
    }
    
}
export default new MovimentacaoLogic;