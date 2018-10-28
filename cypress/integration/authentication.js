describe("Authentication", () => {
  it("allows to sign in with Facebook", () => {
    cy.visit("/");
    cy.getBy("button-facebook");
  });

  it("allows to log out", () => {
    cy.signIn();
    cy.getBy("dropdown-user").click();
    cy.getBy("dropdown-item-sign-out").click();
    cy.getBy("dropdown-user").should("not.exist");
    cy.getBy("button-facebook").should("exist");
  });
});
