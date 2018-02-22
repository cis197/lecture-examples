var webpack = require('webpack')
var path = require('path')

var BUILD_DIR = path.join(__dirname, 'public','js');
var APP_DIR = path.join(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    inline: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: APP_DIR,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config
