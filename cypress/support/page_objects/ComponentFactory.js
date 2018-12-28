import makeHeaderComponent from "./components/HeaderComponent"
// import type { Component } from "../../types"
import makeComponent from "./components/BaseComponent"

export default function ComponentFactory(componentToMake) {
  switch (componentToMake.toLowerCase()) {
    case "header":
      return makeHeaderComponent()
    default:
      return makeComponent()
  }
}
