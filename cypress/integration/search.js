describe("Search", () => {
  it("allows to find games", () => {
    cy.visit("/");
    cy.getNode("search-input").type("witcher{enter}");
    cy.getNode("game-card-the-witcher-3-wild-hunt-game-of-the-year-edition");
    cy.getNode("game-card-the-witcher-3-wild-hunt");
    cy.getNode("game-card-the-witcher-2-assassins-of-kings");
  });
});
