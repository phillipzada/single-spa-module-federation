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
        name: "dep",
        library: {
          type: "var",
          name: "dep"
        },
        filename: "remoteEntry.js",
        exposes: {
          './DEP': './src/main.single-spa.ts', // bootstrap --> main --> AppModule --> WebComp
        },

        // For hosts (please adjust)
        /*
        remotes: {
            'mfe1': "mfe1@http://localhost:3000/remoteEntry.js" 
        },
        */

        shared: {
          "@angular/core": { singleton: true },
          "@angular/common": { singleton: true },
          "@angular/common/": { singleton: true },
          "@angular/router": { singleton: true },
          "@angular/platform-browser": { singleton: true },
          "@angular/platform-browser-dynamic": { singleton: true },
          "single-spa": { singleton: true },
          "single-spa-angular": { singleton: true },
          rxjs: { singleton: true },
        }
      })
    ],
  });
  
};
