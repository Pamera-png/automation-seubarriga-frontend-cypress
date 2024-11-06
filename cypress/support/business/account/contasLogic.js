/// <reference types="cypress" />
import ContasPage from '../account/contasPage'

class ContasLogic{
    rotaInserirConta(){
        cy.route({
            method: 'POST',
            url: '/contas',
            response: {
id: 3,
nome: 'Conta de teste',
visivel: true,
usuario_id: 1
            }
        }).as('saveConta')
    }

    clicarSettings(){        
        cy.get(ContasPage.getBtnSettings()).click()
    }

    clicarAccounts(){
        cy.xpath(ContasPage.getLinkContas()).click()
    }

    rotaObterConta(){
        cy.route({
            method: 'GET',
            url: '/contas',
            response: [
                {
                    id: 1, 
                    nome: 'Carteira', 
                    visivel: true, 
                    usuario_id: 1
            },
            {
                id: 2, 
                nome: 'Banco', 
                visivel: true, 
                usuario_id: 1
            },
            {
                id: 3, 
                nome: 'Conta de teste',
                visivel: true, 
                usuario_id: 1
            },
            ]
                    }).as('contasSave')            
    }

    inserirNomeConta(){
cy.get(ContasPage.getTxtNomeConta())
.type(ContasPage.getTypeNome())
    }

    clicarSalvar(){
        cy.xpath(ContasPage.getBtnSalvar()).click()
    }
    
    validarContaSalva(){
        cy.get(ContasPage.getLblValidarContaSalva()).should('contain', 'Conta inserida com sucesso')
    }

}
export default new ContasLogic;