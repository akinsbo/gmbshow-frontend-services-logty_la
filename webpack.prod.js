const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const webpack = require("webpack")

// To minimize css
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

module.exports = merge(common, {
  mode: "production",
  output: {
    // hash content of files for cache to detect content change
    filename: "[name].[contenthash].bundle.js",
    path: __dirname + "/dist"
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
    // Uncomment to extract all css into one file/chunk cached
    // splitChunks: {
    //   cacheGroups: {
    //     styles: {
    //       name: "styles",
    //       test: /\.css$/,
    //       chunks: "all",
    //       enforce: true
    //     }
    //   }
    // }
  },
  plugins: [
    // HashedModuleIdsPlugin plugin will cause hashes to be based on the relative path of the module
    new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  }
})
