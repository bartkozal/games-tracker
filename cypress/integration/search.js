describe("Search", () => {
  it("works", () => {
    cy.visit("/");
    cy.getId("search-input").type("witcher{enter}");
    cy.getId("game-card-the-witcher-3-wild-hunt");
    cy.getId("game-card-the-witcher-2-assassins-of-kings");
    cy.getId("game-card-the-witcher");
  });

  it("allows to collect and rate games", () => {
    // Search game as logged in user
    cy.signIn();
    cy.visit("/");
    cy.getId("search-input").type("witcher{enter}");
    cy.getId("game-card-the-witcher-3-wild-hunt");

    // Add game to backlog
    cy.getId("game-card-the-witcher-3-wild-hunt")
      .findId("button-primary-add-to-collection")
      .click();
    cy.getId("dropdown-item-backlog").click();

    // Rate it for 9
    cy.getId("game-card-the-witcher-3-wild-hunt")
      .findId("button-primary-rate")
      .click();
    cy.getId("dropdown-item-9").click();

    // Have it on PS4
    cy.getId("game-card-the-witcher-3-wild-hunt")
      .findId("button-outline-ps-4")
      .click();

    // Verify the game has been added to the profile
    cy.getId("link-profile").click();
    cy.getId("game-card-the-witcher-3-wild-hunt").findId(
      "button-primary-backlog"
    );
    cy.getId("game-card-the-witcher-3-wild-hunt").findId("button-primary-9");
    cy.getId("game-card-the-witcher-3-wild-hunt").findId("button-primary-ps-4");

    // Verify the game is correctly shown on search results
    cy.getId("link-home").click({ force: true });
    cy.getId("game-card-the-witcher-3-wild-hunt").findId(
      "button-primary-backlog"
    );
    cy.getId("game-card-the-witcher-3-wild-hunt").findId("button-primary-9");
    cy.getId("game-card-the-witcher-3-wild-hunt").findId("button-primary-ps-4");
  });
});
