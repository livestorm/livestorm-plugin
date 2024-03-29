describe('The stage', () => {
  before(() => {
    cy.roomEnter()
  })

  after(() => {
    cy.logout()
  })

  it('should display the share button', () => {
    cy.get('[data-testid="sharing-dropdown"] button').click({ force: true })

    cy.fixture('stage').then((stage) => {
      cy.contains(stage.registerShareButton.label)
    })

  })

  it('should display the stage action button', () => {
    cy.fixture('stage').then((stage) => {

      cy.get(`.stage-control-button-wrap`).contains(stage.registerStageButton.label).find('img').as('stageActionButtonImage')
      cy.get('@stageActionButtonImage').invoke('attr', 'src').should('eq', stage.registerStageButton.imageSource)
    })
  })
})