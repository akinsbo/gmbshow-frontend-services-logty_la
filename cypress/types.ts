/**
 * This is manual custom libdef for features directory
 */

export type FeaturesList = {}
export type Route = string
export type Url = string
export type Element = string
export type BaseWebPage = {
  getUrl(): Url,
  getRoute(): Route
}
export type WebPage = {
  basepage?: BaseWebPage
}

export type Component = () => void = function () {}
export type Subcomponent = () => void = function () {}
