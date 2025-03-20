const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: {
    app: path.join(__dirname, 'src', 'app.js')
  },

  output: {
    publicPath: 'http://localhost:8080/',
    filename: 'public/[name].js'
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['css-loader']
      },
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['react-refresh/babel']
          }
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html'),
    }),
    new ReactRefreshWebpackPlugin()
  ],

  devServer: { hot: true }
};

