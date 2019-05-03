import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
// tslint:disable-next-line:import-name
import MenuIcon from '@material-ui/icons/Menu'
import * as React from 'react'

// create a styles object using a theme. The createStyles function is
// needed to placate the TS compiler. 
// See https://gist.github.com/johnsogg/dde852d76aa7af92c1cedd0e594557db
const useStyles = makeStyles((theme: Theme) => createStyles({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    root: {
        width: '100%',
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    input: {
        display: 'none',
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
})
)

// export interface HeaderProps extends WithStyles<typeof styles> { }

const Header = () => {
    const classes = useStyles()

    return (
        <React.Fragment>
            <div className={classes.grow}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Open drawer"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                            Material-UI
                         </Typography>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop} />
                        <div className={classes.sectionMobile} />
                    </Toolbar>
                </AppBar>
            </div>
        </React.Fragment>
    )
}

export default Header
