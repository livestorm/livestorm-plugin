describe('The users', () => {
  before(() => {
    cy.roomEnter(true)
  })

  after(() => {
    cy.logout()
  })

  it('should return the current user data', () => {
    cy.getIframeWindow('plugin', 'window').should('exist')

    cy.getIframeWindow('plugin', 'window').should('have.property', 'ME')
    cy.fixture('users').then(({ withHost }) => {
      cy.getIframeWindow('plugin', 'window').its('ME').should('have.any.keys', withHost)
    })
  })

  it('should return everyone data', () => {
    cy.getIframeWindow('plugin', 'window').should('have.property', 'EVERYONE')
    cy.fixture('users').then(({ user }) => {
      cy.getIframeWindow('plugin', 'window').its('EVERYONE').as('everyone')
      cy.get('@everyone').should('be.a', 'array')
      cy.get('@everyone').should('have.length', 1)
      cy.get('@everyone').then(users => {
        expect(users[0]).to.have.any.keys(user)
      })
    })
  })

  it('should return team members data', () => {

    // @teamMembers
    cy.getIframeWindow('plugin', 'window').should('have.property', 'TEAM_MEMBERS')
    cy.fixture('users').then(({ user }) => {
      cy.getIframeWindow('plugin', 'window').its('TEAM_MEMBERS').as('teamMembers')
      cy.get('@teamMembers').should('be.a', 'array')
      cy.get('@teamMembers').should('have.length', 1)
      cy.get('@teamMembers').then(users => {
        expect(users[0]).to.have.any.keys(user)
      })
    })
  })
})