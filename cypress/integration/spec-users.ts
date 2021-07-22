describe('The users', () => {
  before(() => {
    cy.roomEnter(true)
  })
  
  after( () => {
    cy.logout()
  })

  it('should have the users data', () => {
    cy.getIframeWindow(Cypress.env('PLUGIN_IFRAME_NAME')).should('exist')

    // @me
    cy.getIframeWindow(Cypress.env('PLUGIN_IFRAME_NAME')).should('have.property', 'ME')
    cy.fixture('users').then(({ withHost }) => {
      cy.getIframeWindow(Cypress.env('PLUGIN_IFRAME_NAME')).its('ME').should('have.keys', withHost)
    })


    // @everyone
    cy.getIframeWindow(Cypress.env('PLUGIN_IFRAME_NAME')).should('have.property', 'EVERYONE')
    cy.fixture('users').then(({ user }) => {
      cy.getIframeWindow(Cypress.env('PLUGIN_IFRAME_NAME')).its('EVERYONE').as('everyone')
      cy.get('@everyone').should('be.a', 'array')
      cy.get('@everyone').should('have.length', 1)
      cy.get('@everyone').then(users => {
        expect(Object.keys(users[0])).to.be.deep.eq(user)
      })
    })

    // @teamMembers
    cy.getIframeWindow(Cypress.env('PLUGIN_IFRAME_NAME')).should('have.property', 'TEAM_MEMBERS')
    cy.fixture('users').then(({ user }) => {
      cy.getIframeWindow(Cypress.env('PLUGIN_IFRAME_NAME')).its('TEAM_MEMBERS').as('teamMembers')
      cy.get('@teamMembers').should('be.a', 'array')
      cy.get('@teamMembers').should('have.length', 1)
      cy.get('@teamMembers').then(users => {
        expect(Object.keys(users[0])).to.be.deep.eq(user)
      })
    })
  })
})