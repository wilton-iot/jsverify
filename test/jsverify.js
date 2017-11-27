define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
/* jshint node:true */
/* global describe, it:true */
"use strict";

var jsc = require("jsverify/lib/jsverify.js");
var assert = require("assert");
var describe = require("tape-compat").describe;
var it = require("tape-compat").it;

describe("jsverify", function () {
  describe("property", function () {
    jsc.property("+0 === -0", function () {
      return +0 === -0;
    });

    it("fail case", function () {
      var origIt = it;
      it = function (name, p) {
        assert.throws(p);
      };


      it = origIt;
    });
  });
});

return module.exports;});
