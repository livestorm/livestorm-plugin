describe('The chat', () => {
  before(() => {
    cy.roomEnter()
  })
  
  after( () => {
    cy.logout()
  })
  
  // @broadcast
  it('should display the broadcasted messages', () => {
    cy.get('.tchat-wrap', {
      timeout: 20000
    })
    cy.fixture('chat').then((chat) => {
      cy.get('.tchat-wrap').find('[data-testid="rich-message"]').contains(chat.broadcast.text)
    })
    cy.get('.tchat-wrap').find('[data-testid="rich-message"]').get('iframe')
  })

  // @send
  it('should display the sent messages', () => {  
    cy.fixture('chat').then((chat) => {
      cy.get('.tchat-wrap').find('[data-testid="rich-message"]').contains(chat.send.text)

      cy.get('.tchat-wrap .name').should('contain', chat.send.user.firstName).and("contain", chat.send.user.firstName)
    })
  })

  // @listen
  it('should listen the messages', () => {
    cy.fixture('chat').then((chat) => {
      cy.sendChatRoomMessage(chat.listen.listened)

      cy.get('.tchat-wrap').find('[data-testid="rich-message"]').contains(chat.listen.broadcasted)
    })
  })

  // @intercept
  it('should intercept the messages', () => {
    cy.fixture('chat').then((chat) => {
      cy.sendChatRoomMessage(chat.intercept.message)

      cy.get('.tchat-wrap').find('[data-testid="rich-message"]').contains(chat.intercept.message).should('have.length', 0)
    })
  })

  // @Buttons.registerShareButton
  it('should display the share button', () => {
    cy.fixture('chat').then((chat) => {
      cy.get('.tchat-wrap').find('[data-testid="open-chat-commands-button"]').click({force: true})
      cy.get('[data-testid="chat-commands"] .additionnal-chat-commands').contains(chat.registerChatShareButton.label)
    })
  })

  // @registerMessageAction
  it('should display the message action', () => {
    cy.fixture('chat').then((chat) => {

      cy.get('.tchat-wrap').find('[data-testid="chat-msg"] .base-dropdown-menu .toggle').eq(0).click({ force: true })
      cy.get('.v-popover-item').contains(chat.registerMessageAction.label)
    })
  })
})
