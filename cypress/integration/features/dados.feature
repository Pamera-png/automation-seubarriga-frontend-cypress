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

Cenário: Validar dados enviados para criar conta
E insiro o nome da conta
E clico em salvar
E valido o enviio dos dados
Então uma mensagem Conta inserida com sucesso é exibida