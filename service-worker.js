import { Prefetcher } from '@layer0/prefetch/sw'
import { skipWaiting, clientsClaim } from 'workbox-core'
import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching'
import DeepFetchPlugin from '@layer0/prefetch/sw/DeepFetchPlugin'

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
  console.log($(el), urlTemplate)
  if (urlTemplate) {
    console.log(`\n[][][][]\nPrefetching JS: ${urlTemplate}\n[][][][]\n`)
    prefetch(urlTemplate, 'script')
  }
}

function deepFetchCSS({ $el, el, $ }) {
  var urlTemplate = $(el).attr('href')
  console.log($(el), urlTemplate)
  if (urlTemplate) {
    console.log(`\n[][][][]\nPrefetching CSS: ${urlTemplate}\n[][][][]\n`)
    prefetch(urlTemplate, 'style')
  }
}
