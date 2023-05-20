/// <reference types="cypress" />

class CheckoutCompletePage {
  checkoutCompleteTitle() {
    return cy.get('span[class="title"]');
  }

  checkoutCompleteHeader() {
    return cy.get(".complete-header");
  }

  checkoutCompleteText() {
    return cy.get(".complete-text");
  }

  shoppingCartWithItems() {
    return cy.get(".shopping_cart_badge");
  }

  //operations

  validateCompleteCheckout() {
    this.checkoutCompleteTitle()
      .invoke("text")
      .should("eq", "Checkout: Complete!");
    this.checkoutCompleteHeader()
      .invoke("text")
      .should("eq", "Thank you for your order!");
    this.checkoutCompleteText()
      .invoke("text")
      .should(
        "eq",
        "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
      );
    this.shoppingCartWithItems().should("not.exist");
  }
}

module.exports = CheckoutCompletePage;
