
import * as Enzyme from "enzyme"
import enzymeAdapterReact16 from "enzyme-adapter-react-16"
import "jest-enzyme"
import * as React from "react"
import * as renderer from "react-test-renderer"
import Header from "./Header"

Enzyme.configure({
    adapter: new enzymeAdapterReact16()
})

describe("Header", () => {
    it("renders correctly", () => {
      const tree = renderer.create(
        <Header />
      ).toJSON()
      expect(tree).toMatchSnapshot()
    })
    
})