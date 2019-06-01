
import * as Enzyme from "enzyme"
import enzymeAdapterReact16 from "enzyme-adapter-react-16"
import "jest-enzyme"
import * as React from "react"
import * as renderer from "react-test-renderer"
import VideoSearchBarComponent from "./VideoSearchBarComponent"

Enzyme.configure({
  adapter: new enzymeAdapterReact16()
})


let wrapper: any
let props: any

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const createTestProps = () => ({
  options,
  onChange: jest.fn(),
  value: null,
})

describe("VideoSearchBar", () => {
  it("renders correctly", () => {
    const tree = renderer.create(
      <VideoSearchBarComponent {...props} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

beforeEach(() => {
  props = createTestProps()
  wrapper = Enzyme.mount(<VideoSearchBarComponent {...props} />)
})

describe("structure", () => {
  describe("<Select/> component", () => {
    let selectWrapper: any
    
    beforeEach(() => {
      selectWrapper = wrapper.find('Select')
    })

    it("should contain Select component", () => {
      // console.log(wrapper.debug())
      expect(selectWrapper).toHaveLength(1)
    })

    it("Select component should have props", () => {
      // console.log(selectWrapper.debug())
      expect(selectWrapper).toHaveProp("options", options)
      expect(selectWrapper).toHaveProp("onChange")
      expect(selectWrapper).toHaveProp("value", null)
    })
  }) // end select component

})