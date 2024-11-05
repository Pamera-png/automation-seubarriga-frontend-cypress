#language: pt 
Funcionalidade: login
    Cenário: Realizar login com sucesso
    Dado que crio as rotas signing e saldo
Dado que acesso o site barrigareact
Quando preencho o email
E preencho a senha
E pressiono entrar
Então a mensagem bem vindo é exibida
Então limpo o localStorage