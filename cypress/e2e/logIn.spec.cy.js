/// <reference types="cypress" />

describe('verify bugrer menu', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should successfully log in', () => {
    cy.get('.sc-1dgvlmb-2 > .sc-16gkhjv-0').should('exist').click();
    cy.url().should('include', '/signin');
    cy.get('#email').type('qvadropromotion@gmail.com');
    cy.get('#password').type('Pa$$word!');
    cy.get('.sc-16gkhjv-0').click();
  });
});
