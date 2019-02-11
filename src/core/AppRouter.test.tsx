import * as React from "react"
import * as renderer from "react-test-renderer"
import { BrowserRouter as Router } from "react-router-dom"

import AppRouter from "./AppRouter"

describe("<AppRouter />", () => {
  const siteData = {
    title: "duyono",
    author: "Olaolu Akinsete",
    link: "https://duyono.com"
  }
  const wrapper = renderer.create(
    <Router>
      <AppRouter siteData={siteData} />
    </Router>
  )

  test("render", () => {
    expect(wrapper).toMatchSnapshot()
  })
})
