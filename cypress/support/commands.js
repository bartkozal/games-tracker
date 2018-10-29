Cypress.Commands.add("getId", testId => cy.get(`[data-cy="${testId}"]`));

Cypress.Commands.add("findId", { prevSubject: true }, (subject, testId) =>
  subject.find(`[data-cy="${testId}"]`)
);

Cypress.Commands.add("signIn", (email = `user-${Date.now()}@example.com`) => {
  cy.request(`/auth/cypress?email=${email}`).then(response => {
    cy.setCookie("auth", JSON.stringify(response.body));
  });
  cy.visit("/");
});

Cypress.Commands.add("signOut", () => {
  cy.clearCookie("auth");
});
