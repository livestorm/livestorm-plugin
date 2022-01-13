describe('The storage', () => {
  before(() => {
    cy.roomEnter(true)
  })
  
  after( () => {
    cy.logout()
  })
  
  it('should retrieve a stored value ', () => {
    cy.fixture('storage').then(({ value }) => {
      cy.getIframeWindow('plugin', 'window').its('RESULT').should('eq', value)
    })
  })
})