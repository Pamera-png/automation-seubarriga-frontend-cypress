/// <reference types="cypress" />
import ContasPage from '../account/contasPage'

class ContasLogic {
    rotaInserirConta() {
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

    clicarSettings() {
        cy.get(ContasPage.getBtnSettings()).click()
    }

    clicarAccounts() {
        cy.xpath(ContasPage.getLinkContas()).click()
    }

    rotaObterConta() {
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

    inserirNomeConta() {
        cy.get(ContasPage.getTxtNomeConta())
            .type(ContasPage.getTypeNome())
    }

    clicarSalvar() {
        cy.xpath(ContasPage.getBtnSalvar()).click()
    }

    validarContaSalva() {
        cy.get(ContasPage.getLblValidarMensagem()).should('contain', 'Conta inserida com sucesso')
    }

    rotaAtualizarConta() {
        cy.route({
            method: 'PUT',
            url: '/contas/**',
            response:
            {
                id: 1,
                nome: 'Conta alterada',
                visivel: true,
                usuario_id: 1
            }
        })
    }

    clicarAtualizar() {
        cy.xpath(ContasPage.getCaminho()).click()
    }

    limparNome() {
        cy.get(ContasPage.getTxtNomeConta()).clear()
    }

    digitarNovoNome() {
        cy.get(ContasPage.getTxtNomeConta())
            .type('Conta alterada')
    }

    rotaContaAlterada(){
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
                    nome: 'Conta alterada',
                    visivel: true,
                    usuario_id: 1
                },
            ]
        }).as('contas alteradas')
    }

    validarContaAtualizada() {
        cy.get(ContasPage.getLblValidarMensagem()).should('contain', 'Conta atualizada com sucesso')
    }

    rotaRepetirConta(){
cy.route({
method: 'POST',
url: '/contas',
response: {
"error": "Já existe uma conta com esse nome!" 
},
status: 400
}).as('saveContaMesmoNome')
    }

    digitarContaRepetida(){
        cy.get(ContasPage.getTxtNomeConta())
        .type(ContasPage.getTypeContaRepetida())
    }
    
    validarContaRepetida(){
        cy.get(ContasPage.getLblValidarMensagem()).should('contain', 'code 400')
    }
    
}
export default new ContasLogic;