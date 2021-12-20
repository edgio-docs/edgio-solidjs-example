const { DeploymentBuilder } = require('@layer0/core/deploy')
const { join } = require('path')

const appDir = process.cwd()
const builder = new DeploymentBuilder(appDir)

module.exports = async function build() {
  builder.clearPreviousBuildOutput()
  await builder.exec('npm run build')
  builder.addJSAsset(join(appDir, 'dist'))
  await builder.build()
}
