/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import login from "../support/page_objects/login";

const nameRepository = "testGithub";
const textReadme = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
const textCommitUpdateReadme = "Update Readme";

describe("Update README from the repository", () => {
  beforeEach("Login github", () => {
    login.accessPage();
    cy.contains("Why GitHub?");
    login.validateSignIn();
    login.setUserLogin();
    login.setPassLogin();
    login.loginPage();
  });

  it("Update README", () => {
    cy.get(".Header-link").last().click();
    cy.xpath(
      "/html/body/div[1]/header/div[7]/details/details-menu/a[2]"
    ).click();

    cy.get(".d-inline-block.mb-1").should("contain.text", nameRepository);
    cy.get(".wb-break-all").click();

    cy.get(".Box-btn-octicon.btn-octicon.float-right.mr-n2").click();
    cy.get(".CodeMirror-scroll").click();
    cy.get(".CodeMirror-scroll").type("{enter}");
    cy.get(".CodeMirror-scroll").type(textReadme);

    cy.get("#commit-summary-input").click();
    cy.get("#commit-summary-input").type(textCommitUpdateReadme);
    cy.get("#submit-file").click();

    cy.get(".markdown-body.entry-content.container-lg").should(
      "contain.text",
      textReadme
    );
  });
});
