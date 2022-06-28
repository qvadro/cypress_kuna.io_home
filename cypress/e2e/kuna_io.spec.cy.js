/// <reference types="cypress" />

//const { contains } = require('cypress/types/jquery');

describe('verify home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should contain main parts of first screen', () => {
    cy.get('h1').should(
      'contain.text',
      'Лучший способ покупки и продажи криптовалюты'
    );

    cy.get('.gOeznYXwfa2w8DRUSi3RD').should(
      'contain.text',
      'Зарегистрируйтесь сейчас, чтобы купить криптовалюту и торговать на самых популярных валютных парах'
    );

    cy.get('.awdvj5-1').should('contain.text', 'Создать аккаунт');

    cy.get('.awdvj5-1').should('contain.text', 'Войти');

    cy.get('.sc-16gkhjv-0').should('contain.text', 'Продолжить');

    cy.get('.uka2fw-0').should('contain.text', 'Продолжить с Google');

    cy.get('.sc-1eh7vy7-0').should('contain.text', 'Продолжить с Apple');
  });

  it('should contain main parts of information about currencies screen', () => {
    cy.get('._uzyzf04yHCjEdJYRZsfw').should('contain.text', 'UAH');
    cy.get('._uzyzf04yHCjEdJYRZsfw').should('contain.text', 'BTC');
    cy.get('._uzyzf04yHCjEdJYRZsfw').should('contain.text', 'USD');
    cy.get('.V2WfXJ6vxyoymiQQEZar1').should('contain.text', 'Pairs');
    cy.get('.V2WfXJ6vxyoymiQQEZar1').should('contain.text', 'Last price');
    cy.get('.V2WfXJ6vxyoymiQQEZar1').should('contain.text', '24h');
  });

  it('should contain main parts of information about dashboard screen', () => {
    cy.get('.sc-1fxmgdp-2').should(
      'contain.text',
      'Покупайте криптовалюту в 2 клика на Dashboard'
    );

    cy.get('.sc-1fxmgdp-3').should(
      'contain.text',
      'Дашборд — инструмент с помощью которого вы сможете отслеживать показатели в реальном времени и моментально покупать, продавать и обменивать криптовалюты. Его основная цель — сделать жизнь пользователей Kuna проще'
    );

    cy.get('.sc-1fxmgdp-10').should(
      'contain.text',
      'Быстрая покупка, продажа, обмен'
    );

    cy.get('.sc-1fxmgdp-10').should('contain.text', 'Мгновенное отслеживание');

    cy.get('.sc-1fxmgdp-10').should(
      'contain.text',
      'Личное портфолио криптовалют'
    );

    cy.get('.sc-1fxmgdp-9').should('contain.text', 'Купить');
    cy.get('.sc-1fxmgdp-6').should('contain.text', 'Видеопрезентация дашборда');
  });

  it('should contain main parts of statistic screen', () => {
    cy.get('.EYAhKbD3bcjfbnA9zpvJN').should(
      'contain.text',
      'Объем торгов за 7 дней'
    );

    cy.get('.EYAhKbD3bcjfbnA9zpvJN').should(
      'contain.text',
      'Объем торгов за день'
    );

    cy.get('.EYAhKbD3bcjfbnA9zpvJN').should(
      'contain.text',
      'Активных трейдеров'
    );
  });

  it('should contain main parts of `why kuna` screen', () => {
    cy.get('#why-kuna').should('contain.text', 'Легкий и быстрый ввод и вывод');
    cy.get('#why-kuna').should('contain.text', 'UAH');
    cy.get('#why-kuna').should('contain.text', 'USD');
    cy.get('#why-kuna').should('contain.text', 'Kuna Code');
    cy.get('#why-kuna').should('contain.text', 'Visa/Mastercard');
  });

  it('should contain main parts of `Kuna code` screen', () => {
    cy.get('.iyufeh').should('contain.text', 'Kuna Code PRO');

    cy.get('.iyufeh')
      .contains('button', 'Пополнить UAH через Kuna Code')
      .should('exist');

    cy.get('.iyufeh')
      .contains('button', 'Вывести UAH через Kuna Code')
      .should('exist');
  });

  it('should contain main parts of `Exchange accounts` screen', () => {
    cy.get('._2PmeMWZ73lCwXq2n3Zlsxw').should(
      'contain.text',
      'Счета биржи обеспечены на 100%'
    );
    cy.get('._2PmeMWZ73lCwXq2n3Zlsxw').should(
      'contain.text',
      'Количество активов на нашей бирже - это реально существующие средства.'
    );

    cy.get('._2PmeMWZ73lCwXq2n3Zlsxw').should(
      'contain.text',
      'У банков норма резервирования составляет менее 10% от общего объема привлеченных средств'
    );

    cy.get('._2PmeMWZ73lCwXq2n3Zlsxw')
      .contains('button', 'Норма резервирования банков')
      .should('exist');
  });
});
