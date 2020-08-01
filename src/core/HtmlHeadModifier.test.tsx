
import * as React from "react"
import '@testing-library/jest-dom'
import { HelmetProvider } from "react-helmet-async"
import * as renderer from "react-test-renderer"
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
        const renderWrapper = renderer.create(
            <HelmetProvider>
                <HtmlHeadModifier {...siteDataJson} />
            </HelmetProvider>
        )
        expect(renderWrapper).toMatchSnapshot()
    })

})