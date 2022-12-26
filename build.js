// build.js

import { readFileSync, writeFileSync, rmSync, mkdirSync } from 'fs'

import { buildSync } from 'esbuild'

const pkg = JSON.parse(readFileSync('./package.json', { encoding: 'utf-8' }))

rmSync('dist', {
  force: true,
  recursive: true,
})
mkdirSync('dist')

const buildTime = (new Date()).toISOString()
const comment = [
  `// ${pkg.name}@${pkg.version}, by ${pkg.author}`,
  `built with esbuild at ${buildTime}`,
  `published under ${pkg.license} license`,
].join(' - ')

const baseOpt = {
  entryPoints: ['index.js'],
  bundle: true,
  charset: 'utf8',
  target: ['node14'],
  pure: ['console.log', 'debug', 'alert'],
  legalComments: 'none',
  minify: false,
  sourcemap: false,
  write: true,
}

const cjsVersion = {
  ...baseOpt,
  platform: 'node',
  format: 'cjs',
  mainFields: ['main'],
  outfile: 'dist/index.js',
  banner: {
    js: comment,
  },
}
buildSync(cjsVersion)

const cjspkg = {
  name: pkg.name,
  version: pkg.version,
  main: './index.js',
}

writeFileSync(
  'dist/package.json',
  JSON.stringify(cjspkg, null, '  '),
  'utf8'
)
