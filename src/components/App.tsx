import * as React from "react"
import * as styles from "./App.css"
import astImage from "./../images/astronaut.png"
import Data from "./../data.xml"
import { Link } from "react-router-dom"

export interface AppProps {
  compiler: string;
  framework: string;
}

// 'AppProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class App extends React.Component<AppProps, {}> {
  render() {
    console.log(Data)

    return (
      <div className={styles.hello}>
        <nav>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <h1>
          Hello from {this.props.compiler} and {this.props.framework}!
        </h1>
        <h1>My Custom React app</h1>
        <img src={astImage} alt="astImage" />
      </div>
    )
  }
}
