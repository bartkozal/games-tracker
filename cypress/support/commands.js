Cypress.Commands.add("getNode", testId => cy.get(`[data-cy="${testId}"]`));

Cypress.Commands.add("findNode", { prevSubject: true }, (subject, testId) =>
  subject.find(`[data-cy="${testId}"]`)
);
