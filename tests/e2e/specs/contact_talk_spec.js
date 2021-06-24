

describe('Conversar', () => {

    const contact = {
        name: 'Jojo Todynho',
        number: '21 123456789',
        description: 'Orçamento para show de funk'
    }

    describe(`Dado que ${contact.name} é um contato indesejado`, () => {

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

        })

        it('Devo ver a propriedade href com o link do WhatsApp Web', () => {
            const externalLink = `https://api.whatsapp.com/send?phone=55${contact.number}`
            cy.get(`a[href$="${contact.number}"]`).should('have.attr', 'href',externalLink)

        })


    })


})