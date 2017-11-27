define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
/* eslint strict:[2,"function"] */
module.exports = function (config) {
  "use strict";
  config.set({
    basePath: "",
    frameworks: ["mocha"],
    files: [
      "tests-bundle.js",
    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: ["progress"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ["Chrome", "Firefox"],
    singleRun: true,
  });
};

return module.exports;});
