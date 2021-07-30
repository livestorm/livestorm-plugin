describe('The streams', () => {
  before(() => {
    cy.roomEnter(true)
  })
  
  after( () => {
    cy.logout()
  })

  it('should display the camera effect', () => {
    cy.get('[data-testid="camera-effect-toggle"]:not([disabled]').click({force: true})
    cy.get('.camera-effects').as('camera-effects')

    cy.fixture('streams').then((streams) => {
      cy.get('@camera-effects').find(`[style='background-image: url("${streams.registerCameraEffect.imageUrl}");']`)

      streams.registerMultipleCameraEffects.effects.forEach(effect => {
        cy.get('@camera-effects').find(`[style='background-image: url("${effect.imageUrl}");']`)
      })
    })
  })
})