/**
 * This class 
 */
import * as React from "react"
// tslint:disable-next-line:import-name
import { Helmet } from "react-helmet-async"

export interface HeadModifierProps {
    title: string,
    author: string,
    link: string,
    theme_color: string
}

// 'AppRouterProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class HeadModifier extends React.Component<HeadModifierProps, {}> {

    static defaultProps = {
        author: "Olaolu Akinsete",
        link: "https://duyono.com",
        theme_color: "#008f68",
        title: "duyono"
    }

    render() {

        const { title, link } = this.props
        return (
            // Links would be in another file
            <div>
                <Helmet titleTemplate={`%s | ${title}`}>
                    <title>{title}</title>
                    <meta name="link" content={link} />
                    {/* <meta name="theme-color" content={this.props.siteData.theme_color} /> */}
                </Helmet>
            </div >
        )
    }
}
