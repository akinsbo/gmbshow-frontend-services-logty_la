import makeHomePage from "../pages/HomePage"
import { WebPage } from "featureTypes"

export default function PageFactory(pageToMake: string): WebPage {
  switch (pageToMake.toLowerCase()) {
    case "home":
      return makeHomePage("")
    default:
      return makeHomePage("")
  }
}
