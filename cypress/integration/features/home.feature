#language: pt 
Funcionalidade: saldo

Contexto: Realizar login com sucesso
Dado que acesso o site barrigareact
Quando preencho o email
E preencho a senha
E pressiono entrar
Então a mensagem bem vindo é exibida
Então limpo o localStorage

Cenário: Consultar saldo
Quando clico em home
E consulto o saldo da conta
Quando clico em estrato
E clico em alterar
E verifico a conta a ser alterada
E clico em alterar status
E clico em salvar
Então a mensagem movimentação alterada com sucesso é exibida
Quando clico em home novamente
Então consulto o saldo alterado