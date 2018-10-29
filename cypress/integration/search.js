describe("Search", () => {
  it("allows to find games", () => {
    cy.visit("/");
    cy.getId("search-bar-input").type("witcher{enter}");
    cy.getId("card-the-witcher-3-wild-hunt").should("exist");
    cy.getId("card-the-witcher-2-assassins-of-kings").should("exist");
    cy.getId("card-the-witcher").should("exist");
  });
});
