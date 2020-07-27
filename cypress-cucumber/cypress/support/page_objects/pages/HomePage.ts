/**
 * Copyright (c) 2018-present, Mbshow.
 *
 * HeaderFooterPage.js
 * This class defines and exports the key higher order components of the headerfooterPage
 *
 * @author Olaolu Akinsete<akinsbo@gmail.com>, 2018
 *
 */

/**
 * This abstracts common parameters for all pages in the website
 * Current TODO items:
 * X-  Support more keyfeatures in the homepage
 * - Initial test coverage
 * - Support for multiple methods
 */
import makePage from "./BasePage"
import { WebPage, BaseWebPage, FeaturesList, Route } from "../../../types"
import componentFactory from "../ComponentFactory"

export default function makeHomePage(relPath: Route): WebPage {
  const basePage: BaseWebPage = makePage(relPath)

  const componentList: FeaturesList = {
    headerComponent: componentFactory("header")
    // footerComponent: componentFactory('footerComponent'),
    // featuredComponent: componentFactory('featuredComponent'),
    // videoCardComponent: componentFactory('videoCardComponent'),
    // searchComponent: componentFactory('searchComponent'),
    // messageComponent: componentFactory('messageComponent'),
  }

  return Object.freeze({
    basepage: basePage,
    componentList
  })
}
