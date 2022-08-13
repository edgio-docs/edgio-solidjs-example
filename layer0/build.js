const esbuild = require('esbuild')
const { exit } = require('process')
const { DeploymentBuilder } = require('@layer0/core/deploy')

const appDir = process.cwd()
const builder = new DeploymentBuilder(appDir)

module.exports = async function build(options) {
  try {
    builder.clearPreviousBuildOutput()
    command = 'npx vite build'
    await builder.exec(command)
    esbuild.buildSync({
      entryPoints: [`${appDir}/sw/service-worker.js`],
      outfile: `${appDir}/dist/service-worker.js`,
      minify: true,
      bundle: true,
      define: {
        'process.env.NODE_ENV': '"production"',
        'process.env.LAYER0_PREFETCH_HEADER_VALUE': '"1"',
        'process.env.LAYER0_PREFETCH_CACHE_NAME': '"prefetch"',
      },
    })
    await builder.build()
  } catch (e) {
    console.log(e)
    exit()
  }
}
