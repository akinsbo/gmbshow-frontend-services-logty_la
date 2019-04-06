import * as React from "react"
import * as ReactDOM from "react-dom"
import { HelmetProvider } from "react-helmet-async"
import AppRouter from "./AppRouter"
import registerServiceWorker from "./registerServiceWorker"

ReactDOM.hydrate(
  <HelmetProvider>
      <AppRouter  />
  </HelmetProvider>,
  document.getElementById("root")
)
registerServiceWorker()
