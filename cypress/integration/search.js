describe("Search", () => {
  it("works", () => {
    cy.visit("/");

    cy.detect("search-input").type("witcher{enter}");
    cy.detect("game-card-the-witcher-3-wild-hunt");
    cy.detect("game-card-the-witcher-2-assassins-of-kings");
    cy.detect("game-card-the-witcher");
  });
});
