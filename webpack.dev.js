const { merge } = require("webpack-merge")
const common = require("./webpack.common.js")
const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const WriteFilePlugin = require("write-file-webpack-plugin")

// Try the environment variable, otherwise use root
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = env => merge(common(env), {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        hot: true,
        compress: true,
        port: 9000,
        historyApiFallback: true, // allow back button and reload to work
        open: true // open default browser
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new WriteFilePlugin() //Forces webpack-dev-server program to write bundle files to the file system.
    ],
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/dist",
        publicPath: ASSET_PATH
    },
    module: {
        rules: [{
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
        }]
    }
})