// import * as React from "react"
// import renderer from "react-test-renderer"
// import HomePage from "./HomePage"

// describe("HomePage", () => {
//   it("renders correctly", () => {
//     const tree = renderer.create(<HomePage />).toJSON()
//     expect(tree).toMatchSnapshot()
//   })
// })

/* tslint:disable-next-line */
import React from "react"
/* tslint:disable-next-line */
import Enzyme, { shallow } from "enzyme"
/* tslint:disable-next-line */
import Adapter from "enzyme-adapter-react-16"
import Wow from "./HomePage"
Enzyme.configure({ adapter: new Adapter() })
it("shallow renders without crashing", () => {
  shallow(<Wow />)
})
