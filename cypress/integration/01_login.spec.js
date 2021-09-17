/// <reference types="cypress" />

import login from "../support/page_objects/login";

const wrongPass = "xpto123";
const wrongUser = "123xpto";
const messageError = "Incorrect username or password.";

describe("Login github", () => {
  beforeEach("access the page github", () => {
    login.accessPage();
    cy.contains("Why GitHub?");
  });

  it("login with github", () => {
    login.validateSignIn();
    login.setUserLogin();
    login.setPassLogin();
    login.loginPage();
  });

  it("wrong password", () => {
    login.validateSignIn();
    login.setUserLogin();

    cy.get("input[name=password]").type(wrongPass);
    login.loginPage();

    cy.get(".flash.flash-full.flash-error").should(
      "contain.text",
      messageError
    );
  });

  it("wrong user", () => {
    login.validateSignIn();

    cy.get("input[name=login]").type(wrongUser);

    login.setPassLogin();
    login.loginPage();

    cy.get(".flash.flash-full.flash-error").should(
      "contain.text",
      messageError
    );
  });

  it("not set user and password", () => {
    login.validateSignIn();
    login.loginPage();

    cy.get(".flash.flash-full.flash-error").should(
      "contain.text",
      messageError
    );
  });
});
