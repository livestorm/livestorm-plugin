describe('The storage', () => {
  before(() => {
    cy.roomEnter(true)
  })
  
  after( () => {
    cy.logout()
  })
  
  it('should retrieve a stored value ', () => {
    cy.fixture('storage').then(({ value }) => {
      cy.getIframeWindow().its('RESULT').should('eq', value)
    })
  })
})