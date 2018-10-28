describe("Collection", () => {
  before(() => {
    cy.signIn();
  });

  it("allows to add to collection", () => {
    cy.getBy("search-bar-input").type("witcher{enter}");
    cy.getBy("card-the-witcher-3-wild-hunt")
      .findBy("dropdown-collection")
      .click();
    cy.getBy("dropdown-item-playing").click();
    cy.getBy("card-the-witcher-2-assassins-of-kings")
      .findBy("dropdown-collection")
      .click();
    cy.getBy("dropdown-item-backlog").click();
    cy.getBy("logo").click();
    cy.getBy("card-the-witcher-3-wild-hunt").should("exist");
    cy.getBy("tab-backlog").click();
    cy.getBy("card-the-witcher-2-assassins-of-kings").should("exist");
  });

  it("allows to remove from collection", () => {
    cy.getBy("card-the-witcher-2-assassins-of-kings").should("exist");
    cy.getBy("dropdown-collection").click();
    cy.getBy("dropdown-item-remove-from-collection").click();
    cy.getBy("card-the-witcher-2-assassins-of-kings").should("not.exist");
  });

  it("allows to add rating", () => {
    cy.getBy("tab-playing").click();
    cy.getBy("card-the-witcher-3-wild-hunt").should("exist");
    cy.getBy("dropdown-rating").click();
    cy.getBy("dropdown-item-rate-9").click();
    cy.getBy("score-value").contains(9.0);
    cy.getBy("score-votes").contains(1);
  });

  it("allows to remove rating", () => {
    cy.getBy("card-the-witcher-3-wild-hunt").should("exist");
    cy.getBy("dropdown-rating").click();
    cy.getBy("dropdown-item-unrate").click();
    cy.getBy("score-value").should("not.exist");
    cy.getBy("score-votes").should("not.exist");
  });

  it("allows to add platform", () => {
    cy.getBy("button-small-outline-pc").click();
    cy.getBy("button-small-outline-pc").should("not.exist");
    cy.getBy("button-small-pc").should("exist");
  });

  it("shows unassigned collection", () => {
    cy.getBy("dropdown-collection").click();
    cy.getBy("dropdown-item-remove-from-collection").click();
    cy.getBy("tab-unassigned").click();
    cy.getBy("card-the-witcher-3-wild-hunt").should("exist");
    cy.getBy("card-the-witcher-3-wild-hunt")
      .findBy("dropdown-collection")
      .click();
    cy.getBy("dropdown-item-playing").click();
    cy.getBy("tab-playing").click();
    cy.getBy("card-the-witcher-3-wild-hunt").should("exist");
  });

  it("allows to remove platform", () => {
    cy.getBy("button-small-pc").click();
    cy.getBy("button-small-pc").should("not.exist");
    cy.getBy("button-small-outline-pc").should("exist");
  });

  after(() => {
    cy.signOut();
  });
});
