describe('todo list', () => {
  it('visit todo list', () => {
    cy.visit('http://localhost:8080/')
  })
})

describe('input', () => {
  it('todo input and click', () => {
    Cypress._.times(100, (k) => {
      cy.get('input').type('Hello World' + k)
      cy.get('#add-button').click()
    })
  })
})
