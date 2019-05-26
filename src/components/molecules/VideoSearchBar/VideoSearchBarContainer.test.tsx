
import * as Enzyme from "enzyme"
import enzymeAdapterReact16 from "enzyme-adapter-react-16"
import "jest-enzyme"
import * as React from "react"
import * as renderer from "react-test-renderer"
import VideoSearchBarContainer from "./VideoSearchBarContainer"

Enzyme.configure({
    adapter: new enzymeAdapterReact16()
})

describe("VideoSearchBarContainer", () => {
    it("renders correctly", () => {
      const tree = renderer.create(
        <VideoSearchBarContainer />
      ).toJSON()
      expect(tree).toMatchSnapshot()
    })
})
let wrapper: any

beforeEach(() => {
  wrapper = Enzyme.shallow(<VideoSearchBarContainer />)
})

describe("VideoSearchBarContainer", () => {
  it('should have state "single"', () => {
    expect(wrapper).toHaveState('selectedVideo', null)
  })
})

describe('interaction', () => {
    it('should have state "single"', () => {
        expect(wrapper).toHaveState('selectedVideo', null)
    })
    
    describe('handleChange method', () => {
        it('should set state', () => {
            expect(wrapper.state('selectedVideo')).toEqual(null)
            wrapper.instance().handleChange('newlySelectedVideo')
            expect(wrapper.state('selectedVideo')).toEqual('newlySelectedVideo')
        })
    })
}) // end interaction
