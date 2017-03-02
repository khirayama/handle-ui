const path = require('path');

module.exports = {
  entry: {
    'bundle.js': './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'public'),
    filename: '[name]'
  },
  resolve: {
    modules: [
      path.join(__dirname, "src"),
      "node_modules",
    ],
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
