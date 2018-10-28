describe("Search", () => {
  it("allows to find games", () => {
    cy.visit("/");
    cy.getBy("search-bar-input").type("witcher{enter}");
    cy.getBy("card-the-witcher-3-wild-hunt").should("exist");
    cy.getBy("card-the-witcher-2-assassins-of-kings").should("exist");
    cy.getBy("card-the-witcher").should("exist");
  });
});
