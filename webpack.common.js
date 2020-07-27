"use strict"

const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const FaviconsWebpackPlugin = require("favicons-webpack-plugin")
const webpack = require("webpack")
const path = require("path")
const ManifestPlugin = require("webpack-manifest-plugin")
const { InjectManifest } = require("workbox-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const BrotliGzipPlugin = require("brotli-gzip-webpack-plugin")
const dotenv = require('dotenv')
const fs = require("fs-extra")

const BUILD_DIR = path.resolve(__dirname, "./dist")
const PUBLIC_DIR = path.resolve(__dirname, "./public")
const GENERATED_ICONS_DIR = "icons"
const chalk = require('chalk')

const getEnvKeys = async env => {

    let envKeys = {}

    if (env && env.ENVIRONMENT) {
        console.log(chalk.blue(`env.ENVIRONMENT = ${env.ENVIRONMENT}`)) // true
            /************************************* */
            /** Environment Variable file setting */
            // Get the root path (assuming your webpack config is in the root of your project!)
        const currentPath = path.join(__dirname)

        // Create the fallback path (the production .env)
        const basePath = `${currentPath}/.env`

        // initialize env path
        const getFinalPathExt = async(...pathList) => {
            // if no extensions were supplied
            if (pathList.length < 1) {
                return 'Please set a list of possible .env extensions e.g .dev for .env.dev file'
            }

            for (let path in pathList) {
                const file = `${basePath}.${pathList[path]}`
                    // We're concatenating the environment name to our filename to specify the correct env file!
                const exists = await fs.pathExists(file)
                if (exists) {
                    console.log(chalk.green(`Detected env file exists at ${file} \%s`))
                    return file
                }
            }
            // if the all env.extensions-above do not exist, return the base path
            return basePath
        }

        // get the final path
        let finalPath = basePath
        console.log('reading finalPath...')
            // if env.ENVIRONMENT is one of dev, develop or development
        if (env.ENVIRONMENT.indexOf(['dev' || 'develop' || 'development']) > -1) {
            // Env final path for develop
            finalPath = await getFinalPathExt('dev', 'develop', 'development')

            // if env.ENVIRONMENT is one of prod, production
        } else if (env.ENVIRONMENT.indexOf(['prod' || 'production']) > -1) {
            // for prod
            finalPath = await getFinalPathExt('prod', 'production')
        }

        // call dotenv and it will return an Object with a parsed key 
        const fileEnv = dotenv.config({ path: finalPath }).parsed

        console.log(chalk.blue(`Using env file at ${finalPath}`))

        // reduce it to a nice object, the same as before (but with the variables from the file)
        envKeys = Object.keys(fileEnv).reduce((prev, next) => {
                prev[`process.env.${next}`] = JSON.stringify(fileEnv[next])
                return prev
            }, {})
            /** End Environment Variable file setting */
            /************************************* */
    }
    return envKeys
}

module.exports = env => {

    return {
        // mode: "development || "production",
        entry: {
            // As the output.path is the baseUrl, resolve ./src as it may actually be ../src instead
            main: './src/core/index.tsx'
        },
        plugins: [
            // The result of all the environment variables set in package.json
            new webpack.DefinePlugin(getEnvKeys(env)),
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
            new CopyWebpackPlugin({
                patterns: [{
                    from: PUBLIC_DIR + "/" + GENERATED_ICONS_DIR, //for absolute path
                    to: BUILD_DIR
                }],
            }),
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
            new InjectManifest({
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
                featureTypes$: path.resolve(__dirname, "bdd/cypress/types.ts"),
                env$: path.resolve(__dirname, "env.tsx")
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
}