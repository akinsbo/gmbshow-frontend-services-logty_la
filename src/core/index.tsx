/*
 * Filename: /Users/olaoluakinsete/Documents/projects/private/gmbshow-frontend-services-logty_la/src/core/index.tsx
 * Path: /Users/olaoluakinsete/Documents/projects/private/gmbshow-frontend-services-logty_la
 * Created Date: Wednesday, July 22nd 2020, 11:48:56 pm
 * Author: Olaolu Akinsete
 * 
 *  This module is the main entry file displayed by webpack
 * Copyright (c) 2020 Your Company
 */

import * as React from "react"
import * as ReactDOM from "react-dom"
import { HelmetProvider } from "react-helmet-async"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"

ReactDOM.hydrate(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
  document.getElementById("root")
)

if (process.env.NODE_ENV !== 'production') {
  var axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

registerServiceWorker()
