describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:8080/')
  })
})

describe('Add 10000 Items', () => {
  it('sucessfully add 100 items', () => {
    Cypress._.times(100, (k) => {
      cy.get('[data-cy="input"]').type('Hello World', { delay: 0 })
      cy.get('[data-cy="input-button"]').click()
    })
  })
})
