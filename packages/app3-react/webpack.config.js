const {
  merge
} = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "smf",
    projectName: "app3",
    webpackConfigEnv,
    argv,
  });

  defaultConfig.externals = [];

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    output: {
      libraryTarget: 'umd',
      publicPath: 'auto'
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "app3",
        library: {
          type: "var",
          name: "app3"
        },
        filename: "remoteEntry.js",
        exposes: {
          "./App": "./src/smf-app3",
        },
        remotes: {},
        shared: [
          "react",
          "react-dom"
        ]
      }),
    ]
  });
};