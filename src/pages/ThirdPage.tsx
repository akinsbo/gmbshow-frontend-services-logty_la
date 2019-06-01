import * as React from "react"
import Base from '../components/templates/Base'
import withRoot from '../utils/theme/withRoot'

const ThirdPage = () => (
  <div>
    <Base/>
    <h1>This is the third page</h1>
  </div>
)

export default withRoot(ThirdPage)
