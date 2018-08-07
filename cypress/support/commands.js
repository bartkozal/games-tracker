Cypress.Commands.add("getId", id => cy.get(`[data-test="${id}"]`));

Cypress.Commands.add("findId", { prevSubject: true }, (subject, id) =>
  subject.find(`[data-test="${id}"]`)
);

Cypress.Commands.add("signIn", () => {
  cy.fixture("authUser").then(user => {
    // localStorage.set("currentUser", user);
  });
});

Cypress.Commands.add("signOut", () => {
  // localStorage.remove("currentUser");
});
