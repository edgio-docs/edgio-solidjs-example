const { DeploymentBuilder } = require('@layer0/core/deploy')
const { join } = require('path')

const appDir = process.cwd()
const builder = new DeploymentBuilder(appDir)

module.exports = async function build() {
  builder.clearPreviousBuildOutput()
  await builder.exec('npm run injectManifest')
  await builder.exec('npm run build')
  await builder.exec('node compile_sw.js')
  await builder.removeSync('./compiled-service-worker.js')
  builder.addJSAsset(join(appDir, 'dist'))
  await builder.build()
}
