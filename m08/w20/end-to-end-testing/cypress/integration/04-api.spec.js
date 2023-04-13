describe('testing api calls', () => {
  // 'https://itunes.apple.com/search?term=Chet Baker&country=CA&media=music&entity=album&attribute=artistTerm'
  const inputValue = 'Chet Baker';

  it('can render results after a search', () => {
    //1) visit the website
    cy.visit('/');

    // 2) Set up a fixture (mock data/dummy data)
    cy.intercept(
      'GET',
      '**/search*',
      { fixture: 'itunes', delay: 1000 }
    ).as('itunesResponse')

    // 3) Get the search input
    cy.get('[name="search"]')
      // 4) Type into the search input
      .type(inputValue, { delay: 250 })

    // 5) Check if a loading screen appears / a spinner appears
    cy.get('.spinner')
      .should('be.visible')

    // 6) Wait untill the API results are loaded and rendered
    cy.wait('@itunesResponse')

    // 7) Assert that a particular / expected album is present
    cy.get('.album__name')
      .contains('Embraceable You')
      .should('be.visible')
  })

})