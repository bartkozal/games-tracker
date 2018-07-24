describe("Search", () => {
  it("works", () => {
    cy.server();
    cy.route("GET", "/api/search?q=*", "fixture:search.json");

    cy.visit("/");
    cy.detect("search-input").type("witcher{enter}");
  });
});
