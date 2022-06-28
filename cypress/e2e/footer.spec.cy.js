/// <reference types="cypress" />

describe('verify footer', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should redirect to `Buy bitcoin` page', () => {
    cy.contains('a', 'Купить биткоин').should('exist').click();
    cy.url().should('include', '/buy-bitcoin');
  });

  it('should redirect to `Sell bitcoin` page', () => {
    cy.contains('a', 'Продать биткоин').should('exist').click();
    cy.url().should('include', '/sell-bitcoin');
  });

  it('should redirect to `commissions and limits` page', () => {
    cy.contains('a', 'Комиссии и лимиты').should('exist').click();
    cy.url().should('include', '/fees');
  });

  it('should redirect to `Referral-program` page', () => {
    cy.contains('a', 'Реферальная программа').should('exist').click();
    cy.url().should('include', '/referral-program');
  });
});
