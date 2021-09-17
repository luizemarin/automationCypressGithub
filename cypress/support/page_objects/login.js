/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const url = Cypress.config("baseUrl");
const login_user = Cypress.env("login_user");
const login_pass = Cypress.env("login_pass");

class Login {
  static accessPage() {
    cy.visit(url);
  }

  static validateSignIn() {
    cy.get(".HeaderMenu-link.flex-shrink-0.no-underline").first().click();
    cy.contains("Sign in to GitHub");
  }

  static setUserLogin() {
    cy.get("input[name=login]").type(login_user);
  }

  static setPassLogin() {
    cy.get("input[name=password]").type(login_pass);
  }

  static loginPage() {
    cy.get('input[name="commit"]').click();
  }
}

export default Login;
