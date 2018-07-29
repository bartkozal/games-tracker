describe("Collection", () => {
  it("allows to collect games by status", () => {
    cy.signIn();
    cy.visit("/");

    cy.getId("search-input").type("witcher{enter}");
    cy.getId("game-card-the-witcher-3-wild-hunt")
      .findId("button-add-to-collection")
      .click();
    cy.getId("dropdown-item-backlog").click();

    cy.getId("link-profile").click();
    cy.getId("game-card-the-witcher-3-wild-hunt").findId("button-backlog");
    cy.getId("link-home").click({ force: true });
    cy.getId("game-card-the-witcher-3-wild-hunt").findId("button-backlog");
  });

  it.skip("allows to collect games by platforms", () => {});
});
