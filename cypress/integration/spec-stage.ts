describe('The stage', () => {
  before(() => {
    cy.roomEnter()
  })
  
  after( () => {
    cy.logout()
  })

  it('should display the share button', () => {
    cy.get('.share-dropdown button', {
      timeout: 10000
    }).click({ force: true })

    cy.fixture('stage').then((stage) => {
      cy.contains(stage.registerShareButton.label, {
        timeout: 10000
      })
    })

  })

  it('should display the stage action button', () => {
    cy.fixture('stage').then((stage) => {
      // cy.get(`[data-testid="plugin-stage-actions"] button[aria-label="${stage.registerStageButton.label}"] img`, {
      //   timeout: 10000
      // }).as('stageActionButtonImage')

      cy.get(`button[aria-label="${stage.registerStageButton.label}"] img`, {
        timeout: 10000
      }).as('stageActionButtonImage')
  
      cy.get('@stageActionButtonImage').invoke('attr', 'src').should('eq', stage.registerStageButton.imageSource)
    })
  })
})