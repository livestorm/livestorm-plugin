describe('The modal', () => {
  before(() => {
    cy.roomEnter(true)
  })
  
  after( () => {
    cy.logout()
  })
  
  // @showIframe
  it('should display a modal with an iframe inside', () => {
    cy.wait(3000)
    cy.fixture('modal').then((modal) => {
      cy.getIframeBody('modal').contains(modal.expectedElement, modal.expectedText)
    })
  })

  it('should pass data through the template to the plugin', () => {
    cy.fixture('modal').then((modal) => {
      cy.getIframeWindow().its('MESSAGE_RECEIVED').should('eq', modal.expectedReceivedMessage)
    })
  })

  it('should close an opened modal by calling the closeModal function', () => {
    cy.getIframeBody('modal').should('not.exist')
  })
})