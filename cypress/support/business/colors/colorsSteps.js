import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps"
import ColorsLogic from '../colors/colorsLogic';

When('clico em estrato', () => {
    ColorsLogic.rotaMovimentacaoSalva()
ColorsLogic.clicarEstrato()
})

And('verifico a receita paga', ()=>{
ColorsLogic.verificarReceitaPaga()
})

And('verifico a receita pendente', ()=>{
    ColorsLogic.verificarReceitaPendente()
    })

    And('verifico a despesa paga', ()=>{
        ColorsLogic.verificarDespesaPaga()
        })

        Then('verifico a despesa pendente', ()=>{
            ColorsLogic.verificarDespesaPendente()
            })