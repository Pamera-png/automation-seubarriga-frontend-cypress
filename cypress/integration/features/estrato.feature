#language: pt 
Funcionalidade: estrato
    Contexto: Realizar login com sucesso
Dado que acesso o site barrigareact
Quando preencho o email
E preencho a senha
E pressiono entrar
Então a mensagem bem vindo é exibida
Então limpo o localStorage

Cenário: Consultar estrato
Quando clico em estrato
E consulto a quantidade de linhas no estrato
Então busco por uma movimentacao específica