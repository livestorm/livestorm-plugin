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
      cy.get('@camera-effects').get(`[style='background-image: url("${streams.registerCameraEffect.imageUrl}");']`)

      streams.registerMultipleCameraEffects.effects.forEach(effect => {
        cy.get('@camera-effects').get(`[style='background-image: url("${effect.imageUrl}");']`)
      })
    })
  })
})