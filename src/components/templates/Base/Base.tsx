import { createStyles, makeStyles, Theme } from '@material-ui/core/styles' 
// tslint:disable-next-line:import-name
import * as React from 'react'
import Header from '../../organisms/Header'

// create a styles object using a theme. The createStyles function is
// needed to placate the TS compiler. 
// See https://gist.github.com/johnsogg/dde852d76aa7af92c1cedd0e594557db
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        grow: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
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
    })
)

// export interface HeaderProps extends WithStyles<typeof styles> { }

const Base = () => {
    const classes = useStyles()

    return (
        <React.Fragment>
            <div className={classes.grow}>
                <Header />               
            </div>
        </React.Fragment>
    )
}

export default Base
