Cypress.Commands.add("getNode", testId => cy.get(`[data-cy="${testId}"]`));

Cypress.Commands.add("findNode", { prevSubject: true }, (subject, testId) =>
  subject.find(`[data-cy="${testId}"]`)
);

Cypress.Commands.add("signIn", email => {
  cy.request(`/auth/cypress?email=${email}`).then(response => {
    cy.setCookie("auth", JSON.stringify(response.body));
  });
  cy.visit("/");
});

Cypress.Commands.add("signOut", () => {
  cy.clearCookie("auth");
});
