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

Cenário: Alterar conta com sucesso
Dado Que clico em alterar uma conta específica
Quando limpo o campo nome da conta
E digito um novo nome
E clico em salvar
Então a mensagem conta atualizada com sucesso é exibida

Cenário: Criar conta repetida
Quando digito o nome de uma conta existente
E clico em save
Então a mensagem Request failed with status code 400 é exibida