import * as Enzyme from "enzyme"
import enzymeAdapterReact16 from "enzyme-adapter-react-16"
import "jest-enzyme"
import * as React from "react"
import { HelmetProvider } from "react-helmet-async"
import * as renderer from "react-test-renderer"
import HeadModifier from "./HeadModifier"


Enzyme.configure({
    adapter: new enzymeAdapterReact16()
})

const siteDataJson = {
    author: "Olaolu Akinsete",
    link: "https://duyono.com",
    theme_color: "#008f68",
    title: "duyono"
}


describe("HeadModifier", () => {
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
            it("should contain title element", () => {
                expect(helmetWrapper.find("title"))
                    .toHaveLength(1)
            })
            describe("meta", () => {
                let metaWrapper: any
                beforeEach(() => {
                    metaWrapper = helmetWrapper.find("meta")
                })
                it("should be present in Helmet", () => {
                    expect(metaWrapper).toHaveLength(1)
                })
                it("should contain props", () => {
                    expect(metaWrapper).toHaveProp("name")
                })
            })// describe meta
        })// describe Helmet
    })// describe strucutre
})// describe HeadModifier


