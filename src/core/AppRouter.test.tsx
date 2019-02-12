import * as React from "react"
import * as renderer from "react-test-renderer"
import { BrowserRouter as Router } from "react-router-dom"
import data from "../site-data.json"
import { expect } from "chai"

import AppRouter from "./AppRouter"

describe("<AppRouter />", () => {
  const wrapper = renderer.create(
    <Router>
      <AppRouter siteData={data} />
    </Router>
  )

  test("render", () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe("structure", () => {
    describe("Helmet", () => {
      let helmetWrapper
      beforeEach(() => {
        helmetWrapper = wrapper.find("Helmet")
      })
      it("should be present", () => {
        expect(helmetWrapper).toHaveLength(1)
      })
      it("should contain elements", () => {
        expect(helmetWrapper)
          .find("title")
          .toHaveLength(1)
        describe("meta", () => {
          const metaWrapper = wrapper.find("meta")
          it("should contain meta element", () => {
            expect(metaWrapper).toHaveLength(1)
          })
          it("should contain props", () => {
            expect(metaWrapper).toHaveProp("name")
          })
        })
      })
    })
  })
})
