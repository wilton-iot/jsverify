define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
/* jshint node:true */
/* global describe, it */
"use strict";

var jsc = require("jsverify/lib/jsverify.js");
var assert = require("assert");
var describe = require("tape-compat").describe;
var it = require("tape-compat").it;

describe("checkForall function", function () {

  it("returns true if property holds", function () {
    var result = jsc.checkForall(jsc.integer(), function (/* i */) {
      return true;
    });
    assert(result);
  });

  it("returns false if property does not hold", function () {
    var result = jsc.checkForall(jsc.nat(), function (/* n */) {
      return false;
    });

    assert(result !== true);
  });
});

return module.exports;});
