/// <reference types="cypress" />

class CheckoutStepOnePage {
  firstNameField() {
    return cy.get('input[data-test="firstName"]');
  }

  lastNameField() {
    return cy.get('input[data-test="lastName"]');
  }

  postalCodeField() {
    return cy.get('input[data-test="postalCode"]');
  }

  continueButton() {
    return cy.get('input[data-test="continue"]');
  }

  //operations

  completeForm(formInfo) {
    this.firstNameField().type(formInfo.firstName);
    this.lastNameField().type(formInfo.lastName);
    this.postalCodeField().type(formInfo.zipCode);
    this.continueButton().click();
  }
}

module.exports = CheckoutStepOnePage;
