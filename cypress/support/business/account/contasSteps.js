import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps"
import ContasLogic from '../account/contasLogic';

When('clico em settings', () => {
    ContasLogic.rotaInserirConta()
ContasLogic.clicarSettings()
})

And('clico em contas', ()=>{
    ContasLogic.clicarAccounts()
})

And('digito o nome da conta', () =>{
    ContasLogic.rotaObterConta()
ContasLogic.inserirNomeConta()
})

And('clico em save',()=>{
ContasLogic.clicarSalvar()
})

Then('a mensagem Conta inserida com sucesso é exibida',()=>{
ContasLogic.validarContaSalva()
    })
    