describe('The pubSub', () => {
  before(() => {
    cy.roomEnter(true)
  })
  
  after( () => {
    cy.logout()
  })

  it('should notify when the subscribed event is published', () => {
    cy.getIframeWindow().should('exist')
    cy.fixture('pubSub').then(({ payload }) => {
      cy.getIframeWindow().its('PUBSUB').its('data').should('deep.equal', payload.data)
    })
  })
})