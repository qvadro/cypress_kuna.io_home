/// <reference types="cypress" />

describe('verify log in', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should successfully log in', () => {
    cy.get('.sc-1dgvlmb-2 > .sc-16gkhjv-0').should('exist').click();
    cy.url().should('include', '/signin');
  });
});
