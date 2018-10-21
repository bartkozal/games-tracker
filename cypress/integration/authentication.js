describe("Authentication", () => {
  it("allows to sign in with Facebook", () => {
    cy.visit("/");
    cy.getNode("button-facebook-sign-in-with-facebook");
  });

  it("allows to log out", () => {
    cy.signIn("bkzl@me.com");
    cy.getNode("avatar").click();
    cy.getNode("dropdown-item-sign-out").click();
    cy.getNode("avatar").should("not.exist");
    cy.getNode("button-facebook-sign-in-with-facebook").should("exist");
  });
});
