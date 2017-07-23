import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  //entry: [    path.resolve(__dirname, 'src/index')  ], // Single Entry Point
  entry:{
    vendor:path.resolve(__dirname, 'src/vendor'),
    main:path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js' //[name] - Placeholder based on entry point 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new WebpackMd5Hash(),
    new webpack.optimize.CommonsChunkPlugin({
           name:'vendor' // Chunk/bundles name vendor should be same as entry
    }),
    new HtmlWebpackPlugin({
      template:'src/index.html',
     minify:{
        removeComments:true,
        collapseWhitespace:true,
        removeRedundantAttributes:true,
        useShortDoctype:true,
        removeEmptyAttributes:true,
        removeStyleLinkTypeAttributes:true,
        keepClosingSlash:true,
        minifyJS:true,
        minifyCSS:true,
        minifyURLs:true
      },
      inject:true,
      trackJSToken:'c49224de00e545e8ae6f942133baf18f'
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      //{test: /\.css$/, loaders: ['style','css']}
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
    ]
  }
}