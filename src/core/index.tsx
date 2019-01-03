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

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then(registration => {
        console.log("SW registered: ", registration)
        // register push manager for pushing notifications to clients
        registration.pushManager.subscribe({
          userVisibleOnly: true
        })
      })
      .catch(registrationError => {
        console.log("SW registration failed: ", registrationError)
      })
  })
}
