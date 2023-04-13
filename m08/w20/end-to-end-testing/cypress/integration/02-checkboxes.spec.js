describe('testing checkboxes', () => {

  beforeEach(() => {
    cy.visit('/');
  })

  it('can uncheck the "Explicit" checkbox', () => {
    cy.get('#Explicit')
      .click()
      // .uncheck()
      .should('not.be.checked');
  })

  it('can check the "Single" checkbox', () => {
    cy.get('#Single')
      .check()
      // .click()
      .should('be.checked');
  })
})