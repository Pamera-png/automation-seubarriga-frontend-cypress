const buildEnv = () => {
    cy.server()

    cy.route({
        method: 'POST',
        url: '/signin',
        response: {
            id: 1000,
            nome: 'Usuario falso',
            token: 'Uma string muito grande que nao deveria ser aceito mas na verdade, vai'
        }
    })
        .as('signin')

    cy.route({
        method: 'GET',
        url: '/saldo',
        response: [
            {
                conta_id: 999,
                conta: "Carteira",
                saldo: "100.00"
            },
            {
                conta_id: 9909,
                conta: "Banco",
                saldo: "10000000.00"
            },
        ]
    }).as('saldo')
}

export default buildEnv