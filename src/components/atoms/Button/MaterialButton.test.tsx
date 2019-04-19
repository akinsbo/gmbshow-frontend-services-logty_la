
import * as Enzyme from "enzyme"
import enzymeAdapterReact16 from "enzyme-adapter-react-16"
import "jest-enzyme"
import * as React from "react"
import * as renderer from "react-test-renderer"
import MaterialButton from "./MaterialButton"

Enzyme.configure({
    adapter: new enzymeAdapterReact16()
})

describe("MaterialButton", () => {
    it("renders correctly", () => {
      const tree = renderer.create(
        <MaterialButton><h1>Word</h1></MaterialButton>
      ).toJSON()
      expect(tree).toMatchSnapshot()
    })
    
})