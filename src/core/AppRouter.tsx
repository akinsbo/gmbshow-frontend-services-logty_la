import * as React from "react"
import * as styles from "./AppRouter.css"
import Data from "../data.xml"
import { Link, Route, Switch } from "react-router-dom"
import SecondPage from "../pages/SecondPage"
import ThirdPage from "../pages/ThirdPage"
// import { Helmet } from "react-helmet"

export interface AppRouterProps {
  project: string;
  motto: string;
}

// 'AppRouterProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class AppRouter extends React.Component<AppRouterProps, {}> {
  render() {
    console.log(Data)
    console.log("this is main app.js")
    return (
      //This would be vanilla
      // Links would be in another file
      <div className={styles.hello}>
        <nav>
          <Link to="/page2">SecondPage</Link>
          <Link to="/page3">ThirdPage</Link>
        </nav>
        <h1>
          Welcome to {this.props.project} and {this.props.motto}! Welcome!
        </h1>
        <div>
          <h1>My Custom React app</h1>
          <Switch>
            <Route path="/page2" component={SecondPage} />
            <Route path="/page3" component={ThirdPage} />
          </Switch>
        </div>
      </div>
    )
  }
}
