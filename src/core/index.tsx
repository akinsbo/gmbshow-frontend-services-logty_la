import * as React from "react"
import * as ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

import { AppRouter } from "./AppRouter"

ReactDOM.render(
  <BrowserRouter>
    <AppRouter compiler="TypeScript" framework="React" />
  </BrowserRouter>,
  document.getElementById("root")
)
