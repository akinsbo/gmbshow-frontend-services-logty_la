import * as React from "react"
import { render } from '../../../../test-utils'
import Header from "./Header"

describe("Header", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Header />
    )
    expect(container).toMatchSnapshot()
  })
})