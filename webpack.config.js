const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/js/index.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
           "css-loader",
           "sass-loader"
          ],
      },
      {
        test:/\.(png|jpg|jpeg|gif)$/,
        loader:"file-loader"
      }
    ],
  },
  devServer: {
    open: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [new HtmlWebpackPlugin(), new CleanWebpackPlugin()],
};