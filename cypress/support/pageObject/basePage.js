/// <reference types="cypress" />

class BasePage {
  validateProducts() {
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
  }
}

module.exports = BasePage;
