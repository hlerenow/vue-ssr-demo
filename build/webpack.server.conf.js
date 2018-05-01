const webpack = require('webpack')
const merge = require('webpack-merge')
const ndoeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base.conf.js')
const VueSSServerPlugin = require('vue-server-renderer/server-plugin')

baseConfig.module.rules[1].options = ''

module.exports = merge(baseConfig, {
  entry: './src/entry-server.js',
  target: 'node',
  devtool: 'source-map',
  output: {
    libraryTarget: 'commonjs2'
  },
  externals: ndoeExternals({
    whitelist: /\.css$/
  }),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) || 'development',
      'process.env.VUE_ENV': '"server"'
    }),
    new VueSSServerPlugin()
  ]
})
