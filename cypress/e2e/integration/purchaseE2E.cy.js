/// <reference types="cypress" />
const LoginPage = require('../../support/pageObject/loginPage');
const MainPage = require('../../support/pageObject/mainPage');

context('purchase', () => {
    let username;
    let password;
    let loginPage;
    let mainPage;

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.fixture('credentials.json').as('credentials');
        loginPage = new LoginPage();
        mainPage = new MainPage();
    });

    it('Buy', function () {
        
        username = this.credentials.username;
        password = this.credentials.password;
        loginPage.login(username, password);

        let productInfo = mainPage.addItemToCart('Sauce Labs Backpack');
        mainPage.shoppingCartButton().click();
    });
});