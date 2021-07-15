describe('The streams', () => {
  before(() => {
    cy.roomEnter(true)
  })
  
  after( () => {
    cy.logout()
  })

  it('should display the camera effect', () => {
    cy.get('[data-testid="camera-effect-toggle"]:not([disabled]', {
      timeout: 10000
    }).click({force: true})
    cy.get('.camera-effects', {
      timeout: 10000
    }).as('camera-effects')

    cy.fixture('streams').then((streams) => {
      // The reset button, the single camera effect and the multiple camera effects
      cy.get('@camera-effects').get('.camera-effect-button').should('have.length', 1 + 1 + streams.registerMultipleCameraEffects.effects.length)
      cy.get('@camera-effects').get('.camera-effect-button').eq(2).get('.bg-cover')
        .invoke('attr', 'style').should('eq', `background-image: url("${streams.registerCameraEffect.imageUrl}");`)
    })
  })
})