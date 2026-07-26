export class registerPage {
  weblocators = {
    firstName: "#input-firstname",
    lastName: "#input-lastname",
    email: "#input-email",
    telephone: "#input-telephone",
    password: "#input-password",
    confirmPassword: "#input-confirm",
    privacyPolicy: 'input[type="checkbox"]',
    continueButton: 'input[type="submit"]',
  };
OpenURL() {
    cy.env(["URL"]).then((env) => {
        cy.visit(env.URL);
    });
}
  enterFirstName(firstName) {
    cy.get(this.weblocators.firstName).type(firstName);
  }

  enterLastName(lastName) {
    cy.get(this.weblocators.lastName).type(lastName);
  }

  enterEmail(email) {
    cy.get(this.weblocators.email).type(email);
  }

  enterTelephone(telephone) {
    cy.get(this.weblocators.telephone).type(telephone);
  }

  enterPassword(password) {
    cy.get(this.weblocators.password).type(password);
  }

  enterConfirmPassword(confirmPassword) {
    cy.get(this.weblocators.confirmPassword).type(confirmPassword);
  }

  clickPrivacyPolicy() {
    cy.get(this.weblocators.privacyPolicy).check();
  }

  clickContinueButton() {
    cy.get(this.weblocators.continueButton).click();
  }
}
