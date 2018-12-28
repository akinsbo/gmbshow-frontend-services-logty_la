/**
 * This is manual custom libdef for features directory
 */
export type featuresList = {}
export type route = string
export type url = string
export type element = string
export type BaseWebPage = {
  getUrl(): url,
  getRoute(): route
}
export type WebPage = {
  basepage?: BaseWebPage
}

export type Component = {}
export type Subcomponent = {}
