describe('The modal', () => {
  before(() => {
    cy.roomEnter(true)
  })
  
  after( () => {
    cy.logout()
  })
  
  // @showIframe
  it('should display a modal with an iframe inside', () => {
    cy.fixture('modal').then((modal) => {
      cy.getIframeBody('modal').contains(modal.expectedElement, modal.expectedText)
    })
  })
})