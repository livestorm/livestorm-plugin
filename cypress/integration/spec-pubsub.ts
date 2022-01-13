describe('The pubSub', () => {
  before(() => {
    cy.roomEnter(true)
  })
  
  after( () => {
    cy.logout()
  })

  it('should notify when the subscribed event is published', () => {
    cy.getIframeContent('plugin', 'window').should('exist')
    cy.fixture('pubSub').then(({ payload }) => {
      cy.getIframeContent('plugin', 'window').its('PUBSUB').its('data').should('deep.equal', payload.data)
    })
  })
})