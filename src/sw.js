workbox.skipWaiting()
workbox.clientsClaim()

workbox.routing.registerRoute(
    new RegExp("http://localhost:3000"),
    workbox.strategies.staleWhileRevalidate()
)

//setup sample push
self.addEventListener("push", event => {
    const title = "Service worker running"
    const options = {
        body: event.data.text()
    }
    event.waitUntil(self.registration.showNotification(title, options))
})

// workbox.precaching.precacheAndRoute(self.__precacheManifest)
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST)