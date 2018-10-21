// TODO test search

describe("Search", () => {
  it("works", () => {
    cy.visit("/");
    cy.getId("search-input").type("witcher{enter}");
    cy.getId("game-card-the-witcher-3-wild-hunt");
    cy.getId("game-card-the-witcher-2-assassins-of-kings");
    cy.getId("game-card-the-witcher");
  });
});
