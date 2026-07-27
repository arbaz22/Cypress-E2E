import {homePage} from '../../pages/homePage';
const home = new homePage();
import testData from '../../fixtures/testData.json';

describe('Add to cart test', () => {
    before(()=>{
      cy.login(testData.login.email, testData.login.password);
    })

  it('should add a product to the cart and verify success message', () => { 

    home.searchProduct(testData.product.productName);
    home.addToCart();
    home.verifySuccessMessage1().should('contain.text', testData.message.successMessage2);
  })

 })


