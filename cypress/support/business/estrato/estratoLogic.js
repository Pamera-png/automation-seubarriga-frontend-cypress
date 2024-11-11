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
        
    clicarEstrato(){
        cy.get(EstratoPage.getLinkEstrato()).click()
    }
 
    contarLinhas(){
        cy.get(EstratoPage.getLinhas()).should('have.length', 7)
    }

    buscarMovimentacao(){
        cy.xpath(EstratoPage.getFnBuscarElemento('Desc', '123')).should('exist')
    }

}
export default new EstratoLogic;