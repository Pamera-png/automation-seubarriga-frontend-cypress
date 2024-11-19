/// <reference types="cypress" />
import EstratoPage from '../estrato/estratoPage'
class EstratoLogic{
    rotaMovimentacaoSalva(){
        cy.route({
            method: 'GET',
            url: '/extrato/**',
            response: 'fixture:movimentacaoSalva'
        })
            }

            rotaAlterarMovimentacao(){
                cy.route({
                    method: 'GET',
                    url: '/transacoes/**',
                    response: {
                        "conta": "Conta para saldo",
                        "id": 31436,
                        "descricao": "Movimentacao 1, calculo saldo",
                        "envolvido": "CCC",
                        "observacao": null,
                        "tipo": "REC",
                        "data_transacao": "2019-11-13T03:00:00.000Z",
                        "data_pagamento": "2019-11-13T03:00:00.000Z",
                        "valor": "3500.00",
                        "status": false,
                        "conta_id": 42079,
                        "usuario_id": 1,
                        "transferencia_id": null,
                        "parcelamento_id": null
                    }
                    })
                    
                cy.route({
                    method: 'PUT',
                    url: '/transacoes/**',
                    response: {
                        "conta": "Conta para saldo",
                                "id": 31436,
                                "descricao": "Movimentacao 1, calculo saldo",
                                "envolvido": "CCC",
                                "observacao": null,
                                "tipo": "REC",
                                "data_transacao": "2019-11-13T03:00:00.000Z",
                                "data_pagamento": "2019-11-13T03:00:00.000Z",
                                "valor": "3500.00",
                                "status": false,
                                "conta_id": 42079,
                                "usuario_id": 1,
                                "transferencia_id": null,
                                "parcelamento_id": null
                    }
                })                
            }

    clicarEstrato(){
        cy.get(EstratoPage.getLinkEstrato()).click()
    }
 
    contarLinhas(){
        cy.get(EstratoPage.getLinhas()).should('have.length', 7)
    }

    buscarMovimentacao(){
        cy.xpath(EstratoPage.getFnBuscarElemento('Desc', '123')).should('exist')
    }

    clicarAlterarMovimentacao(){
        cy.xpath(EstratoPage.getFnAlterar('Movimentacao 1, calculo saldo')).click()
        }
        
        validarDescricao(){
        cy.get(EstratoPage.getTxtDescricao()).should('have.value', 'Movimentacao 1, calculo saldo')
        }
        
        clicarAlterarStatus(){
            cy.get(EstratoPage.getBtnAlterarStatus()).click()
            }
            
            clicarSalvar(){
                cy.get(EstratoPage.getBtnSalvar()).click()
            }
        
        validarMensagem(){
cy.get(EstratoPage.getLblValidarMensagem()).should('contain', 'sucesso')
        }

        rotaDeletarMovimentacao(){
cy.route({
method: 'DELETE',
url: '/transacoes/**',
response: {
    },
    status: 204
}).as('del')
        }

        clicarDeletarMovimentacao(){
            cy.xpath(EstratoPage.getFnDeletar('Movimentacao para exclusao')).click()
                }
            
}
export default new EstratoLogic;