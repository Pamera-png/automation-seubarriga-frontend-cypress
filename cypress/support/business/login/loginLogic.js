/// <reference types="cypress" />
import LoginPage from '../login/loginPage'
class LoginLogic{
    acessarAplicacao() {
        cy.visit(Cypress.config("baseUrl"))
    }

    preencherCampoEmail() {
        cy.get(LoginPage.getTxtEmail())
            .type('emailparatestesautomacao@gmail.com')
    }

    preencherCampoSenha() {
        cy.get(LoginPage.getTxtPassword())
            .type('automacaoteste')
    }

    clicarBtnEntrar() {
        cy.xpath(LoginPage.getBtnEntrar())
            .click()
    }

    validarUsuarioLogado() {
        cy.xpath(LoginPage.getLblMsgBemVindo())
            .should('visible')
    }
}
export default new LoginLogic;