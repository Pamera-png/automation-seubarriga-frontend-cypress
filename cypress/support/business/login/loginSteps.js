import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps"
import LoginLogic from '../login/loginLogic';

Given('que crio a rota signing', ()=>{
  
})

Given('que acesso o site barrigareact', () => {
  LoginLogic.acessarAplicacao()
})

When('preencho o email', () => {
  LoginLogic.preencherCampoEmail()
})

And('preencho a senha', () => {
  LoginLogic.preencherCampoSenha()
})

And('pressiono entrar', () => {
  LoginLogic.clicarBtnEntrar()
})

Then('a mensagem login realizado com sucesso é exibida', () => {
  LoginLogic.validarUsuarioLogado()
})
