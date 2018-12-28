/**
 * BasePage.ts
 *
 * Page class that abstracts common parameters for all pages in the website
 *
 * @author Olaolu Akinsete,
 */

/**
 * Create Pages
 *
 * @param {route} path
 * @returns {WebPage}
 */
export default function makePage(path) {
  const basePage = {
    apiUrl: "http://localhost:4000/api",
    baseUrl: "http://localhost:9000",
    apiVersion: "v1",
    locale: "/en"
  }

  /**
   *  getUrl of page
   *
   * @returns {url}
   */
  const getUrl = () => basePage.baseUrl + path

  /**
   * getRoute of page
   *
   * @returns {route}
   */
  const getRoute = () => path

  return Object.freeze({
    basePage,
    getUrl,
    getRoute
  })
}
