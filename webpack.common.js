"use strict"

const CleanWebpackPlugin = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const FaviconsWebpackPlugin = require("favicons-webpack-plugin")
const webpack = require("webpack")
const path = require("path")
const ManifestPlugin = require("webpack-manifest-plugin")
const workboxPlugin = require("workbox-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

const BrotliGzipPlugin = require("brotli-gzip-webpack-plugin")

const BUILD_DIR = path.resolve(__dirname, "./dist")
const PUBLIC_DIR = path.resolve(__dirname, "./public")
const GENERATED_ICONS_DIR = "icons"

module.exports = {
  // mode: "development || "production",
  entry: {
    main: "./src/core/index.tsx"
  },
  plugins: [
    // with zero configuration, cleanWebpack plugin will clean output directory
    new CleanWebpackPlugin(),
    new ManifestPlugin({
      fileName: "asset-manifest.json" // Not to confuse with manifest.json(the webmanifest file)
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html"
    }),
    // new FaviconsWebpackPlugin("./src/images/logo.png"),
    new FaviconsWebpackPlugin({
      // Your source logo
      logo: "./src/images/logo.png",
      // The prefix for all image files (might be a folder or a name)
      prefix: GENERATED_ICONS_DIR + "/",
      // Emit all stats of the generated icons
      emitStats: true,
      // The name of the json containing all favicon information
      statsFilename: "iconstats.json",
      // Generate a cache file with control hashes and
      // don't rebuild the favicons until those hashes change
      persistentCache: true,
      // Inject the html into the html-webpack-plugin
      inject: true,
      // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
      background: "#fff",
      // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
      title: "Duyono App",

      // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    }),
    new CopyWebpackPlugin(
      [
        {
          from: PUBLIC_DIR + "/" + GENERATED_ICONS_DIR, //for absolute path
          to: BUILD_DIR
        }
      ],
      { debug: "info" }
    ),
    new webpack.ProvidePlugin({
      // automatically load modules instead of having to import or require them everywhere
      React: "React",
      react: "React",
      "window.react": "React",
      "window.React": "React"
    }),
    new BrotliGzipPlugin({
      asset: "[path].br[query]",
      algorithm: "brotli",
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
      quality: 11
    }),
    new BrotliGzipPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8
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
    namedModules: true,
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
      maxInitialRequests: 50, // force HTTP2(HTTP1 allows max of 6)
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
        use: ["url-loader?name=[path][name].[hash:base64:7].[ext]"] // retain original filename
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

  // Expanding upon webpack externals config to differentiate between different output targets:
  // * Import `react` and `react-dom` when using `require`
  // * Import `React` and `ReactDOM` when using globals
  // externals: {
  //   react: "React"
  // }
}
