const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.coffee'),
  output: {
    path: path.resolve(__dirname, 'output'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.coffee', '.slim']
  },
  devServer: {
    contentBase: './src',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.coffee/,
        use: ['babel-loader', 'coffee-loader']
      },
      {
        test: /\.scss/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.slim/,
        use: ['html-loader', 'slim-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.slim',
      inject: false
    })
  ]
}
