/// <reference types="cypress" />

class LoginPage {

    userNameField() {
        return cy.get('input[data-test="username"]')
    }

    passwordField() {
        return cy.get('input[data-test="password"]')
    }

    loginButton() {
        return cy.get('input[data-test="login-button"]')
    }

    //Operations

    login(username, password) {
        this.userNameField().type(username)
        this.passwordField().type(password)
        this.loginButton().click()
    }
}

module.exports = LoginPage;