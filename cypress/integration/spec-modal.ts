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
      cy.getIframeContent('modal', 'element').should('exist')
      cy.getIframeContent('modal', 'body').contains(modal.expectedElement, modal.expectedText)
    })
  })

  it('should pass data through the template to the plugin', () => {
    cy.fixture('modal').then((modal) => {
      cy.getIframeContent('plugin', 'window').its('MESSAGE_RECEIVED').should('eq', modal.expectedReceivedMessage)
    })
  })

  it('should close an opened modal using closeModal function', () => {
    cy.getIframeContent('modal', 'window').invoke('closeModal')
    cy.getIframeContent('modal', 'element').should('not.exist')
  })
})