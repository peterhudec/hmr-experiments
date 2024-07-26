const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('../webpack.config.js')
const compiler = webpack(config)

let compiledAssets = []

compiler.hooks.done.tap('wtf', (stats) => {
  compiledAssets = Object.keys(stats.compilation.assets)
})

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
)

app.use(require("webpack-hot-middleware")(compiler));

app.get('/*', (req, res) => {
  res.send(`
<html>
  <head>
    <title>Express</title>
    ${compiledAssets.map(asset => `<script defer src="${config.output.publicPath}/${asset}"></script>`).join('')}
  </head>
  <body>
    <div id="mountpoint"></div>
  </body>
</html>
    `)
})

// Serve the files on port 3000.
app.listen(3333, function () {
  console.log('Example app listening on port 3333!\n')
})