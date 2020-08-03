import * as React from "react"
import Layout1 from '../components/templates/Layout1'
import withRoot from '../utils/theme/withRoot'

const ThirdPage = () => (
  <Layout1>
    <div>
      <h1>This is the third page</h1>
    </div>
  </Layout1>
)

export default withRoot(ThirdPage)
