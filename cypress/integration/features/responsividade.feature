#language: pt
Funcionalidade: responsividade
    Contexto: Realizar login com sucesso
Dado que acesso o site barrigareact
Quando preencho o email
E preencho a senha
E pressiono entrar
Então a mensagem bem vindo é exibida
Então limpo o localStorage

Cenário: testar responsividade
Quando verifico se o link home está visível
E ajusto o tamanho da área de visualização do navegador
E verifico se o link home não está visível
E ajusto o tamanho da área de visualização do navegador para iPhone 5
E verifico se o link home não está visível
E ajusto o tamanho da área de visualização do navegador para iPad 2
Então verifico se o link home está visível