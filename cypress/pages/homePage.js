export class homePage {
  weblocators = {
    searchBox: 'input[name="search"]',
    searchButton: '.input-group-btn > .btn',
    product: 'mg[ttle="MacBook"]',
    addToCartButton: '.button-group button',
    successMessage1: 'div.alert.alert-success.alert-dismissible'
  };

  searchProduct(productName) {
    cy.get(this.weblocators.searchBox).type(productName);
    cy.get(this.weblocators.searchButton).click();
  }

  addToCart() {
    
    cy.get(this.weblocators.addToCartButton).first().click();
  }

  verifySuccessMessage1()
  {
    return cy.get(this.weblocators.successMessage1);
  }
}
