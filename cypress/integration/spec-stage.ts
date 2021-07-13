before(() => {
  cy.roomEnter()
})

after( () => {
  cy.logout()
})


describe('The stage', () => {
  it('successfully displays the share button', () => {
    cy.get('.share-dropdown button', {
      timeout: 10000
    }).click()

    cy.fixture('stage').then((stage => {
      cy.get('[data-testid="plugin-stage-share-buttons"]', {
        timeout: 10000
      }).contains(stage.registerShareButton.label).click()
    }))

  })

  it('successfully displays the stage action button', () => {
    cy.fixture('stage').then((stage => {
      cy.get(`[data-testid="plugin-stage-actions"] button[aria-label="${stage.registerStageButton.label}"] img`, {
        timeout: 10000
      }).as('stageActionButtonImage')
  
      cy.get('@stageActionButtonImage').invoke('attr', 'src').should('eq', stage.registerStageButton.imageSource)
    }))
  })
})