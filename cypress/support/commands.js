Cypress.Commands.add("getId", id => cy.get(`[data-test="${id}"]`));

Cypress.Commands.add("findId", { prevSubject: true }, (subject, id) =>
  subject.find(`[data-test="${id}"]`)
);

Cypress.Commands.add("signIn", () => {
  cy.fixture("authCookie").then(authCookie => {
    cy.setCookie("auth", encodeURIComponent(JSON.stringify(authCookie)));
  });
});

Cypress.Commands.add("signOut", () => {
  cy.clearCookies();
});
