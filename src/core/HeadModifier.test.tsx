import * as Enzyme from "enzyme"
import * as Adapter from "enzyme-adapter-react-16"
import "jest-enzyme"
import * as React from "react"
import { HelmetProvider } from "react-helmet-async"
import * as renderer from "react-test-renderer"
import HeadModifier from "./HeadModifier"


Enzyme.configure({
    adapter: new Adapter()
})

const siteDataJson = {
    author: "Olaolu Akinsete",
    link: "https://duyono.com",
    theme_color: "#008f68",
    title: "duyono"
}


describe("<HeadModifier />", () => {
    it("should render", () => {
        const renderWrapper = renderer.create(
            <HelmetProvider>
                <HeadModifier {...siteDataJson} />
            </HelmetProvider>
        )
        expect(renderWrapper).toMatchSnapshot()
    })
    describe("structure", () => {
        const wrapper = Enzyme.shallow(
                <HeadModifier {...siteDataJson} />
        )
        describe("Helmet", () => {
            let helmetWrapper: any
            beforeEach(() => {
                helmetWrapper = wrapper.find("Helmet")
            })
            it("should be present", () => {
                expect(helmetWrapper).toHaveLength(1)
            })
            it("should contain elements", () => {
                expect(helmetWrapper.find("title"))
                    .toHaveLength(1)
            })
            describe("meta", () => {
                const metaWrapper = wrapper.find("meta")
                it("should contain meta element", () => {
                    expect(metaWrapper).toHaveLength(1)
                })
                it("should contain props", () => {
                    expect(metaWrapper).toHaveProp("name")
                })
            })
        })
    })
})


