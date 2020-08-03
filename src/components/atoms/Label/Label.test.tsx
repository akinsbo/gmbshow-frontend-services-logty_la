
import * as React from "react"
import { render } from '@testing-library/react'

import Label from "./Label";

describe("Label", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Label><h1>Word</h1></Label>
    )
    expect(container).toMatchSnapshot()
  })
})