const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack");
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");

const MiniCssExtractPlugin=require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/ts/index.ts",
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".js"],

  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "imgs/",
              publicPath:"./imgs",
              // publicPath: path.resolve(__dirname, "./dist/imgs"),
            },
          },
        ],
      },

      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
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
    new MiniCssExtractPlugin(),
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