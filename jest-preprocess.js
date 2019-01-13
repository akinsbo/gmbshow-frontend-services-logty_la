const babelOptions = {
  presets: [
    "@babel/preset-env",
    {
      targets: {
        esmodules: true
      }
    },
    "@babel/preset-react"
  ]
}

module.exports = require("babel-jest").createTransformer(babelOptions)
