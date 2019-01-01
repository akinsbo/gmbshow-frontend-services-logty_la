/// <reference types="cypress" />

import { After, Before, Given, Then } from "cypress-cucumber-preprocessor/steps"
// import {
//   visit,
//   checkPageTitle,
//   checkIfElementExists,
//   checkIfMultipleElementsExists,
// } from '../action'
import pageFactory from "../../support/page_objects/PageFactory"

Given("the user is on the {string}", (string: string) => {
  const pageUnderTest = pageFactory(string)
  cy.visit(pageUnderTest.basepage.getUrl())
})

Then("the page title should be {string}", (string: string) => {
  cy.title().should("include", string)
})

// Then(
//   'the user should be able to see a(n) {component}',
//   async (component) => {
//     // await checkIfElementExists(component)
//   }
// )

// // Handle plural
// Then(
//   'the user should be able to see {components}',
//   async (components) => {
//     // await checkIfMultipleElementsExists(components)
//   }
