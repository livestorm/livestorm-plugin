describe('The theme', () => {
  before(() => {
    cy.roomEnter(true)
  })
  
  after( () => {
    cy.logout()
  })
  
  // @setBackground
  it('should set the background to the room', () => {
    cy.fixture('theme').then(theme => {
      cy.get('.room-content').should('have.css', 'background-color', theme.generatedBackgroundColor)
    })
  })
})