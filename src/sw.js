workbox.skipWaiting()
workbox.clientsClaim()

workbox.routing.registerRoute(
  new RegExp("http://localhost:3000"),
  workbox.strategies.staleWhileRevalidate()
)

//setup sample push
self.addEventListener("push", event => {
  const title = "Get Started With Workbox"
  const options = {
    body: event.data.text()
  }
  event.waitUntil(self.registration.showNotification(title, options))
})

workbox.precaching.precacheAndRoute(self.__precacheManifest)

// if (
//   event.request.cache === "only-if-cached" &&
//   event.request.mode !== "same-origin"
// ) {
//   return
// }
