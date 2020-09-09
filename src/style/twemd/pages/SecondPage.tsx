import * as React from "react"
import Layout1 from '../../../components/templates/Layout1'
import duyonoStonePng from "../images/duyono-stone.png"
import withRoot from '../utils/theme/withRoot'

const SecondPage = () => (
  <Layout1>
    <div>
      <h1>This is the second page</h1>
      <img src={duyonoStonePng} alt="astImage" />
    </div>
  </Layout1>

)

export default withRoot(SecondPage)
