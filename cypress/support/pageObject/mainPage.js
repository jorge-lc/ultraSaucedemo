/// <reference types="cypress" />

class MainPage {

    shoppingCartButton() {
        return cy.get('a[class="shopping_cart_link"]');
    };

    //Operations

    addItemToCart(product) {
        cy.wait(1000)
        let productInfo = {};
        cy.get('div[class="inventory_item"]').contains(product)
        .within(() => {
            
            productInfo = {
                    productName : cy.get('.inventory_item_name').invoke('text'),
                    productPrice : cy.get('.pricebar .inventory_item_price').invoke('text'),
                    productDesc : cy.get('.inventory_item_desc').invoke('text')
                }
        })
        return productInfo;
    }
};

module.exports = MainPage;