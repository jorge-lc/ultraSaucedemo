/// <reference types="cypress" />

const BasePage = require("./basePage");

class CartPage extends BasePage {
  cartProductName() {
    return cy.get(".inventory_item_name");
  }

  cartProductDesc() {
    return cy.get(".inventory_item_desc");
  }

  cartProductPrice() {
    return cy.get(".inventory_item_price");
  }

  removeButton() {
    return cy.get("#remove-sauce-labs-backpack");
  }

  checkoutButton() {
    return cy.get("#checkout");
  }

  continueShoppingButton() {
    return cy.get("#continue-shopping");
  }

  //Operations

  validateProductInfoAndCheckOut() {
    this.validateProducts();
    this.checkoutButton().click();
  }
}

module.exports = CartPage;
