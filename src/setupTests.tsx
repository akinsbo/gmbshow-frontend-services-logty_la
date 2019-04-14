import * as Enzyme from "enzyme"
import enzymeAdapterReact16 from "enzyme-adapter-react-16"
import "jest-enzyme"

// React 16 Enzyme adapter
Enzyme.configure({
  adapter: new enzymeAdapterReact16()
})