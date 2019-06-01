import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'
import SearchIcon from '@material-ui/icons/Search'
import * as React from 'react'
import Select from 'react-select'
import { ActionMeta, GroupType, ValueType} from 'react-select/lib/types'

// create a styles object using a theme. The createStyles function is
// needed to placate the TS compiler. 
// See https://gist.github.com/johnsogg/dde852d76aa7af92c1cedd0e594557db
const useStyles = makeStyles((theme: Theme) => createStyles({
    grow: {
        flexGrow: 1,
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        // width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    inputRoot: {
        color: 'inherit',
    },
    search: {
        backgroundColor: fade(theme.palette.common.white, 0.15),
        borderRadius: theme.shape.borderRadius,
        marginLeft: 0,
        marginRight: theme.spacing(2),
        position: 'relative',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
    },
    searchIcon: {
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        pointerEvents: 'none',
        position: 'absolute',
        width: theme.spacing(7),

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

interface VideoSearchBarComponentProps {
    options?: string[] | GroupType<string>[] | undefined
    value?: ValueType<string>
    onChange?: ((value: ValueType<string>, action: ActionMeta) => void) | undefined
}
// TODO: Use material design search bar to make this component
const VideoSearchBarComponent = (props: VideoSearchBarComponentProps) => {
    const classes = useStyles()
    // const {grow, search, searchIcon} = classes
    const { grow, search, searchIcon, inputRoot, inputInput } = classes
    const { options, onChange, value } = props
    return (
        <React.Fragment>
            <div className={`video_search_bar ${grow}`}>
                <div className={search}> 
                    <div className={searchIcon}> 
                        <SearchIcon />
                    </div>
                     <Select
                        placeholder="Search…"
                        classes={{
                            input: inputInput,
                            root: inputRoot
                        }}
                        options={options}
                        onChange={onChange}
                        value={value}
                     /> 
                 </div>
             </div>
        </React.Fragment>
    )
}

VideoSearchBarComponent.defaultProps = {
    options: {},
    onChange: {},
    value: null
}
export default VideoSearchBarComponent
