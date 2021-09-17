/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import login from "../support/page_objects/login";

const nameRepository = "testGithub";
const textReadme = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
const textCommitDeleteReadme = "Delete Readme";
const textAddReadme = "Add a README with an overview of your project.";

describe("Delete README from the repository", () => {
  beforeEach("Login github", () => {
    login.accessPage();
    cy.contains("Why GitHub?");
    login.validateSignIn();
    login.setUserLogin();
    login.setPassLogin();
    login.loginPage();
  });

  it("Delete README", () => {
    cy.get(".Header-link").last().click();
    cy.xpath(
      "/html/body/div[1]/header/div[7]/details/details-menu/a[2]"
    ).click();

    cy.get(".d-inline-block.mb-1").should("contain.text", nameRepository);
    cy.get(".wb-break-all").click();

    cy.get(".js-navigation-open.Link--primary").first().click();
    cy.get(".markdown-body.entry-content.container-lg").should(
      "contain.text",
      textReadme
    );

    cy.get(".btn-octicon.btn-octicon-danger.tooltipped.tooltipped-nw").click();

    cy.get("#commit-summary-input").click();
    cy.get("#commit-summary-input").type(textCommitDeleteReadme);
    cy.get("#submit-file").click();

    cy.get(".flash.mb-4").should("contain.text", textAddReadme);
  });
});
