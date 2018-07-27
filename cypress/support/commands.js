Cypress.Commands.add("getId", id => cy.get(`[data-test="${id}"]`));
