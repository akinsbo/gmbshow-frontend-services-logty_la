const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const webpack = require("webpack")

// To minimize css
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: __dirname + "/dist"
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // the order matters. Use postcss-loader as after style-loader and css-loader
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          {
            loader: "postcss-loader",
            options: { config: { path: "./postcss.config.js" } }
          },
          "sass-loader"
        ]
      }
    ]
  }
})
