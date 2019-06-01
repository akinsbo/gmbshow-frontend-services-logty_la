import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import * as React from "react"
import Base from '../components/templates/Base'
import HeadModifier from "../core/HeadModifier"
import duyonoStonePng from "../images/duyono-stone.png"
// import withRoot from '../utils/theme/withRoot'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
    grow: {
      flexGrow: 1,
    },
    input: {
      display: 'none',
    },
  })
)

const HomePage = () => {

  const classes = useStyles()
  const { grow } = classes

  return (
    <React.Fragment>
      <div className={`application ${grow}`}>
        <Base />
        <HeadModifier title="Homepage" />
        {/* <Label>Wow</Label> */}
        <h1>This is the Home page</h1>

        <img src={duyonoStonePng} alt="duyonoStonePng" />
      </div>
    </React.Fragment>
  )
}

// export default withRoot(HomePage)
export default HomePage
