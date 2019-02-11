import * as React from "react"
import astImage from "../images/duyono-stone.png"

const HomePage = () => (
  <div>
    <div className="application">
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet> */}
      ...
    </div>
    <h1>This is the Home page</h1>

    <img src={astImage} alt="astImage" />
  </div>
)

export default HomePage
