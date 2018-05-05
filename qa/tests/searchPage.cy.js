describe("Search Page", () => {
  it("initializes search input value based on query param in the url", () => {
    cy.visit("/search?q=foo");
    const searchInput = cy.get("input[type=search]");
    searchInput.should("have.value", "foo");
  });
});
