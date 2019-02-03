describe("Authentication", () => {
  it("allows to sign in with Facebook", () => {
    cy.visit("/").getId("button-facebook");
  });

  it("allows to log out", () => {
    cy.signIn()
      .getId("dropdown-user")
      .click()
      .getId("dropdown-item-sign-out")
      .click()
      .getId("dropdown-user")
      .should("not.exist")
      .getId("button-facebook")
      .should("exist");
  });

  it("allows to remove account", () => {
    const user = "user@example.com";
    cy.signIn(user)
      .getId("search-bar-input")
      .type("witcher{enter}")
      .getId("card-the-witcher-3-wild-hunt")
      .findId("dropdown-collection")
      .click()
      .getId("dropdown-item-playing")
      .click()
      .visit("/")
      .getId("card-the-witcher-3-wild-hunt")
      .should("exist")
      .getId("footer")
      .contains("Remove my account")
      .click()
      .getId("button-destructive")
      .click()
      .signIn(user)
      .getId("card-the-witcher-3-wild-hunt")
      .should("not.exist")
      .signOut();
  });
});
