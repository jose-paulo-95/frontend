

describe('Remove Contato', () => {

    const contact = {
        name: 'Paul Gilbert',
        number: '21 989189189198',
        description: 'Orçamento para instalação de Drywall'
    }

    describe(`Dado que eu  ${contact.name} é um contato indesejado`, () => {

        before(() => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/contacts',
                headers: { 'Content-Type': 'application/json' },
                body: contact,
                failOnStatusCode: false

            }).then((response) => {
                cy.log(JSON.stringify(response.body))
            })
        })

        it('Quando apago esse contato', () => {
            cy.dash()
            cy.removeContact(contact.number)

        })

        it('não deve exibir no dashboard', () => {
            cy.getContact(contact.number).should('not.visible')

        })


    })


})