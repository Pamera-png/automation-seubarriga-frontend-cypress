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