describe('The pubSub', () => {
  before(() => {
    cy.roomEnter(true)
  })
  
  after( () => {
    cy.logout()
  })

  it('should notify when the subscribed event is publihed', () => {
    cy.getIframeWindow().should('exist')
    cy.fixture('pubSub').then(({ payload }) => {
      cy.getIframeWindow().its('PUBSUB').should('deep.equal', payload)
    })
  })
})