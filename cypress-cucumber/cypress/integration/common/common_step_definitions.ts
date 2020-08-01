/// <reference types="cypress" />

import { Given, Then } from "cypress-cucumber-preprocessor/steps"
// tslint:disable-next-line: no-implicit-dependencies
Given(/the user is on the/, () => {
  const pageUnderTest = "home" //webpage.toLowerCase().replace("page","")
  cy.log("address = " + Cypress.config().baseUrl + "/" + pageUnderTest)
  cy.visit(Cypress.config().baseUrl + "/" + pageUnderTest )
})

Given(/the user is on the {string}/, (webpage: string) => {
  const pageUnderTest = webpage.toLowerCase().replace("page","")
  cy.log("address = " + Cypress.config().baseUrl + "/" + pageUnderTest)
  cy.visit(Cypress.config().baseUrl + "/" + pageUnderTest )
})

Then("the page title should be {string}", (string: string) => {
  cy.title().should("include", string)
})

Then("the user should be able to see the {string}", (string: string) => {
  cy.title().should("include", string)
})

Then(
  'the user should be able to see a(n) {string}', (string: string) => {
    cy.get(`.${string}`).should('be.visible')
    cy.debug()
  })

// // Handle plural
// Then(
//   'the user should be able to see {components}',
//   async (components) => {
//     // await checkIfMultipleElementsExists(components)
//   }
