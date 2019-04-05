import * as React from "react"
import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter as Router } from "react-router-dom"
import * as renderer from "react-test-renderer"

import * as Enzyme from "enzyme"
import * as Adapter from "enzyme-adapter-react-16"
import "jest-enzyme"

Enzyme.configure({
  adapter: new Adapter()
})
import AppRouter from "./AppRouter"

describe("<AppRouter />", () => {
  it("should render", () => {
    const renderWrapper = renderer.create(
      <HelmetProvider>
      <Router>
        <AppRouter />
      </Router>
    </HelmetProvider>
    )
    expect(renderWrapper).toMatchSnapshot()
  })
})
