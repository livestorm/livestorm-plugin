// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Login then select the first event and enter the room
     */
    roomEnter(): Cypress.Chainable<null>;

    /**
     * Close the session of the user
     */
     logout(): Cypress.Chainable<null>;
  }
}

Cypress.Commands.add('roomEnter', () => {
  cy.visit('/')

  cy.intercept('/api/v1/organizations/current').as('logged')

  cy.get('[id^="BaseFormInput:email"]').type(Cypress.env('TEAM_MEMBER_EMAIL'))
  cy.get('[id^="BaseFormInput:password"]').type(Cypress.env('TEAM_MEMBER_PASSWORD'))
  cy.get('button[type="submit"]').click()

  cy.wait('@logged')

  cy.get('.data-view-item', {
    timeout: 10000
  }).click()

  cy.get('[data-testid="access-event-room"]', {
    timeout: 10000
  }).invoke('attr', 'href').as('link')

  cy.get('@link').then(link => {
    cy.visit(link as unknown as string)
  })

  cy.get('.confirm-config-button:not([disabled])', {
    timeout: 10000
  }).click()

})

Cypress.Commands.add('logout', () => {
  cy.visit('/#logout')
})