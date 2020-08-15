import * as React from "react"
import { render } from '@testing-library/react'
import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App"

describe("App", () => {
  it("should render", () => {
    const container = render(
      <HelmetProvider>
        <Router>
          <App />
        </Router>
      </HelmetProvider>
    )
    expect(container).toMatchSnapshot()
  })
})
