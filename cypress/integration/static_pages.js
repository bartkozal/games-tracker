describe("Static pages", () => {
  it("allows to visit privacy policy", () => {
    cy.visit("/")
      .getId("footer")
      .contains("Privacy Policy")
      .click()
      .get("h1")
      .contains("Privacy Policy")
      .should("exist");
  });
});
