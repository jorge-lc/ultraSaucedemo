/// <reference types='cypress' />
const LoginPage = require('../../support/pageObject/loginPage');
const MainPage = require('../../support/pageObject/mainPage');
const CartPage = require('../../support/pageObject/cartPage');

context("purchase", () => {
  let username;
  let password;
  let loginPage;
  let mainPage;
  let cartPage;

  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad(win) {
        delete win.navigator.__proto__.serviceWorker;
      },
    });
    cy.fixture('credentials.json').as('credentials');
    loginPage = new LoginPage();
    mainPage = new MainPage();
    cartPage = new CartPage();
  });

  it('Buy', function () {
    let productsInfo = {};
    username = this.credentials.username;
    password = this.credentials.password;
    loginPage.login(username, password);

    productsInfo = mainPage.addItemToCart('Sauce Labs Backpack', 'Sauce Labs Bike Light');
    mainPage.shoppingCartButton().click();
    cartPage.validateProductInfoAndCheckOut();
  });
});
