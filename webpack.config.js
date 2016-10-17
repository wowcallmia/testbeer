const webpack = require('webpack');
const path = require('path');

module.exports = {
  debug:true,
  entry: [
    './node_modules/bootstrap-loader',
    './src/css/style.css',
    './src/index.js',
    'webpack-hot-middleware/client?reload=true'
  ],
  target: "web",
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './src'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        COMPUTER_VISION_KEY: JSON.stringify(process.env.COMPUTER_VISION_KEY),
        CLIENT_ID: JSON.stringify(process.env.CLIENT_ID),
        CLIENT_SECRET: JSON.stringify(process.env.CLIENT_SECRET)
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /(\.css)$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url?prefix=font/&limit=5000'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      },
      {
        test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
        loader: 'imports?jQuery=jquery'
      },
    ]
  }
}
