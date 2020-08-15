import * as React from "react"
import { render, screen } from '../../test-utils'
import HomePage from "./HomePage"

describe("HomePage", () => {

    it("renders correctly", () => {
        const container = render(
            <HomePage />
        )
        expect(container).toMatchSnapshot()
    })

    it('should render', () => {
        render(
          <HomePage />
        );
        expect(screen.getByText('The Olaolu Promise')).toBeInTheDocument()

        // expect(screen.queryByRole('The Olaolu Promise')).toBeInTheDocument()
                // expect(screen.queryByRole('The Olaolu Promise')).toBeInTheDocument(

    })

})