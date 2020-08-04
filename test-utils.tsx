import React from 'react'
import { render, queries } from '@testing-library/react'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import { I18nextProvider } from 'react-i18next'
import defaultStrings from './i18n/en-x-default'
import * as customQueries from './custom-queries'
import grey from '@material-ui/core/colors/grey'
import orange from '@material-ui/core/colors/orange'
import purple from '@material-ui/core/colors/purple'
import yellow from '@material-ui/core/colors/yellow'
// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
    palette: {
        primary: {
            dark: purple[900],
            light: orange[500],
            main: grey[700]
        },
        secondary: {
            dark: yellow[700],
            light: purple[300],
            main: yellow[500]
        },
    }
})

const AllTheProviders = ({ children }: any) =>
    <ThemeProvider theme={theme} >
        <I18nextProvider i18n={defaultStrings} >
            {children}
        </I18nextProvider>
    </ThemeProvider >


const customRender = (ui: any, options = {}) =>
    render(ui, { wrapper: AllTheProviders, queries: { ...queries, ...customQueries }, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }