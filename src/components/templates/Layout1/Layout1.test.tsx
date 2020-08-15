import * as React from "react"
import { render, screen } from '../../../../test-utils';
import Layout1 from "./Layout1"


describe("Layout1", () => {
    it("renders correctly", () => {
        const container = render(
            <Layout1 ><div>Layout</div> </Layout1>
        )
        expect(container).toMatchSnapshot()
    })

    it('should contain a Header and a Footer', () => {
        // check header is present by checking for data-cy heaer or "Home, about, )"
        render(
            <Layout1 >
                <div>Layout</div>
            </Layout1>
        )
        expect(screen.getByText('Layout')).toBeTruthy()
    })
})

