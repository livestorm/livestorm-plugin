describe('The homepage', () => {
  it('successfully logs in', () => {
    cy.visit('/')

    cy.intercept('/api/v1/organizations/current').as('logged')

    cy.get('[id^="BaseFormInput:email"]').type(Cypress.env('TEAM_MEMBER_EMAIL'))
    cy.get('[id^="BaseFormInput:password"]').type(Cypress.env('TEAM_MEMBER_PASSWORD'))
    cy.get('button[type="submit"]').click()

    cy.wait('@logged')
  })
})