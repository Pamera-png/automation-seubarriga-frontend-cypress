/// <reference types="cypress" />
import HomePage from '../home/homePage'
class HomeLogic{
    clicarHome(){
        cy.get(HomePage.getLinkHome()).click()
    }
    
    consultarSaldo(){
        cy.xpath(HomePage.getSaldo('Carteira')).should('contain', '100,00')
    }
    
    rotaSaldo(){
        cy.route({
            method: 'GET',
            url: '/saldo',
            response: [
{
    conta_id: 999,
                conta: "Carteira",
                saldo: "4034.00"
            },
            {
                conta_id: 9909,
                conta: "Banco",
                saldo: "10000000.00"          
},
            ]
        }).as('saldoFinal')
    }
    
    consultarSaldoAtualizado(){
        cy.xpath(HomePage.getSaldo('Carteira')).should('contain', '4.034,00')
    }
    
}
export default new HomeLogic;