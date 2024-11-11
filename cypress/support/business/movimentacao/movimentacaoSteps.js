import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps"
import MovimentacaoLogic from '../movimentacao/movimentacaoLogic';

When('clico em cadastrar movimentacao', () => {
    MovimentacaoLogic.rotaMovimentacoes()
    MovimentacaoLogic.rotaMovimentacaoSalva()
MovimentacaoLogic.cadastrarMovimentacao()
})

And('digito a descricao', ()=>{
MovimentacaoLogic.digitarDescricao()
})

And('digito o valor', () =>{
MovimentacaoLogic.digitarValor()
})

And('digito o interessado', () =>{
MovimentacaoLogic.digitarInteressado()
})

And('seleciono a conta', () =>{
MovimentacaoLogic.selecionarConta()
})

And('clico em status', () =>{
MovimentacaoLogic.clicarStatus()
})

And('clico em salvar movimentacao', () =>{
MovimentacaoLogic.clicarSalvar()
})

Then('a mensagem movimentação inserida com sucesso é exibida',()=>{
MovimentacaoLogic.validarMovimentacaoSucesso()
})