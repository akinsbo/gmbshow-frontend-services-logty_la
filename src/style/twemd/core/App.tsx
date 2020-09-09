import * as React from "react"
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import HomePage from "../pages/HomePage"
import SecondPage from "../pages/SecondPage"
import ThirdPage from "../pages/ThirdPage"
import { APP_DATA } from "../../../../env"
import HtmlHeadModifier from "./HtmlHeadModifier"
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({
  hello: {
    color: 'red'
  }
})

// State is never set so we use the '{}' type.
// tslint:disable-next-line:variable-name
const AppRouter = () => {
  const { title, author, link, theme_color } = APP_DATA.siteMetadata
  const classes = useStyles()

  return (
    // Links would be in another file
    <div className={classes.hello}>
      {/* set default header parameters. Pages may individually modify this */}
      <HtmlHeadModifier title={title} author={author} link={link} theme_color={theme_color} />
      <Router basename="/calendar" />
      <Router>
        <nav>
          <Link to="/">HomePage</Link>
          <Link to="/page2/">SecondPage</Link>
          <Link to="/page3/">ThirdPage</Link>
        </nav>

        <Route path="/" exact={true} component={HomePage} />
        <Route path="/page2/" component={SecondPage} />
        <Route path="/page3/" component={ThirdPage} />

      </Router>
      <div>
        <h1>My Custom React app</h1>
      </div>
    </div>
  )
}

export default AppRouter