import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps"
import DadosLogic from '../validarDados/dadosLogic';

When('clico em settings', () => {
    DadosLogic.rotaInserirConta()
    DadosLogic.clicarSettings()
})

And('clico em contas', () => {
    DadosLogic.clicarAccounts()
})

And('insiro o nome da conta', () => {
    DadosLogic.rotaObterConta()
    DadosLogic.inserirNomeConta()
})

And('clico em salvar', () => {
    DadosLogic.clicarSalvar()
})

And('valido o enviio dos dados', () => {
    DadosLogic.validarDados()
})

Then('uma mensagem Conta inserida com sucesso é exibida', () => {
    DadosLogic.validarContaSalva()
})