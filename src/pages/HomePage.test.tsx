
import * as Enzyme from "enzyme"
import * as Adapter from "enzyme-adapter-react-16"

import "jest-enzyme"
import * as React from "react"
import { HelmetProvider } from "react-helmet-async"
import * as renderer from "react-test-renderer"

import HomePage from "./HomePage"

Enzyme.configure({
  adapter: new Adapter()
})

describe("HomePage", () => {
  it("renders correctly", () => {
    const tree = renderer.create(
    <HelmetProvider>
      <HomePage />
    </HelmetProvider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
  describe("structure", () => {
    const wrapper = Enzyme.shallow(
      <HomePage />
    )
    describe("HeadModifier", () => {
      let headModifierWrapper: any
      beforeEach(() => {
        headModifierWrapper = wrapper.find("HeadModifier")
      })
      it("should be present", () => {
        expect(headModifierWrapper).toHaveLength(1)
      })
      it("should contain props title", () => {
        expect(headModifierWrapper).toHaveProp("title", "Homepage")
      })
    })
  })
})
