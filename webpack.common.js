"use strict"

const CleanWebpackPlugin = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const ManifestPlugin = require("webpack-manifest-plugin")
const workboxPlugin = require("workbox-webpack-plugin")

module.exports = {
  // mode: "development || "production",
  entry: {
    main: "./src/core/index.tsx"
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      template: "public/index.html"
    }),
    new ManifestPlugin({
      fileName: "asset-manifest.json" // Not to confuse with manifest.json
    }),
    //! Order is important: Since workbox revisions each file based on the content, it should be the last plugin called
    new workboxPlugin.InjectManifest({
      swSrc: "./src/sw.js",
      swDest: "sw.js" //where to output service worker in output.path parent directory
      // clientsClaim: true, //latest service worker should take over all clients as soon as activated
      // skipWaiting: true // latest service worker should be active on entering waiting phase
    })
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      name(module) {
        // get the name. E.g. node_modules/packageName/not/this/part.js
        // or node_modules/packageName
        const packageName = module.context.match(
          /[\\/]node_modules[\\/](.*?)([\\/]|$)/
        )[1]

        // npm package names are URL-safe, but some servers don't like @ symbols
        return `npm.${packageName.replace("@", "")}`
      },
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/
        }
      },
      chunks: "all",
      // https://github.com/webpack/webpack/blob/master/examples/many-pages/webpack.config.js
      maxInitialRequests: 50, // forcs HTTP2(HTTP1 allows max of 6)
      maxAsyncRequests: 20, // for HTTP2
      minSize: 0
    }
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      featureTypes$: path.resolve(__dirname, "bdd/cypress/types.ts")
    }
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader?name=[path][name].[hash:base64:7].[ext]"] // retain original filename
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader?name=[path][name].[hash].[ext]"] // retain original filename
      },
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader?name=[path][name].[hash].[ext]"]
      },
      {
        test: /\.xml$/,
        use: ["xml-loader?name=[path][name].[hash].[ext]"]
      }
    ]
  }

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.

  // externals: [
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // ]
}
