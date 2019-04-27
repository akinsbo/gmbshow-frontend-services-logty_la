const babelOptions = {
  presets: [
    "@babel/preset-env",
    // {
    //   targets: {
    //     esmodules: true
    //   }
    // },
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  plugins: ['require-context-hook'],

}

module.exports = require("babel-jest").createTransformer(babelOptions)
