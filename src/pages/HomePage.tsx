import * as React from "react"
import Layout1 from '../components/templates/Layout1'
import HtmlHeadModifier from "../core/HtmlHeadModifier"
import duyonoStonePng from "../images/duyono-stone.png"
import Introduction from "../components/molecules/Introduction"
// import withRoot from '../utils/theme/withRoot'


const HomePage = () => {

  return (
      <Layout1>
          <HtmlHeadModifier title="Homepage" />
          <Introduction>The Olaolu Promise</Introduction>
          <h1>This is the Home page</h1>
          <img src={duyonoStonePng} alt="duyonoStonePng" />
      </Layout1>
  )
}

// export default withRoot(HomePage)
export default HomePage