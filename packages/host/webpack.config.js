const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const fs = require("fs");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const outputPath = path.resolve(__dirname, "dist");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "smf";
  const args = {
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  };

  var config = {
    entry: "./src/smf-root-config",
    mode: "development",
    devServer: {
      // contentBase: path.join(__dirname, "dist"),
      compress: true,
      historyApiFallback: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      firewall: false,
      client: {
        host: "localhost",
      },
    },
    output: {
      publicPath: "/",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/i,
          include: [/node_modules/, /src/],
          use: [
            {
              loader: require.resolve("style-loader", {
                paths: [__dirname],
              }),
            },
            {
              loader: require.resolve("css-loader", {
                paths: [__dirname],
              }),
              options: {
                modules: false,
              },
            },
          ],
        },
        {
          test: /\.(bmp|png|svg|jpg|jpeg|gif|webp)$/i,
          exclude: /node_modules/,
          type: "asset/resource",
        },
        {
          test: /\.html$/i,
          exclude: /node_modules|public/,
          type: "asset/source",
        },
      ],
    },
    plugins: [
      // new BundleAnalyzerPlugin({
      //   analyzerMode: webpackConfigEnv.analyze ? "server" : "disabled",
      // }),
      // webpackConfigEnv.webpackConfigEnv && webpackConfigEnv.webpackConfigEnv.analyze ?
      // false :
      // new ForkTsCheckerWebpackPlugin({
      //   typescript: {
      //     diagnosticOptions: {
      //       semantic: true,
      //       syntactic: true,
      //     },
      //     mode: "write-references",
      //   },
      // }),
      new ModuleFederationPlugin({
        name: "root",
        remotes: {
           dep: "dep@http://localhost:4310/remoteEntry.js",
          // mfe1: "mfe1@http://localhost:4301/remoteEntry.js",
          // mfe2: "mfe2@http://localhost:4302/remoteEntry.js",
          // nav: "nav@http://localhost:4303/remoteEntry.js",
          // app3: "app3@http://localhost:4304/remoteEntry.js",
        },
        shared: {},
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
  };

  return config;
};
