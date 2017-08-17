const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: [ './src/index.jsx'],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    inline: true
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/assets/index.html'}),
    new ExtractTextPlugin({
      filename: "style.css",
      allChunks: true
    })
  ]
}
