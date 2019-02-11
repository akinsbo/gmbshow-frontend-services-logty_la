import * as React from "react"
import * as styles from "./AppRouter.css"
import { Link, Route, Switch } from "react-router-dom"
import HomePage from "../pages/HomePage"
import SecondPage from "../pages/SecondPage"
import ThirdPage from "../pages/ThirdPage"
// import { Helmet } from "react-helmet"

export interface AppRouterProps {
  siteData: {
    title: string,
    author: string,
    link: string
  };
}

// 'AppRouterProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class AppRouter extends React.Component<AppRouterProps, {}> {
  render() {
    console.log(this.props.siteData)
    console.log("this is main app.js")
    return (
      // Links would be in another file
      <div className={styles.hello}>
        <nav>
          <Link to="/">HomePage</Link>
          <Link to="/page2">SecondPage</Link>
          <Link to="/page3">ThirdPage</Link>
        </nav>
        <h1>
          Welcome to {this.props.siteData.title} from {this.props.siteData.link}
          ! Welcome!
        </h1>
        <div>
          <h1>My Custom React app</h1>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/page2" component={SecondPage} />
            <Route path="/page3" component={ThirdPage} />
          </Switch>
        </div>
      </div>
    )
  }
}
