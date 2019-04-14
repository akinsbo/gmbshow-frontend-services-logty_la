
import * as Enzyme from "enzyme"
import enzymeAdapterReact16 from "enzyme-adapter-react-16"
import "jest-enzyme"
import * as React from "react"
import { HelmetProvider } from "react-helmet-async"
import * as renderer from "react-test-renderer"
import HomePage from "./HomePage"

Enzyme.configure({
  adapter: new enzymeAdapterReact16()
})

// Reusable homepage and it's wrappers
const homePageAndWrappers =
  <HelmetProvider>
    <HomePage />
  </HelmetProvider>

// We define the wrapper
const wrapper = Enzyme.mount(
  homePageAndWrappers
)

describe("HomePage", () => {
  // Snapshot it
  it("renders correctly", () => {
    const tree = renderer.create(
      homePageAndWrappers
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
  describe("structure", () => {
    // console.log(wrapper.debug())

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
    })// describe HeadModifier

  })// describe structure

})// describe HomePage
