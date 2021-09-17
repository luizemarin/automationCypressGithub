/// <reference types="cypress" />

import login from "../support/page_objects/login";

const nameRepository = "testGithub";

describe("Create a new repository on github with Readme", () => {
  beforeEach("Login github", () => {
    login.accessPage();
    cy.contains("Why GitHub?");
    login.validateSignIn();
    login.setUserLogin();
    login.setPassLogin();
    login.loginPage();
  });

  it("Create a new repository with Readme", () => {
    cy.get(".details-overlay.details-reset").first().click();
    cy.get(".dropdown-item").first().should("contain.text", "New repository");

    cy.get(".dropdown-item").first().click();

    cy.get(".form-control.js-repo-name.js-repo-name-auto-check.short").type(
      nameRepository
    );

    cy.get("#repository_visibility_private").click();
    cy.get("#repository_visibility_private").check();

    cy.get("#repository_auto_init").first().click();
    cy.get("#repository_auto_init").should("be.checked");
    cy.get(".btn-primary.btn").click();

    cy.contains("testGithub");
    cy.contains("README.md");
    cy.window();
  });
});
