before(() => {
  cy.roomEnter()
})

after( () => {
  cy.logout()
})

describe('The stage', () => {
  it('successfully displays the share button', () => {
    cy.get('.share-dropdown button').click()
    cy.get('[data-testid="plugin-stage-buttons"]').contains('Foo:bar')
  })
})