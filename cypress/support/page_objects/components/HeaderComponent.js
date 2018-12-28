/**
 * Copyright (c) 2018-present, Mbshow.
 *
 * HeaderComponent.js
 * This class defines and exports the header components of the admin panel
 *
 * @author Olaolu Akinsete<akinsbo@gmail.com>, 2018
 */

/**
 * This abstracts common parameters for all pages in the website
 * Current TODO items:
 * X-  Support more keyfeatures in the homepage
 * - allow puppet in here to perform custom check
 * - Initial test coverage
 * - Support for multiple methods
 */

import makeBaseComponent from "./BaseComponent"

/**
 * This function generates the admin header component
 *
 * @export
 * @returns {Component}
 */
export default function makeHeaderComponent() {
  const baseComponent = makeBaseComponent()

  const subcomponents = {
    nav: "header_nav",
    brandname: "header_brandname"
  }

  return Object.freeze({
    baseComponent,
    subcomponents
  })
}
