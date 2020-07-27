import makeHeaderComponent from "./components/HeaderComponent"
import makeComponent from "./components/BaseComponent"
import { Component } from "../../types"

export default function ComponentFactory(componentToMake: string): Component {
  switch (componentToMake.toLowerCase()) {
    case "header":
      return makeHeaderComponent()
    default:
      return makeComponent()
  }
}
