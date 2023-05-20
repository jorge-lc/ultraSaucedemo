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

  validateMandatoryFields() {
    cy.get('h3[data-test="error"]').should("not.exist");

    this.clickContinueButton();
    this.validateErrorField("First Name is required");

    this.typeInFirstNameField("FirstName");
    this.clickContinueButton();
    this.validateErrorField("Last Name is required");

    this.typeInLastNameField("LastName");
    this.clickContinueButton();
    this.validateErrorField("Postal Code is required");
  }

  clickContinueButton() {
    this.continueButton().click();
  }

  validateErrorField(errorMessage) {
    cy.get(".error").should("exist").and("have.text", `Error: ${errorMessage}`);
  }

  typeInFirstNameField(value) {
    this.firstNameField().type(value);
  }

  typeInLastNameField(value) {
    this.lastNameField().type(value);
  }
}

module.exports = CheckoutStepOnePage;
