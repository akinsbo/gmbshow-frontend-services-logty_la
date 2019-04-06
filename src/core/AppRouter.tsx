import * as React from "react"
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import HomePage from "../pages/HomePage"
import SecondPage from "../pages/SecondPage"
import ThirdPage from "../pages/ThirdPage"
import * as styles from "./AppRouter.css"
import HeadModifier from "./HeadModifier"

// State is never set so we use the '{}' type.
// tslint:disable-next-line:variable-name
const AppRouter = () => {
  return (
    // Links would be in another file
    <div className={styles.hello}>
      <HeadModifier />
      <Router>
        <nav>
          <Link to="/">HomePage</Link>
          <Link to="/page2">SecondPage</Link>
          <Link to="/page3">ThirdPage</Link>
        </nav>

        <Route exact={true} path="/" component={HomePage} />
        <Route path="/page2" component={SecondPage} />
        <Route path="/page3" component={ThirdPage} />
         
      </Router>
      <div>
        <h1>My Custom React app</h1>
      </div>
    </div>
  )
}

export default AppRouter