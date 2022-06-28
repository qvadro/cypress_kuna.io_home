/// <reference types="cypress" />

describe('verify bugrer menu', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should redirect to `Trades` page', () => {
    cy.get('#react-burger-menu-btn').should('exist').click();
    cy.contains('a', 'Торги').should('exist').click();
    cy.url().should('include', '/btcusdt');
  });

  it('should redirect to `About us` page', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.contains('a', 'О нас').should('exist').click();
    cy.url().should('include', '/about-us');
  });

  it('should allow to open Sign in page', () => {
    cy.get('#react-burger-menu-btn').should('exist').click();

    cy.get('.signin').should('exist').click();

    cy.url().should('include', '/signin');
  });

  it('should allow to open Sign up page', () => {
    cy.get('#react-burger-menu-btn').should('exist').click();

    cy.get('.signup').should('exist').click();

    cy.url().should('include', '/signup');
  });
});
