import * as React from "react"
import HeadModifier from "../core/HeadModifier"
import duyonoStonePng from "../images/duyono-stone.png"

const HomePage = () => (
  <div>
    <div className="application">
    <HeadModifier title= {"Homepage"} />
    </div>
    <h1>This is the Home page</h1>

    <img src={duyonoStonePng} alt="duyonoStonePng" />
  </div>
)

export default HomePage
