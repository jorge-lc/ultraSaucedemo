/// <reference types="cypress" />

const BasePage = require("./basePage");

class CheckoutStepTwoPage extends BasePage {
  cartProductName() {
    return cy.get(".inventory_item_name");
  }

  cartProductDesc() {
    return cy.get(".inventory_item_desc");
  }

  cartProductPrice() {
    return cy.get(".inventory_item_price");
  }

  paymentInformationText() {
    return cy.get(".summary_value_label:nth-child(2)").invoke("text");
  }

  shippingInformationText() {
    return cy.get(".summary_value_label:nth-child(4)").invoke("text");
  }

  itemsSubTotal() {
    return cy.get(".summary_subtotal_label").invoke("text");
  }

  itemsTaxes() {
    return cy.get(".summary_tax_label").invoke("text");
  }

  totalPriceText() {
    return cy.get(".summary_total_label").invoke("text");
  }

  finishButton() {
    return cy.get('button[data-test="finish"]');
  }

  //operations

  validateProductInfoAndFinish(object) {
    this.validateProducts();
    this.paymentInformationText().should("eq", object.paymentInfo);
    this.shippingInformationText().should("eq", object.shippingInfo);
    cy.fixture("cart.json").then((object) => {
      let subTotalJson = 0;
      let taxesJson = 0;
      let totalJson = 0;

      Object.values(object).forEach((subObject) => {
        subTotalJson += parseFloat(subObject.price.replace("$", ""));
      });

      taxesJson =
        Math.ceil(subTotalJson * (7.99 / 100) * 100 + Number.EPSILON) / 100;
      totalJson =
        Math.ceil((subTotalJson + taxesJson) * 100 + Number.EPSILON) / 100;

      this.itemsSubTotal().then((text) => {
        let subTotalUI = parseFloat(text.match(/\d+\.\d+/)[0]);
        expect(subTotalUI).to.equal(subTotalJson);
      });
      this.itemsTaxes().then((text) => {
        let subTaxesUI = parseFloat(text.match(/\d+\.\d+/)[0]);
        expect(subTaxesUI).to.equal(taxesJson);
      });
      this.totalPriceText().then((text) => {
        let totalPriceUI = parseFloat(text.match(/\d+\.\d+/)[0]);
        expect(totalPriceUI).to.equal(totalJson);
      });
    });
    this.finishButton().click();
  }
}

module.exports = CheckoutStepTwoPage;
