
import * as React from "react"
import { render } from '@testing-library/react'
import { HelmetProvider } from "react-helmet-async"
import HtmlHeadModifier from "./HtmlHeadModifier"

const siteDataJson = {
    author: "Olaolu Akinsete",
    link: "https://duyono.com",
    theme_color: "#008f68",
    title: `Gatsby`,
    siteUrl: `https://www.gatsbyjs.org`,
    description: `Blazing fast modern site generator for React`,
}


describe("HtmlHeadModifier", () => {
    it("should render", () => {
        const {container} = render(
            <HelmetProvider>
                <HtmlHeadModifier {...siteDataJson} />
            </HelmetProvider>
        )
        expect(container).toMatchSnapshot()
    })

})