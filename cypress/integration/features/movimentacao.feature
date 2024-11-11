#language: pt 
Funcionalidade: movimentacao
    Contexto: Realizar login com sucesso
Dado que acesso o site barrigareact
Quando preencho o email
E preencho a senha
E pressiono entrar
Então a mensagem bem vindo é exibida
Então limpo o localStorage

Cenário: Cadastrar movimentacao
Quando clico em cadastrar movimentacao
E digito a descricao
E digito o valor
E digito o interessado
E seleciono a conta
E clico em status
E clico em salvar movimentacao
Então a mensagem movimentação inserida com sucesso é exibida