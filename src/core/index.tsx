import * as React from "react"
import * as ReactDOM from "react-dom"
import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./AppRouter"
import registerServiceWorker from "./registerServiceWorker"

ReactDOM.hydrate(
  <HelmetProvider>
    <BrowserRouter>
      <AppRouter  />
    </BrowserRouter>
  </HelmetProvider>,
  document.getElementById("root")
)
registerServiceWorker()
