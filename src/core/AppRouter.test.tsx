import * as Enzyme from "enzyme"
import enzymeAdapterReact16 from "enzyme-adapter-react-16";
import "jest-enzyme"
import * as React from "react"
import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter as Router } from "react-router-dom"
import * as renderer from "react-test-renderer"
import AppRouter from "./AppRouter"

Enzyme.configure({
  adapter: new enzymeAdapterReact16()
})

describe("AppRouter", () => {
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
