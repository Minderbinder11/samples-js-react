//webpack.config.js

var path = require ('path');
var webpack = require ('webpack');

module.exports = {
  entry: './app/components/app.jsx',
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, 
        exclude: /node_modules/, 
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react']
        } 
      }
    ],
    rules: [
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    // dedpulicates the modules
    new webpack.optimize.DedupePlugin(),
    // optimizes the occurance order
    new webpack.optimize.OccurenceOrderPlugin(),
    // minifies the code
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    })
  ]
};