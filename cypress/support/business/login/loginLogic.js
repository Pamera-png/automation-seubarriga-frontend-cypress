/// <reference types="cypress" />
import LoginPage from '../login/loginPage'
import buildEnv from '../../../support/buildEnv'

class LoginLogic{
    rotas(){
        buildEnv()
    }

    acessarAplicacao() {
        cy.visit(Cypress.config("baseUrl"))
    }

    preencherCampoEmail() {
        cy.get(LoginPage.getTxtEmail())
            .type('emailparatestesautomacao@gmail.com')
    }

    preencherCampoSenha() {
        cy.get(LoginPage.getTxtPassword())
            .type('senha errada')
    }

    clicarBtnEntrar() {
        cy.xpath(LoginPage.getBtnEntrar())
            .click()
    }

    validarUsuarioLogado() {
        cy.xpath(LoginPage.getLblMsgBemVindo())
            .should('visible')
    }

    cleanLocalStorage(){
        cy.clearLocalStorage()
    }
}
export default new LoginLogic;