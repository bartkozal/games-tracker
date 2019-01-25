describe("Collection", () => {
  before(() => {
    cy.signIn();
  });

  it("allows to add to collection", () => {
    cy.getId("search-bar-input").type("witcher{enter}");
    cy.getId("card-the-witcher-3-wild-hunt")
      .findId("dropdown-collection")
      .click();
    cy.getId("dropdown-item-playing").click();
    cy.getId("card-the-witcher-2-assassins-of-kings")
      .findId("dropdown-collection")
      .click();
    cy.getId("dropdown-item-backlog").click();
    cy.getId("logo").click();
    cy.getId("card-the-witcher-3-wild-hunt").should("exist");
    cy.getId("tab-backlog").click();
    cy.getId("card-the-witcher-2-assassins-of-kings").should("exist");
  });

  it("allows to remove from collection", () => {
    cy.getId("card-the-witcher-2-assassins-of-kings").should("exist");
    cy.getId("dropdown-collection").click();
    cy.getId("dropdown-item-remove-from-collection").click();
    cy.getId("card-the-witcher-2-assassins-of-kings").should("not.exist");
  });

  it("allows to add rating", () => {
    cy.getId("tab-playing")
      .click()
      .getId("card-the-witcher-3-wild-hunt")
      .should("exist")
      .getId("dropdown-rating")
      .click()
      .getId("dropdown-item-rate-9")
      .click()
      .getId("score-value")
      .contains(9.0)
      .getId("score-votes")
      .contains(1);
  });

  it("allows to remove rating", () => {
    cy.getId("card-the-witcher-3-wild-hunt")
      .should("exist")
      .getId("dropdown-rating")
      .click()
      .getId("dropdown-item-unrate")
      .click()
      .getId("score-value")
      .should("not.exist")
      .getId("score-votes")
      .should("not.exist");
  });

  it("allows to add platform", () => {
    cy.getId("button-small-inactive-platforms")
      .click()
      .getId("dropdown-item-pc")
      .should("not.have.class", "checked")
      .getId("dropdown-item-pc")
      .click()
      .getId("button-small-pc")
      .click()
      .getId("dropdown-item-pc")
      .should("have.class", "checked")
      .getId("dropdown-item-ps-4")
      .click();
  });

  it("shows unassigned collection", () => {
    cy.getId("dropdown-collection")
      .click()
      .getId("dropdown-item-remove-from-collection")
      .click()
      .getId("tab-unassigned")
      .click()
      .getId("card-the-witcher-3-wild-hunt")
      .should("exist")
      .getId("card-the-witcher-3-wild-hunt")
      .findId("dropdown-collection")
      .click()
      .getId("dropdown-item-playing")
      .click()
      .getId("tab-playing")
      .click()
      .getId("card-the-witcher-3-wild-hunt")
      .should("exist");
  });

  it("allows to remove platform", () => {
    cy.getId("button-small-2")
      .click()
      .getId("dropdown-item-pc")
      .should("have.class", "checked")
      .getId("dropdown-item-pc")
      .click()
      .getId("button-small-ps-4")
      .click()
      .getId("dropdown-item-pc")
      .should("not.have.class", "checked")
      .getId("dropdown-item-ps-4")
      .click()
      .getId("button-small-inactive-platforms")
      .should("exist");
  });

  after(() => {
    cy.signOut();
  });
});
