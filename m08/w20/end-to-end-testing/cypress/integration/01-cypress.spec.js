describe('learning how to work with cypress 🎠', () => {

  it('can visit our react application', () => {
    cy.visit('/');
  });

  // it('can visit google!', () => {
  //   cy.visit('https://www.google.com');
  // });

  it('runs an assertion 🎢', () => {
    assert.strictEqual(1, 1);
  })
})