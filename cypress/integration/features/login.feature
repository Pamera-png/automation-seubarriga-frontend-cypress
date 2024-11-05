#language: pt 
Funcionalidade: login
    Cenário: Realizar login com sucesso
    Dado que crio a rota signing
Dado que acesso o site barrigareact
Quando preencho o email
E preencho a senha
E pressiono entrar
Então a mensagem login realizado com sucesso é exibida