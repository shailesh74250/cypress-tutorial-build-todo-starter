describe("Input form page should load successfully!", () => {

  beforeEach(() =>{
    cy.visit("/")
  })
  it('Point to input element and should be focused on page load', () => {
    cy.get("[data-testid='input-box']").should('exist').as('inputBox')
    cy.get("@inputBox").should('have.focused')
  })

  it.only('should visit page', () => {
    const currentTodo = 'This is current todo'
    cy.get("[data-testid='input-box']").should('exist').as('inputBox')
    cy.get("@inputBox").type(currentTodo).should('have.value', currentTodo)
  })
})