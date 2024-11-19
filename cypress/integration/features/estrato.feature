#language: pt 
Funcionalidade: estrato

    Contexto: Realizar login com sucesso
Dado que acesso o site barrigareact
Quando preencho o email
E preencho a senha
E pressiono entrar
Então a mensagem bem vindo é exibida
Então limpo o localStorage
Quando clico em estrato

Cenário: Consultar estrato
E consulto a quantidade de linhas no estrato
Então busco por uma movimentacao específica

Cenário: Alterar movimentacao
E clico em alterar
E verifico a conta a ser alterada
E clico em alterar status
E clico em salvar
Então a mensagem movimentação alterada com sucesso é exibida

Cenário: Remover movimentacao
E clico em deletar movimentação
Então a mensagem movimentação removida com sucesso é exibida