var path = require("path");
var webpack = require("webpack")

var moduleOpts = {
    noParse: [
      /jquery/
    ],

    loaders: [
      {test: /\.jsx$/, exclude: /node_modules/, loader: 'babel'}
    ]
};

module.exports = [
  // Client side
{
  context: __dirname,
  entry: {
    'main': ['./assets/js/index']
  },
  output: {
      path: path.resolve('./assets/bundles/'),
      filename: "[name].js",
      library: 'main'
  },
  module: moduleOpts,
 },
  // Server side
 {
    context: __dirname,
    entry: {
      'main': ['./assets/components/CommentBox.jsx']
    },
    output: {
      path: path.resolve('./assets/bundles/'),
      filename: '[name].server.js',
      libraryTarget: 'commonjs2'
    },
    module: moduleOpts
}]
