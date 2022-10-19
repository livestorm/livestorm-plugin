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

  it('should display the added stream', () => {
    cy.get('[data-testid="access-steps"] [data-testid="viewer"]:not([disabled])').click({ force: true })
    cy.wait(5000)
    cy.fixture('streams').then(({ addStream }) => {
      cy.get('#media-iframes-container').find('iframe').its('0.contentDocument').its('body').contains(addStream.expectedElement, addStream.expectedEText)
      cy.get('[data-testid="media-profile"]').contains(addStream.title)
      cy.get('[data-testid="media-profile"]').find('img').invoke('attr', 'src').should('eq', addStream.imageUrl)
    })
  })
})
