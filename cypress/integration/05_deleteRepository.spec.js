/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import login from "../support/page_objects/login";

const nameRepository = "testGithub";
const completeNameRepositoryForDelete = "testGithub";
const nameUserRepository = Cypress.env("user_github");

describe("Delete repository from de github", () => {
  beforeEach("Login github", () => {
    login.accessPage();
    cy.contains("Why GitHub?");
    login.validateSignIn();
    login.setUserLogin();
    login.setPassLogin();
    login.loginPage();
  });

  it("Delete repository", () => {
    cy.get(".Header-link").last().click();
    cy.xpath(
      "/html/body/div[1]/header/div[7]/details/details-menu/a[2]"
    ).click();

    cy.get(".d-inline-block.mb-1").should("contain.text", nameRepository);
    cy.get(".wb-break-all").click();

    cy.get(".d-inline-flex").last().click();

    cy.get(
      ".boxed-action.btn-danger.btn.float-none.float-md-right.ml-0.ml-md-3.mt-2.mt-md-0"
    )
      .last()
      .click();

    cy.get(".btn-danger.btn.btn-block").should("be.disabled");
    cy.get(".form-control.input-block")
      .last()
      .type(nameUserRepository + "/" + nameRepository);

    cy.get(".btn-danger.btn.btn-block").last().click();
  });

  it("Repository not found for delete", () => {
    cy.get(".Header-link").last().click();
    cy.xpath(
      "/html/body/div[1]/header/div[7]/details/details-menu/a[2]"
    ).click();

    cy.get(".d-inline-block.mb-1").should("not.contain.text", nameRepository);
  });
});
