// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Login then select the first event and enter the room
     */
    roomEnter(lobbyOnly?: boolean): Cypress.Chainable<null>;

    /**
     * Close the session of the user
     */
    logout(): Cypress.Chainable<null>;
  }
}

Cypress.Commands.add('roomEnter', (lobbyOnly = false) => {
  cy.request('POST', '/api/v1/auth/strong/session', { 
    "email": Cypress.env('TEAM_MEMBER_EMAIL'), 
    "password": Cypress.env('TEAM_MEMBER_PASSWORD'), 
    "provider": "email_password"
  })

  
  cy.visit('/')
  
  cy.getCookie('refresh_token').should('exist')

  cy.get('.data-view-item', {
    timeout: 10000
  }).first().click()

  cy.url().should('include', '?page=sessions')

  // cy.get('[data-testid="access-event-room"]', {
  //   timeout: 10000
  // }).invoke('attr', 'href').as('link')

  cy.get('.data-view-item .menu-overlay a', {
    timeout: 10000
  }).last().invoke('attr', 'href').as('link')

  cy.get('@link').then(link => {
    cy.visit(link as unknown as string)
  })

  if (lobbyOnly === false) {
    cy.get('.confirm-config-button:not([disabled])', {
      timeout: 10000
    }).click()
  }
})

Cypress.Commands.add('logout', () => {
  cy.visit('/#logout')
})