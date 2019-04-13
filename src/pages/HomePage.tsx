import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles'
import * as React from "react"
// import Label from '../components/atoms/Label'
import HeadModifier from "../core/HeadModifier"
import duyonoStonePng from "../images/duyono-stone.png"
import withRoot from '../utils/theme/withRoot'


const styles = (theme: { spacing: { unit: any; }; }) => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
})

const HomePage = (props: { classes: { button: string | undefined; }; }) => (
  <div>
    <div className="application">
      <HeadModifier title="Homepage" />
      {/* <Label>Wow</Label> */}
    </div>
    <h1>This is the Home page</h1>

    <img src={duyonoStonePng} alt="duyonoStonePng" />
    <Button color="secondary" className={props.classes.button}>Primary</Button>

  </div>
)

export default withRoot(withStyles(styles)(HomePage))
