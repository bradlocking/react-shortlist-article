/* 
    ./webpack.config.js
*/
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js',
  },
  devServer: {
      inline:true,
      headers: {
          'Access-Control-Allow-Origin': '*',
          "Access-Control-Allow-Credentials": "true"
      },
      proxy: {
        '/api/v1': {
          target: 'http://shortlist.studio',
          changeOrigin: true
        }
      },
  },
  devtool: 'source-map',
  module: {
    loaders: [
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
        { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },

  plugins: [HtmlWebpackPluginConfig]
}