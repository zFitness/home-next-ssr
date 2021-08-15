// next.config.js
const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
  // optional
  modifyVars: { "@primary-color": "#1DA57A" },
  // optional
  lessVarsFilePath: "./src/styles/variables.less",
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  // Other Config Here...

  webpack(config) {
    return config;
  },
});
