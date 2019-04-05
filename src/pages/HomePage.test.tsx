
import * as Enzyme from "enzyme"
import * as Adapter from "enzyme-adapter-react-16"
import "jest-enzyme"
import * as React from "react"
import * as renderer from "react-test-renderer"
import HomePage from "./HomePage"

Enzyme.configure({
  adapter: new Adapter()
})

describe("HomePage", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<HomePage />).toJSON()
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
      describe("title", () => {
        let titleWrapper: any
        beforeEach(() => {
          titleWrapper = headModifierWrapper.find("title")
        })
        it("should contain elements", () => {
          expect(titleWrapper)
            .toHaveLength(1)
        })
        it("should set homepage", () => {
          expect(titleWrapper).toHaveText("homepage")
        })
      })
      describe("meta", () => {
        const metaWrapper = wrapper.find("meta")
        it("should contain meta element", () => {
          expect(metaWrapper).toHaveLength(1)
        })
        it("should contain props", () => {
          expect(metaWrapper).toHaveProp("name", "Homepage")
        })
      })
    })
  })
})
