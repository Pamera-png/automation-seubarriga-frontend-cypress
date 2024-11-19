#language: pt 
Funcionalidade: cores

    Contexto: Realizar login com sucesso
Dado que acesso o site barrigareact
Quando preencho o email
E preencho a senha
E pressiono entrar
Então a mensagem bem vindo é exibida
Então limpo o localStorage
Quando clico em estrato

Cenário: Testar cores
E verifico a receita paga
E verifico a receita pendente
E verifico a despesa paga
Então verifico a despesa pendente