import * as React from "react"
import * as styles from "./App.css"
import astImage from "./../images/astronaut.png"
import Data from "./../data.xml"
import { Link, Route, Switch } from "react-router-dom"
import SecondPage from "./SecondPage"
import ThirdPage from "./ThirdPage"

export interface AppProps {
  compiler: string;
  framework: string;
}

// 'AppProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class App extends React.Component<AppProps, {}> {
  render() {
    console.log(Data)
    console.log("this is main app.js")
    return (
      <div className={styles.hello}>
        <nav>
          <Link to="/page2">SecondPage</Link>
          <Link to="/page3">ThirdPage</Link>
        </nav>
        <h1>
          Hello from {this.props.compiler} and {this.props.framework}! And it
          works!
        </h1>
        <div>
          <h1>My Custom React app</h1>
          <Switch>
            <Route path="/page2" component={SecondPage} />
            <Route path="/page3" component={ThirdPage} />
          </Switch>
        </div>
        <img src={astImage} alt="astImage" />
      </div>
    )
  }
}
