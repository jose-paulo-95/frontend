


describe('Cadastro de Contatos', () => {

    describe('Novo Contato', () => {
        let contact = {
            name: 'Pedro Paulo',
            number: '11999999999',
            description: 'TESTE TESTE TESTE'
        }

        describe('Quando submeto o cadastro completo ', () => {

            before(() => {

                cy.dash()
                cy.createContact(contact)
            })

            it('Deve cadastrar esse contato', () => {

                cy.contactList().contains(contact.name)

            })
        })

        describe('Quando submeto o cadastro sem o nome ', () => {

            let contact = {

                number: '11999999999',
                description: 'TESTE TESTE TESTE'
            }


            before(() => {

                cy.dash()
                cy.createContact(contact)
            })

            it('Deve mostrar uma notificação', () => {

                cy.alertName().contains('Nome é obrigatório.')

            })
        })
        describe('Quando submeto o cadastro sem o Número ', () => {

            let contact = {
                name: 'Pedro Paulo',
                description: 'TESTE TESTE TESTE'
            }

            before(() => {

                cy.dash()
                cy.createContact(contact)
            })

            it('Deve mostrar uma notificação', () => {

               cy.alertNumber().contains('WhatsApp é obrigatório.')

            })
        })
        describe('Quando submeto o cadastro sem o Assunto ', () => {

            let contact = {
                name: 'Pedro Paulo',
                number: '11999999999',

            }

            before(() => {

                cy.dash()
                cy.createContact(contact)
            })

            it('Deve mostrar uma notificação', () => {

                cy.alertDesc().contains('Assunto é obrigatório.')

            })
        })
    })
})
