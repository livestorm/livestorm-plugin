describe('The notification center', () => {
  before(() => {
    cy.roomEnter()
  })
  
  after( () => {
    cy.logout()
  })
  
  // @showIframe
  it('should display a modal with an iframe inside', () => {
    cy.fixture('notificationCenter').then((notificationCenter) => {
      cy.getIframeContent('notification-center', 'body').contains(notificationCenter.expectedElement, notificationCenter.expectedText)
    })
  })
})