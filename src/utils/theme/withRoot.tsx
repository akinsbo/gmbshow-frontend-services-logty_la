
import grey from '@material-ui/core/colors/grey'
import orange from '@material-ui/core/colors/orange'
import purple from '@material-ui/core/colors/purple'
import yellow from '@material-ui/core/colors/yellow'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import * as React from 'react'

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
    },
    typography: {
        useNextVariants: true,
    },
})

function withRoot<P>(Component: React.ComponentType<P>) {
    function WithRoot(props: P) {
        // MuiThemeProvider makes the theme available down the React tree
        // thanks to React context.
        return (
            <MuiThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Component {...props} />
            </MuiThemeProvider>
        )
    }

    return WithRoot
}

export default withRoot