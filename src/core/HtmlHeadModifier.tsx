/*
 * Filename: HtmlHeadModifier.tsx
 * Path: src/core/HtmlHeadModifier.tsx
 * Created Date: Wednesday, July 22nd 2020, 11:48:56 pm
 * Author: Olaolu Akinsete
 *
 * The HtmlHeadModifier module wraps the react-helmet library, allwoing headers
 * to be set in a single line of code. The Pages can override props of the headers
 * Copyright (c) 2020 Olaolu Akinsete
 */

import * as React from "react"
// tslint:disable-next-line:import-name
import { Helmet } from "react-helmet-async"
import {APP_DATA} from "../../env"

export interface HtmlHeadModifierProps {
    author?: string,
    link?: string,
    theme_color?: string,
    title: string,
    siteUrl?: string,
    description?: string,

}

// 'AppRouterProps' describes the shape of props.
// State is never set so we use the '{}' type.
const HtmlHeadModifier = ({link,title}: HtmlHeadModifierProps = APP_DATA.siteMetadata) => {

    return (
        // Links would be in another file
        < div >
            <Helmet titleTemplate={`%s | ${title}`}>
                <title>{title}</title>
                <meta name="link" content={link} />
                {/* <meta name="theme-color" content={this.props.siteData.theme_color} /> */}
            </Helmet>
        </div >
    )
}

export default HtmlHeadModifier