const { merge } = require("webpack-merge")
const common = require("./webpack.common.js")
const webpack = require("webpack")
const nodeExternals = require('webpack-node-externals');

// To minimize css
// const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
    // const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

const { InjectManifest } = require("workbox-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

// To remove unused css
const path = require("path")
const glob = require("glob")
const PurgecssPlugin = require("purgecss-webpack-plugin")

const server_build_path = "server-build"
module.exports = env => merge(common(env), {
    entry: `./server/${env.STYLE}/index.tsx`,
    target: 'node',

    externals: [nodeExternals()],

    // output: {
    //     path: path.resolve(`server-build/${env.STYLE}`),
    //     filename: 'index.js'
    // },
    mode: "developement",
    devtool: "source-map",
    output: {
        // hash content of files for cache to detect content change
        filename: "[name].[contenthash].bundle.js",
        path: `${__dirname}/${server_build_path}/${env.STYLE}`,
        // library: 'app',
        libraryTarget: 'umd',
        // publicPath: '/dist/',
    },
    optimization: {
        minimize: true,
        // minimizer: [
        //     new TerserPlugin({
        //         cache: true,
        //         parallel: true,
        //         sourceMap: true // set to true if you want JS source maps
        //     }),
        //     new OptimizeCSSAssetsPlugin({})
        // ],
        // Uncomment to extract all css into one file/chunk cached
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: "styles",
                    test: /\.css$/,
                    chunks: "all",
                    enforce: true
                }
            }
        },
        usedExports: true,
    },
    plugins: [
        // HashedModuleIdsPlugin plugin will cause hashes to be based on the relative path of the module
        new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css"
        }),
        new PurgecssPlugin({
            paths: glob.sync(`${__dirname}/${server_build_path}/${env.STYLE}/**/*`, { nodir: true })
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: `${__dirname}/public/${env.STYLE}/icons`, //for absolute path
                to: `${__dirname}/server-build/${env.STYLE}`
            }],
        }),
        new InjectManifest({
            swSrc: `${__dirname}/server-build/${env.STYLE}/utils/sw.js`,
            swDest: `${__dirname}/server-build/${env.STYLE}/sw.js` //where to output service worker in output.path parent directory
                // clientsClaim: true, //latest service worker should take over all clients as soon as activated
                // skipWaiting: true // latest service worker should be active on entering waiting phase
        })
    ],
    module: {
        rules: [{
                test: /\.js$/,
                use: 'babel-loader',
                options: ''
            },
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