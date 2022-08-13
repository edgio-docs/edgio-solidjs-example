import { skipWaiting, clientsClaim } from 'workbox-core'
import { prefetch, Prefetcher } from '@layer0/prefetch/sw'
import DeepFetchPlugin from '@layer0/prefetch/sw/DeepFetchPlugin'
import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching'

cleanupOutdatedCaches()
skipWaiting()
clientsClaim()
precacheAndRoute(self.__WB_MANIFEST || [])

new Prefetcher({
  plugins: [
    new DeepFetchPlugin([
      // cache and prefetch scripts
      {
        selector: 'script',
        maxMatches: 10,
        attribute: 'src',
        as: 'script',
        callback: deepFetchJS,
      },
      // cache and prefetch stylesheets
      {
        selector: '[rel="stylesheet"]',
        maxMatches: 10,
        attribute: 'href',
        as: 'style',
        callback: deepFetchCSS,
      },
    ]),
  ],
}).route()

function deepFetchJS({ $el, el, $ }) {
  var urlTemplate = $(el).attr('src')
  if (urlTemplate) {
    prefetch(urlTemplate, 'script')
  }
}

function deepFetchCSS({ $el, el, $ }) {
  var urlTemplate = $(el).attr('href')
  if (urlTemplate) {
    prefetch(urlTemplate, 'style')
  }
}
