import * as React from "react"
import { Link, Route, Switch } from "react-router-dom"
import HomePage from "../pages/HomePage"
import SecondPage from "../pages/SecondPage"
import ThirdPage from "../pages/ThirdPage"
import * as styles from "./AppRouter.css"
import HeadModifier from "./HeadModifier"

// 'AppRouterProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class AppRouter extends React.Component<{}, {}> {
  render() {
    return (
      // Links would be in another file
      <div className={styles.hello}>
        <HeadModifier />
        <nav>
          <Link to="/">HomePage</Link>
          <Link to="/page2">SecondPage</Link>
          <Link to="/page3">ThirdPage</Link>
        </nav>
        <div>
          <h1>My Custom React app</h1>
          <Switch>
            <Route exact={true} path="/" component={HomePage} />
            <Route path="/page2" component={SecondPage} />
            <Route path="/page3" component={ThirdPage} />
          </Switch>
        </div>
      </div>
    )
  }
}
