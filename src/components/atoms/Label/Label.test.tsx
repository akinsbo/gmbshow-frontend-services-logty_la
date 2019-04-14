
import * as Enzyme from "enzyme"
import enzymeAdapterReact16 from "enzyme-adapter-react-16"
import "jest-enzyme"
import * as React from "react"
import * as renderer from "react-test-renderer"
import Label from "./Label";

Enzyme.configure({
    adapter: new enzymeAdapterReact16()
})

describe("Label", () => {
    it("renders correctly", () => {
      const tree = renderer.create(
        <Label><h1>Word</h1></Label>
      ).toJSON()
      expect(tree).toMatchSnapshot()
    })
    
})