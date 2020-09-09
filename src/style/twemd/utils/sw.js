import { skipWaiting, clientsClaim } from 'workbox-core'
// These JavaScript module imports need to be bundled:
import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { StaleWhileRevalidate } from 'workbox-strategies'

skipWaiting()
clientsClaim()

registerRoute(
    new RegExp("http://localhost:9000"),
    new StaleWhileRevalidate()
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
precacheAndRoute(self.__WB_MANIFEST)