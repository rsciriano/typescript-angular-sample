var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {  
  entry: './app/app',
  output: {
    filename: 'app-bundle.js',
    path: './assets'
  },
  /*resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },*/
  /*module: {
    loaders: [
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }
    ]
  }*/
}