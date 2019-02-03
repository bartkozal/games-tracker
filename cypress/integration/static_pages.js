describe("Static pages", () => {
  it("allows to visit privacy policy", () => {
    cy.visit("/")
      .getId("footer")
      .contains("Privacy policy")
      .click()
      .get("h1")
      .contains("Privacy policy")
      .should("exist");
  });
});
