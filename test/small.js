define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
/* jshint node:true */
/* global describe */
"use strict";

var jsc = require("jsverify/lib/jsverify.js");
var describe = require("tape-compat").describe;

describe("small", function () {
  jsc.property("high complexity algorithm property, 1", "small (array nat)", function (arr) {
    return Array.isArray(arr);
  });

  jsc.property("high complexity algorithm property, 2", "(small array) nat", function (arr) {
    return Array.isArray(arr);
  });
});

return module.exports;});
