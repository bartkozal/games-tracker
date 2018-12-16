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
    cy.getId("tab-playing").click();
    cy.getId("card-the-witcher-3-wild-hunt").should("exist");
    cy.getId("dropdown-rating").click();
    cy.getId("dropdown-item-rate-9").click();
    cy.getId("score-value").contains(9.0);
    cy.getId("score-votes").contains(1);
  });

  it("allows to remove rating", () => {
    cy.getId("card-the-witcher-3-wild-hunt").should("exist");
    cy.getId("dropdown-rating").click();
    cy.getId("dropdown-item-unrate").click();
    cy.getId("score-value").should("not.exist");
    cy.getId("score-votes").should("not.exist");
  });

  it("allows to add platform", () => {
    cy.getId("button-small-inactive-platforms").click();
    cy.getId("dropdown-item-pc").should("not.have.class", "checked");
    cy.getId("dropdown-item-pc").click();
    cy.getId("button-small-pc").click();
    cy.getId("dropdown-item-pc").should("have.class", "checked");
    cy.getId("dropdown-item-ps-4").click();
  });

  it("shows unassigned collection", () => {
    cy.getId("dropdown-collection").click();
    cy.getId("dropdown-item-remove-from-collection").click();
    cy.getId("tab-unassigned").click();
    cy.getId("card-the-witcher-3-wild-hunt").should("exist");
    cy.getId("card-the-witcher-3-wild-hunt")
      .findId("dropdown-collection")
      .click();
    cy.getId("dropdown-item-playing").click();
    cy.getId("tab-playing").click();
    cy.getId("card-the-witcher-3-wild-hunt").should("exist");
  });

  it("allows to remove platform", () => {
    cy.getId("button-small-2").click();
    cy.getId("dropdown-item-pc").should("have.class", "checked");
    cy.getId("dropdown-item-pc").click();
    cy.getId("button-small-ps-4").click();
    cy.getId("dropdown-item-pc").should("not.have.class", "checked");
    cy.getId("dropdown-item-ps-4").click();
    cy.getId("button-small-inactive-platforms").should("exist");
  });

  after(() => {
    cy.signOut();
  });
});
