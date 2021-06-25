const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const {
  merge
} = require("webpack-merge");

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  return merge(singleSpaWebpackConfig, {
    optimization: {
      // Only needed to bypass a temporary bug
      runtimeChunk: false
    },
    plugins: [
      new ModuleFederationPlugin({

        // For remotes (please adjust)
        name: "nav",
        library: {
          type: "var",
          name: "nav"
        },
        filename: "remoteEntry.js",
        exposes: {
          './App': './src/main.single-spa.ts', // bootstrap --> main --> AppModule --> WebComp
        },

        // For hosts (please adjust)
        /*
        remotes: {
            'nav': "nav@http://localhost:3000/remoteEntry.js" 
        },
        */

        shared: [
          "@angular/core",
          "@angular/common",
          "@angular/router",
          "@angular/platform-browser",
          "@angular/platform-browser-dynamic",
          "single-spa",
          "single-spa-angular",
          "rxjs"
        ]
      })
    ],
  });

};
