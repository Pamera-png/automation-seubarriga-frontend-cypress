import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps"
import EstratoLogic from '../estrato/estratoLogic';

When('clico em estrato', () => {
    EstratoLogic.rotaMovimentacaoSalva()
EstratoLogic.clicarEstrato()
})

And('consulto a quantidade de linhas no estrato', ()=>{
EstratoLogic.contarLinhas()
})

Then('busco por uma movimentacao específica',()=>{
EstratoLogic.buscarMovimentacao()
})

And('clico em alterar', () =>{
    EstratoLogic.rotaAlterarMovimentacao()
    EstratoLogic.clicarAlterarMovimentacao()
    })
    
    And('verifico a conta a ser alterada', ()=>{
    EstratoLogic.validarDescricao()
    })
    
    And('clico em alterar status', ()=>{
    EstratoLogic.clicarAlterarStatus()
    })
    
    And('clico em salvar', ()=>{
    EstratoLogic.clicarSalvar()
    })
    
    Then('a mensagem movimentação alterada com sucesso é exibida', ()=>{
    EstratoLogic.validarMensagem()
    })
    
    And('clico em deletar movimentação', ()=>{
        EstratoLogic.rotaDeletarMovimentacao()
        EstratoLogic.clicarDeletarMovimentacao()
        })
        
        Then('a mensagem movimentação removida com sucesso é exibida', ()=>{
            EstratoLogic.validarMensagem()
        })