import { CyHttpMessages } from "cypress/types/net-stubbing"

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

    /**
     * Send a message from the chat room page
     */
    sendChatRoomMessage(message: string): Cypress.Chainable<null>;
  }
}

Cypress.Commands.add('roomEnter', (lobbyOnly = false) => {
  cy.intercept('/api/v1/team_members/current').as('user')
  cy.intercept('/api/v1/auth/strong/token').as('token')

  // LogIn
  cy.request('POST', '/api/v1/auth/strong/session', {
    "email": Cypress.env('TEAM_MEMBER_EMAIL'),
    "password": Cypress.env('TEAM_MEMBER_PASSWORD'),
    "provider": "email_password"
  })

  cy.visit('/')
  cy.getCookie('refresh_token').should('exist')

  cy.wait('@user').then(({ response: { body: { id } } }) => {
    cy.wait('@token').then(({ response: { body: { data }}}) => {
      // cy.setCookie('token', data.jwt.encoded)
  
      // Create session from event
      cy.request({
        method: 'POST',
        url: `/api/v1/event_types/${Cypress.env('EVENT_ID')}/sessions`,
        headers: {
          "ls-authorization": "Bearer " + data.jwt.encoded
        },
        body: { 
          "sessions": [
            { "estimated_started_at": new Date((+new Date()+ (365 * 24 * 60 * 60 * 1000))).toISOString(),
              "timezone": "Europe/Paris",
              "team_members": [
                { 
                  "identity_id": id, 
                  "is_highlighted": true
                }
              ],
              "guest_speakers": []
            }] 
        }
      }).as('sessionCreated')
    })
  })

  cy.get('@sessionCreated').should((response) => {
    expect(response).to.have.property('body')
  }).then((response) => {
    const sessionId = (response as unknown as CyHttpMessages.IncomingResponse).body.sessions.pop().id
    cy.visit(`/p/${Cypress.env('EVENT_ID')}/live?s=${sessionId}`)
  })

  if (lobbyOnly === false) {
    cy.get('.confirm-config-button:not([disabled])', {
      timeout: 10000
    }).click()
  }
})

Cypress.Commands.add('sendChatRoomMessage', message => {
  cy.get('.tchat-wrap').find('.tchat-form__textarea').type(message, { force: true}).then(() => {
    cy.get('.tchat-wrap').find('.message-action-button').last().click({ force: true})
    cy.wait(1000)
  })
})

Cypress.Commands.add('logout', () => {
  // cy.getCookie('token').then( cookie => {
  //   cy.location().then((url) => {
  //     cy.request({
  //       method: 'DELETE',
  //       url: `https://app.livestorm.local/api/v1/event_types/${Cypress.env('EVENT_ID')}/sessions/${new URLSearchParams(url.search).get('s')}?get_session_item=true`,
  //       headers: {
  //         "ls-authorization": "Bearer " + cookie.value
  //       }
  //     }).then((response) => {
  //       expect(response.status).to.eq(204)
  //     })
  //   })
  // })

  cy.visit('/#logout')
})