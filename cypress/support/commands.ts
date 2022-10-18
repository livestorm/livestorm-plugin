// eslint-disable-next-line @typescript-eslint/no-namespace

type IframeType = 'plugin' | 'modal' | 'notification-center' | 'sidebar-panel'

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Login then select the first event and enter the room
     */
    roomEnter(lobbyOnly?: boolean): Cypress.Chainable<null>;

    /**
     * Close the session of the user
     */
    logout(deleteSession?: boolean): Cypress.Chainable<null>;

    /**
     * Send a message from the chat room page
     */
    sendChatRoomMessage(message: string): Cypress.Chainable<null>;

    /**
     * Get the (window or body or element) of a plugin iframe
     */
    getIframeContent(iframeType: IframeType, contentType?: 'window' | 'body' | 'element'): Cypress.Chainable<null>;

    /**
     * Open the "more apps" menu
     */
    openMoreAppsMenu(): Cypress.Chainable<null>;

    /**
     * Retrieve a sidebar button by text
     */
    getSidebarButton(text: string): Cypress.Chainable<JQuery<HTMLElement | null>>;
  }
}

const visit = path => {
  const authorization = Cypress.env('SITE_AUTHORIZATION')
  if (authorization) {
    cy.visit(path, {
      headers: {
        authorization
      }
    })
  } else {
    cy.visit(path)
  }
}

Cypress.Commands.add('roomEnter', (lobbyOnly = false) => {
  cy.intercept('/api/v1/team_members/current').as('user')
  cy.intercept('/api/v1/auth/strong/token').as('token')

  // LogIn
  cy.request('POST', `/api/v1/auth/strong/session?${Cypress.env('MAGIC_PARAMETER')}`, {
    "email": Cypress.env('TEAM_MEMBER_EMAIL'),
    "password": Cypress.env('TEAM_MEMBER_PASSWORD'),
    "provider": "email_password"
  })

  visit('/')
  cy.getCookie('refresh_token').should('exist')

  cy.wait('@user').then(({ response: { body: { id } } }) => {
    cy.wait('@token').then(({ response: { body: { data } } }) => {
      cy.setCookie('CYPRESS_ENCODED_JWT', data.jwt.encoded)

      // Create session from event
      cy.request({
        method: 'POST',
        url: `/api/v1/event_types/${Cypress.env('EVENT_ID')}/sessions`,
        headers: {
          "ls-authorization": "Bearer " + data.jwt.encoded
        },
        body: {
          "sessions": [
            {
              "estimated_started_at": new Date((+new Date() + (365 * 24 * 60 * 60 * 1000))).toISOString(),
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
    const sessionId = (response as unknown as { body: { sessions: { id: string }[] } }).body.sessions.pop().id
    cy.log('sessionId', sessionId)
    visit(`/p/${Cypress.env('EVENT_ID')}/live?s=${sessionId}`)
  })

  let joinButton = cy.get('[data-testid="access-steps"] [data-testid="viewer"]', { timeout: 30000 })
  cy.wait(5000)
  joinButton = cy.get('[data-testid="access-steps"] [data-testid="viewer"]:not([disabled])', { timeout: 30000 })

  joinButton.should('exist')

  if (lobbyOnly === false) {
    joinButton.click({ force: true })
  }
})

Cypress.Commands.add('sendChatRoomMessage', message => {
  cy.get('.tchat-wrap').find('.tchat-form__textarea').type(message, { force: true }).then(() => {
    cy.get('.tchat-wrap').find('.message-action-button').last().click({ force: true })
    cy.wait(1000)
  })
})

Cypress.Commands.add('getIframeContent', (iframeType: IframeType, contentType: 'window' | 'body' | 'element') => {
  let element = cy.get(`iframe[name="${Cypress.env('PLUGIN_IFRAME_NAME')}"]`)

  if (iframeType !== 'plugin') {
    element = cy.get(`iframe[data-type="${iframeType}"][data-parent-plugin-name="${Cypress.env('PLUGIN_IFRAME_NAME')}"]`)
  }

  if (contentType === 'element') return element

  if (contentType === 'window') return element.its('0.contentWindow')
  if (contentType === 'body') return element.its('0.contentDocument').its('body')
})

Cypress.Commands.add('openMoreAppsMenu', () => {
  if (cy.get('.more-apps-popover').should('not.exist')) {
    cy.get('[data-testid="sidebar-button-more-apps"]').click({ force: true })
    cy.get('.more-apps-popover').should('exist')
  }
})

Cypress.Commands.add('getSidebarButton', (text: string): Cypress.Chainable<JQuery<HTMLElement | null>> => {
  return cy.get(`[data-testid^="sidebar-button"]`).filter(`:contains("${text}")`)
})

Cypress.Commands.add('logout', (deleteSession = true) => {
  if (deleteSession) {
    cy.getCookie('CYPRESS_ENCODED_JWT').then(cookie => {
      cy.location().then((url) => {

        // Delete the session
        cy.request({
          method: 'DELETE',
          url: `/api/v1/event_types/${Cypress.env('EVENT_ID')}/sessions/${new URLSearchParams(url.search).get('s')}?get_session_item=true`,
          headers: {
            "ls-authorization": "Bearer " + cookie.value
          }
        }).then((response) => {
          expect(response.status).to.eq(204)
        })
      })
    })
  }

  visit('/#logout')
})
