/// <reference types="cypress" />

class CartPage {
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
    cy.fixture("cart.json").then((object) => {
      for (let key in object) {
        if (object.hasOwnProperty(key)) {
          const productInfo = object[key];

          cy.get(".inventory_item_name")
            .contains(productInfo.name)
            .parents(".cart_item_label")
            .within(() => {
              this.cartProductName()
                .invoke("text")
                .should("eq", productInfo.name);
              this.cartProductPrice()
                .invoke("text")
                .should("eq", productInfo.price);
              this.cartProductDesc()
                .invoke("text")
                .should("eq", productInfo.desc);
            });
        }
      }
    });
    this.checkoutButton().click();
  }
}

module.exports = CartPage;
