import { registerPage } from "../../pages/registerPage";
const register = new registerPage();
import registerData from "../../fixtures/registerData.json";

describe('resgister test', () => {
    it('register test', () => {
        register.OpenURL();
        register.enterFirstName(registerData.firstName);
        register.enterLastName(registerData.lastName);
        register.enterEmail(registerData.email);
        register.enterTelephone(registerData.telephone);
        register.enterPassword(registerData.password);
        register.enterConfirmPassword(registerData.confirmPassword);
        register.clickPrivacyPolicy();
        register.clickContinueButton();
    });
     })
