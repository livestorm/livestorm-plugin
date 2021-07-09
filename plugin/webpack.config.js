const path = require('path')
module.exports = {
  entry: "./index.ts",
  mode: 'production',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'build')
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "raw-loader",
      },
      {
        test: /\.ts$/,
        loader: "ts-loader"
      }
    ]
  }
}