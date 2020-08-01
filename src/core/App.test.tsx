import '@testing-library/jest-dom'
import * as React from "react"
import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter as Router } from "react-router-dom"
import * as renderer from "react-test-renderer"
import App from "./App"

describe("App", () => {
  it("should render", () => {
    const renderWrapper = renderer.create(
      <HelmetProvider>
        <Router>
          <App />
        </Router>
      </HelmetProvider>
    )
    expect(renderWrapper).toMatchSnapshot()
  })
})
