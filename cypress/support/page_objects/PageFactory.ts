import makeHomePage from "./pages/HomePage"

export default function PageFactory(pageToMake) {
  switch (pageToMake.toLowerCase()) {
    case "home":
      return makeHomePage("")
    default:
      return makeHomePage("")
  }
}
