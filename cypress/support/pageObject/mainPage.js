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

  validateFilters() {
    let filterArr = [];
    cy.get(".product_sort_container > option")
      .each((elementFilter) => {
        cy.wrap(elementFilter)
          .invoke("text")
          .then((text) => {
            filterArr.push(text.trim());
          });
      })
      .then(() => {
        filterArr.forEach((elementFilter) => {
          let nameSelector = ".inventory_item_name";
          let priceSelector = ".inventory_item_price";
          cy.get("select[data-test='product_sort_container']")
            .select(elementFilter)
            .then(() => {
              this.filterOrderValidator(
                elementFilter,
                nameSelector,
                priceSelector
              );
            });
        });
      });
  }

  getElementsText(selector) {
    return cy.get(selector).then((elements) => {
      const texts = [];
      Cypress._.each(elements, (element) => {
        const text = Cypress.$(element).text().trim();
        texts.push(text);
      });
      return texts;
    });
  }

  filterOrderValidator(element, nameSelector, priceSelector) {
    const orderValidations = {
      "Name (A to Z)": (texts) => {
        return texts.every((text, index) => {
          if (index === 0) {
            return true;
          }
          return text >= texts[index - 1];
        });
      },
      "Name (Z to A)": (texts) => {
        return texts.every((text, index) => {
          if (index === 0) {
            return true;
          }
          return text <= texts[index - 1];
        });
      },
      "Price (low to high)": (texts) => {
        return texts.every((text, index) => {
          if (index === 0) {
            return true;
          }

          return (
            Number(text.replace("$", "")) >=
            Number(texts[index - 1].replace("$", ""))
          );
        });
      },
      "Price (high to low)": (texts) => {
        return texts.every((text, index) => {
          if (index === 0) {
            return true;
          }
          return (
            Number(text.replace("$", "")) <=
            Number(texts[index - 1].replace("$", ""))
          );
        });
      },
    };

    let selector;
    if (element.includes("Name")) {
      selector = nameSelector;
    } else {
      selector = priceSelector;
    }

    this.getElementsText(selector).then((texts) => {
      const validationFn = orderValidations[element];
      expect(validationFn(texts)).to.be.true;
    });
  }
}

module.exports = MainPage;
