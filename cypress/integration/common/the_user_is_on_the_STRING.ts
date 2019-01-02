/// <reference types="cypress" />

import { Given, Then } from "cypress-cucumber-preprocessor/steps"
// import {
//   visit,
//   checkPageTitle,
//   checkIfElementExists,
//   checkIfMultipleElementsExists,
// } from '../action'
import pageFactory from "../../support/page_objects/PageFactory"
// import { WebPage, BaseWebPage, Element, Url } from "../../../types"
import { WebPage } from "../../types"

Given("the user is on the {webpage}", (webpage: string) => {
  const pageUnderTest: WebPage = pageFactory(webpage)
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
