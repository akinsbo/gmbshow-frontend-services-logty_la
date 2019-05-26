/// <reference types="cypress" />

import { Given, Then } from "cypress-cucumber-preprocessor/steps"
// import { WebPage, BaseWebPage, Element, Url } from "../../../types"
// tslint:disable-next-line: no-implicit-dependencies
import { WebPage } from "featureTypes"
import PageFactory from "../../support/page_objects/PageFactory"

Given("the user is on the {string}", (webpage: string) => {
  const pageUnderTest: WebPage = PageFactory(webpage)
  cy.visit(pageUnderTest.basepage!.getUrl())
})

Then("the page title should be {string}", (string: string) => {
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
