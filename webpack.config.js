const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'output'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.coffee']
  },
  devServer: {
    contentBase: './src',
    publicPath: '/output'
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
      }
    ]
  }
}
