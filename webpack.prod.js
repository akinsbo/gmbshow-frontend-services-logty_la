const merge = require("webpack-merge")
const common = require("./webpack.common.js")

module.exports = merge(common, {
  mode: "production",
  output: {
    // hash content of files for cache detect content change
    filename: "[name].[contenthash].js",
    path: __dirname + "/dist"
  }
})
