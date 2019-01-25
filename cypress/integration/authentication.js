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
});
