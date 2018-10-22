describe("Collection", () => {
  before(() => {
    cy.signIn();
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

  it("allows to remove from collection", () => {
    cy.getNode("game-card-the-witcher-2-assassins-of-kings").should("exist");
    cy.getNode("button-primary-backlog").click();
    cy.getNode("dropdown-item-remove-from-collection").click();
    cy.getNode("game-card-the-witcher-2-assassins-of-kings").should(
      "not.exist"
    );
  });

  it("allows to add rating", () => {
    cy.getNode("tab-playing").click();
    cy.getNode("game-card-the-witcher-3-wild-hunt").should("exist");
    cy.getNode("rating-toggle").click();
    cy.getNode("rating-star-9").click();
    cy.getNode("score-value").contains(9.0);
    cy.getNode("score-votes").contains(1);
  });

  it("allows to remove rating", () => {
    cy.getNode("game-card-the-witcher-3-wild-hunt").should("exist");
    cy.getNode("rating-toggle").click();
    cy.getNode("rating-unstar").click();
    cy.getNode("score-value").should("not.exist");
    cy.getNode("score-votes").should("not.exist");
  });

  it("allows to add platform", () => {
    cy.getNode("button-outline-pc").click();
    cy.getNode("button-outline-pc").should("not.exist");
    cy.getNode("button-primary-pc").should("exist");
  });

  it("shows unassigned collection", () => {
    cy.getNode("button-primary-playing").click();
    cy.getNode("dropdown-item-remove-from-collection").click();
    cy.getNode("tab-unassigned").click();
    cy.getNode("game-card-the-witcher-3-wild-hunt").should("exist");
    cy.getNode("game-card-the-witcher-3-wild-hunt")
      .findNode("button-outline-add-to-collection")
      .click();
    cy.getNode("dropdown-item-playing").click();
    cy.getNode("tab-playing").click();
    cy.getNode("game-card-the-witcher-3-wild-hunt").should("exist");
  });

  it("allows to remove platform", () => {
    cy.getNode("button-primary-pc").click();
    cy.getNode("button-primary-pc").should("not.exist");
    cy.getNode("button-outline-pc").should("exist");
  });

  after(() => {
    cy.signOut();
  });
});
