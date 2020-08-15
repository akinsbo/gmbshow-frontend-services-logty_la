import * as React from "react"
import { render, screen } from '../../../../test-utils'
import Introduction from "./Introduction"

describe("Introduction", () => {
  it("renders correctly", () => {
    const container = render(
      <Introduction>This is the Promise</Introduction>
    )
    expect(container).toMatchSnapshot()
    expect(screen.getByRole('heading', {name: /introduction/i})).toHaveTextContent("This is the Promise")
  })
})