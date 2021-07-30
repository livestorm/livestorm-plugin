describe('The modal', () => {
  before(() => {
    cy.roomEnter(true)
  })
  
  after( () => {
    cy.logout()
  })
  
  // @showIframe
  it('should display a modal with an iframe inside', () => {
    cy.get('.modal-plugins').find('iframe')
  })
})