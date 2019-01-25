describe("Authorization", () => {
  describe("not logged in", () => {
    before(() => {
      cy.getId("search-bar-input").type("witcher{enter}");
    });

    it("shows authorization alert on collection dropdown click", () => {
      cy.getId("card-the-witcher-3-wild-hunt")
        .findId("dropdown-collection")
        .click()
        .getId("modal")
        .contains("Please sign in to use this feature.")
        .getId("modal-close")
        .click();
    });

    it("shows authorization alert on rating dropdown click", () => {
      cy.getId("card-the-witcher-3-wild-hunt")
        .findId("dropdown-rating")
        .click()
        .getId("modal")
        .contains("Please sign in to use this feature.")
        .getId("modal-close")
        .click();
    });

    it("shows authorization alert on platforms dropdown click", () => {
      cy.getId("card-the-witcher-3-wild-hunt")
        .findId("button-small-inactive-pc")
        .click()
        .getId("modal")
        .contains("Please sign in to use this feature.")
        .getId("modal-close")
        .click();
    });
  });
});
