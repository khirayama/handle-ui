const path = require('path');

module.exports = {
  entry: {
    'bundle.js': './src/index.js',
  },
  output: {
    path: path.resolve(__dirname),
    filename: '[name]'
  },
  resolve: {
    modules: [
      path.join(__dirname, "src"),
      "node_modules",
    ],
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react')
    },
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    }],
  },
  devtool: 'inline-source-map',
};
