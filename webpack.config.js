const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-dev-server/client?http://localhost:8080');
    sources.push('webpack/hot/only-dev-server');
  }

  return sources;
}

module.exports = {
  mode: 'development',

  entry: {
    app: path.join(__dirname, 'js', 'app.js')
  },

  watch: true,

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
        use: ['react-hot-loader/webpack', 'babel-loader'],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html'),
    })
  ]
};

