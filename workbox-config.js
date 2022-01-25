module.exports = {
  globDirectory: 'dist/',
  globPatterns: [
    '**/*.{css,eot,html,ico,jpg,js,json,png,svg,ttf,txt,webmanifest,woff,woff2,webm,xml}',
  ],
  globFollow: true,
  globStrict: true,
  globIgnores: [],
  dontCacheBustURLsMatching: new RegExp('.+.[a-f0-9]{20}..+'),
  maximumFileSizeToCacheInBytes: 5000000,
  swSrc: './service-worker.js',
  swDest: './compiled-service-worker.js',
}
