import * as React from "react"
import * as ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

import { AppRouter } from "./AppRouter"
import registerServiceWorker from "./registerServiceWorker"

ReactDOM.render(
  <BrowserRouter>
    <AppRouter
      project="Duyono"
      motto="Do good. You'll be remembered...We'll make sure of it"
    />
  </BrowserRouter>,
  document.getElementById("root")
)
registerServiceWorker()
