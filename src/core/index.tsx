import * as React from "react"
import * as ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import data from "../site-data.json"

import { AppRouter } from "./AppRouter"
import registerServiceWorker from "./registerServiceWorker"

ReactDOM.render(
  <BrowserRouter>
    <AppRouter siteData={data} />
  </BrowserRouter>,
  document.getElementById("root")
)
registerServiceWorker()
