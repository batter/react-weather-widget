function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-dev-server/client?http://localhost:8080');
    sources.push('webpack/hot/only-dev-server');
  }

  return sources;
}

module.exports = {
  entry: {
    app: getEntrySources([
      './js/app.js'
    ])
  },

  output: {
    publicPath: 'http://localhost:8080/',
    filename: 'public/[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      { test: /\.js$/, loaders: ['react-hot', 'jsx', 'babel'], exclude: /node_modules/ }
    ]
  }
};

