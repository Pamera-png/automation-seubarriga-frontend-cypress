#language: pt 
Funcionalidade: account

Contexto: realizar login
Dado que acesso o site barrigareact
Quando preencho o email
E preencho a senha
E pressiono entrar
Então a mensagem bem vindo é exibida
Então limpo o localStorage
Quando clico em settings
E clico em contas

Cenário: Inserir conta com sucesso
E digito o nome da conta
E clico em save
Então a mensagem Conta inserida com sucesso é exibida