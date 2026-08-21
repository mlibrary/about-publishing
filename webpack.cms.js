const path = require("path")

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src/cms/cms.js"),
  output: {
    path: path.resolve(__dirname, "static/admin"),
    filename: "cms.js",
  },
  optimization: {
    splitChunks: false,
    runtimeChunk: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
}