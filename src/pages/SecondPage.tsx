import * as React from "react"
import Base from '../components/templates/Base'
import duyonoStonePng from "../images/duyono-stone.png"
import withRoot from '../utils/theme/withRoot'

const SecondPage = () => (
  <div>
    <Base />
    <h1>This is the second page</h1>
    <img src={duyonoStonePng} alt="astImage" />
  </div>
)

export default withRoot(SecondPage)
