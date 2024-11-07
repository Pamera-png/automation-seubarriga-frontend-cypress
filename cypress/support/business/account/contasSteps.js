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
    
Given('Que clico em alterar uma conta específica', () => {
    ContasLogic.rotaAtualizarConta()
    ContasLogic.clicarAtualizar()
    })
    
    When('limpo o campo nome da conta', ()=>{
    ContasLogic.limparNome()
    })
    
    When('digito um novo nome', ()=>{
    ContasLogic.digitarNovoNome()
    })
    
    When('clico em salvar', ()=>{
        ContasLogic.rotaContaAlterada()
    ContasLogic.clicarSalvar()
    })
    
    Then('a mensagem conta atualizada com sucesso é exibida', ()=>{
    ContasLogic.validarContaAtualizada()
    })

    When('digito o nome de uma conta existente', ()=>{
        ContasLogic.rotaRepetirConta()
        ContasLogic.digitarContaRepetida()
        })
        
        And('clico em save', ()=>{
            ContasLogic.clicarSalvar()
        })
        
        Then('a mensagem Request failed with status code 400 é exibida', ()=>{
        ContasLogic.validarContaRepetida()
        })