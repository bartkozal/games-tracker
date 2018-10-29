describe("Authentication", () => {
  it("allows to sign in with Facebook", () => {
    cy.visit("/");
    cy.getId("button-facebook");
  });

  it("allows to log out", () => {
    cy.signIn();
    cy.getId("dropdown-user").click();
    cy.getId("dropdown-item-sign-out").click();
    cy.getId("dropdown-user").should("not.exist");
    cy.getId("button-facebook").should("exist");
  });
});
