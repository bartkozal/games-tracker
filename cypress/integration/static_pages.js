describe("Static pages", () => {
  it("allows to visit privacy policy", () => {
    cy.visit("/");
    cy.getId("footer")
      .contains("Privacy Policy")
      .click();
    cy.get("h1:contains('Privacy Policy')").should("exist");
  });
});
