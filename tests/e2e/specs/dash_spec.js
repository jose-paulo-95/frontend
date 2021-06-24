// https://docs.cypress.io/api/introduction/api.html

describe('Dashoboard', () => {

describe('Quando acesso o Dashboard', () => {

  before (()=>{
    cy.visit('/dashboard')
    cy.contains('h4', 'Seu gerenciador digital de contatos')

  })

  it('Então devo ver a lista de contados', ()=>{
    //cy.get('.card').should('have.length', 3)

    cy.get('.card').then((elements) =>{
      expect(elements.length > 0).to.be.true
    })

  })

})
})
