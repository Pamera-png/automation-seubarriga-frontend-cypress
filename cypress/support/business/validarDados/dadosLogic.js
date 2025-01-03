/// <reference types="cypress" />
import DadosPage from '../validarDados/dadosPage'
const reqStub = ""
class DadosLogic {
    rotaInserirConta() {
        reqStub = cy.stub()
        cy.route({
            method: 'POST',
            url: '/contas',
            response: {
                id: 3,
                nome: 'Conta de teste',
                visivel: true,
                usuario_id: 1
            },
            onRequest: reqStub
        }).as('saveConta')
    }

    clicarSettings() {
        cy.get(DadosPage.getBtnSettings()).click()
    }

    clicarAccounts() {
        cy.xpath(DadosPage.getLinkContas()).click()
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
        cy.get(DadosPage.getTxtNomeConta())
            .type(DadosPage.getTypeNome())
    }

    clicarSalvar() {
        cy.xpath(DadosPage.getBtnSalvar()).click()
        
        cy.wait('@saveConta')
        .then(() => {
                console.log(reqStub.args[0][0]);
expect(reqStub.args[0][0].request.body.nome).to.be.empty
expect(reqStub.args[0][0].request.headers).to.have.property('Authorization')        
            })
    }

    validarContaSalva() {
        cy.get(DadosPage.getLblValidarMensagem()).should('contain', 'Conta inserida com sucesso')
    }
}
export default new DadosLogic;