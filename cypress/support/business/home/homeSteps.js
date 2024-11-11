import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps"
import HomeLogic from '../home/homeLogic';

When('clico em home', () => {
    HomeLogic.clicarHome()
    })
    
    And('consulto o saldo da conta', ()=>{
    HomeLogic.consultarSaldo()
    })

    When('clico em home novamente', () =>{
        HomeLogic.rotaSaldo()
        HomeLogic.clicarHome()
    })
    
    Then('consulto o saldo alterado',()=>{
        HomeLogic.consultarSaldoAtualizado()
        })
        