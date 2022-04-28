import { dtsPlugin } from 'esbuild-plugin-d.ts'
import { build } from 'esbuild'
import glob from 'glob'
const entryPoints = glob.sync('./src/**/*.ts')

build({
  bundle: false,
  target: 'node16.0',
  platform: 'node',
  format: 'esm',
  entryPoints: entryPoints,
  outdir: './dist',
  plugins: [dtsPlugin()],
  logLevel: 'debug',
})
