describe("Search", () => {
  it("allows to find games", () => {
    cy.visit("/")
      .getId("search-bar-input")
      .type("witcher{enter}")
      .getId("card-the-witcher-3-wild-hunt")
      .should("exist")
      .getId("card-the-witcher-2-assassins-of-kings")
      .should("exist")
      .getId("card-the-witcher")
      .should("exist");
  });
});
