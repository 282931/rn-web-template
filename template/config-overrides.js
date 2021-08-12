const webpack = require("webpack");
const { override, addWebpackPlugin } = require("customize-cra");
const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");

module.exports = override(
  addWebpackPlugin(
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
      __DEV__: process.env.NODE_ENV !== "production",
    })
  )
);
module.exports = function override(config, env) {
  config.resolve.plugins = config.resolve.plugins.filter(
    (plugin) => !(plugin instanceof ModuleScopePlugin)
  );

  return config;
};
