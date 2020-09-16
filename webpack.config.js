const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");

const MiniCssExtractPlugin=require("mini-css-extract-plugin");

const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  mode: "development",
  entry: {
    index: [
      "core-js/modules/es.array.iterator", // bug fix when dynamic import() in ie 10/11
      "./src/ts/index.ts",
    ],
  },
  output: {
    filename: "js/[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "[name].chunk.js",
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
          "postcss-loader",
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
              publicPath: "../imgs",
            },
          },
        ],
      },

      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
        ],
      },
    ],
  },

  devServer: {
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
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
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
    new CopyPlugin({
      patterns: [{ from: "src/imgs", to: "imgs" }],
    }),
  ],
};