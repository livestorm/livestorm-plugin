describe('The pubSub', () => {
  before(() => {
    cy.roomEnter(true)
  })
  
  after( () => {
    cy.logout()
  })

  it('should notify when the subscribed event is published', () => {
    cy.getIframeWindow('plugin', 'window').should('exist')
    cy.fixture('pubSub').then(({ payload }) => {
      cy.getIframeWindow('plugin', 'window').its('PUBSUB').its('data').should('deep.equal', payload.data)
    })
  })
})