/// <reference types="cypress" />

class MainPage {
  shoppingCartButton() {
    return cy.get(".shopping_cart_link");
  }

  //Operations

  addItemToCart(...products) {
    let cart = {};

    products.forEach((product) => {
      let productInfo = {};
      let nameSelector = ".inventory_item_name";
      let selectorArr = [
        ".inventory_item_name",
        ".inventory_item_price",
        ".inventory_item_desc",
      ];
      let productBoxSelector = ".inventory_item_description";

      cy.get(nameSelector)
        .contains(product)
        .parents(productBoxSelector)
        .within(() => {
          selectorArr.forEach((element) => {
            cy.get(element)
              .invoke("text")
              .then((text) => {
                productInfo[element.split("_")[2]] = text;
              });
          });
          cy.get("button").contains("Add to cart").click();
        });

      cart[product] = productInfo;
    });

    cy.writeFile("cypress/fixtures/cart.json", cart);
  }
}

module.exports = MainPage;
