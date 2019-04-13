
import * as Enzyme from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import "jest-enzyme"
import * as React from "react"
import * as renderer from "react-test-renderer"
import Label from "./Label";

Enzyme.configure({
    adapter: new Adapter()
})

describe("HomePage", () => {
    it("renders correctly", () => {
      const tree = renderer.create(
        <Label />
      ).toJSON()
      expect(tree).toMatchSnapshot()
    })
    
})