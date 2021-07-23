describe('The When', () => {
  before(() => {
    cy.roomEnter()
  })
  
  after( () => {
    cy.logout()
  })
  
  // @eventStarts
  it('should notify when the event start', () => {
    cy.getIframeWindow().its('eventStarted').should('eq', false)

    cy.get('button.start-button').click({ force: true})
    cy.get('#modal-start').check({ force: true })
    cy.get('.modal-start button').eq(1).click({ force: true})

    cy.wait(12000)
    cy.get('.end-button', {
      timeout: 20000
    })
    cy.getIframeWindow().its('eventStarted').should('eq', true)
  })

  // @eventEnds
  it('should notify when the event ends', () => {
    cy.get('.end-button').click({ force: true})
    cy.get('.modal-end input[type="checkbox"]').check({ force: true })
    cy.get('.modal-end button').eq(1).click({ force: true})
    cy.getIframeWindow().its('eventEnded').should('eq', true)
  })
})