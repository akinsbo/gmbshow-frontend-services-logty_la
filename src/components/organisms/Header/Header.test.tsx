
import * as Enzyme from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import "jest-enzyme"
import * as React from "react"
import * as renderer from "react-test-renderer"
import Header from "./Header";

Enzyme.configure({
    adapter: new Adapter()
})

describe("HomePage", () => {
    it("renders correctly", () => {
      const tree = renderer.create(
        <Header />
      ).toJSON()
      expect(tree).toMatchSnapshot()
    })
    
})