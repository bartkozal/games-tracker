describe("Collection", () => {
  before(() => {
    cy.signIn();
    cy.visit("/");
  });

  it("allows to add to collection", () => {
    cy.getNode("search-input").type("witcher{enter}");
    cy.getNode("game-card-the-witcher-3-wild-hunt")
      .findNode("button-outline-add-to-collection")
      .click();
    cy.getNode("dropdown-item-playing").click();

    cy.getNode("game-card-the-witcher-2-assassins-of-kings")
      .findNode("button-outline-add-to-collection")
      .click();
    cy.getNode("dropdown-item-backlog").click();
    cy.getNode("logo").click();

    cy.getNode("game-card-the-witcher-3-wild-hunt").should("exist");
    cy.getNode("tab-backlog").click();
    cy.getNode("game-card-the-witcher-2-assassins-of-kings").should("exist");
  });

  it.skip("allows to remove from collection", () => {});
  it.skip("allows to add rating", () => {});
  it.skip("allows to remove rating", () => {});
  it.skip("allows to add platform", () => {});
  it.skip("allows to remove platform", () => {});
  it.skip("shows unassigned collection", () => {});
});
