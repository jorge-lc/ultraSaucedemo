/// <reference types='cypress' />
const LoginPage = require("../../support/pageObject/loginPage");
const MainPage = require("../../support/pageObject/mainPage");
const CartPage = require("../../support/pageObject/cartPage");
const CheckoutStepOnePage = require("../../support/pageObject/checkoutStepOnePage");
const CheckoutStepTwoPage = require("../../support/pageObject/checkoutStepTwoPage");
const CheckoutCompletePage = require("../../support/pageObject/checkoutCompletePage");

context("Validate different purchase flow scenarios", () => {
  let username;
  let password;
  let loginPage;
  let mainPage;
  let cartPage;
  let checkoutStepOnePage;
  let checkoutStepTwoPage;
  let checkoutCompletePage;

  beforeEach(() => {
    cy.visit("/", {
      onBeforeLoad(win) {
        delete win.navigator.__proto__.serviceWorker;
      },
    });
    cy.fixture("credentials.json").as("credentials");
    cy.fixture("userInfo.json").as("userInfo");
    cy.fixture("productNames.json").as("productNames");
    loginPage = new LoginPage();
    mainPage = new MainPage();
    cartPage = new CartPage();
    checkoutStepOnePage = new CheckoutStepOnePage();
    checkoutStepTwoPage = new CheckoutStepTwoPage();
    checkoutCompletePage = new CheckoutCompletePage();
  });

  // it("Complete purchase flow with 3 products", function () {
  //   let productsInfo = {};
  //   username = this.credentials.username;
  //   password = this.credentials.password;
  //   loginPage.login(username, password);

  //   productsInfo = mainPage.addItemToCart(
  //     this.productNames.backPack,
  //     this.productNames.boltTshirt,
  //     this.productNames.redTshirt
  //   );
  //   mainPage.shoppingCartButton().click();
  //   cartPage.validateProductInfoAndCheckOut();
  //   checkoutStepOnePage.completeForm(this.userInfo);
  //   checkoutStepTwoPage.validateProductInfoAndFinish(this.userInfo);
  //   checkoutCompletePage.validateCompleteCheckout();
  // });

  it("Validate filter functionality", function () {
    username = this.credentials.username;
    password = this.credentials.password;
    loginPage.login(username, password);

    mainPage.validateFilters();
  })
});
