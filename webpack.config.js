const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack");
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/js/index.js",
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
    // publicPath:"/Webpack_6/dist/js"
    // publicPath:"/prueba/"
  },
  devtool:"source-map",
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
              publicPath: "/images/",
            },
          },
        ],
      },
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use:{
          loader:"babel-loader"
        }
      }

    ],
  },
  devServer: {
    // contentBase:"./dist",
    index: "indice.html",
    open: true,
    hot: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Una nueva App with Webpack",
      template: "./src/index.html",
      filename: "indice.html",
    }),
    new HtmlWebpackPlugin({
      title: "Una nueva App with Webpack GUITARS",
      template: "./src/pages/guitars.html",
      filename: "pages/guitars.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
    /*     new webpack.ProvidePlugin({
      $:"jQuery"
    }), */
    new CleanWebpackPlugin(),
  ],
};