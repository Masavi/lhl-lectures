describe('testing input search field', () => {

  beforeEach(() => {
    cy.visit('/');
  })

  const inputValue = 'Artic Monkeys';

  it('can type into the search input field', () => {
    cy.get('[name="search"]')
      .type(inputValue, { delay: 250 })
      .should('have.value', inputValue);
  })

  it('can backspace in the search field', () => {
    cy.get('[name="search"]')
      .type('The Beatllll{backspace}{backspace}{backspace}es', { delay: 250 })
      .should('have.value', 'The Beatles');
  })
})