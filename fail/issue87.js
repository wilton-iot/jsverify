define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
/* jshint node:true */
/* global describe */
"use strict";

var Bluebird = require("bluebird");
var jsc = require("jsverify/lib/jsverify.js");

describe("#87", function () {
  jsc.property("foo", function () {
    return Bluebird.resolve(false).delay(10);
  });

  jsc.property("foo", jsc.constant("bar"), function () {
    return Bluebird.resolve(false);
  });

  jsc.property("foo", jsc.constant("bar"), function () {
    return Bluebird.resolve(false).delay(10);
  });
});

return module.exports;});
