Cypress.Commands.add("detect", id => cy.get(`[data-test="${id}"]`));
