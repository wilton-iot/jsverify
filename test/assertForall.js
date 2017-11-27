define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
/* jshint node:true */
/* global describe, it */
"use strict";

var jsc = require("jsverify/lib/jsverify.js");
var assert = require("assert");
var describe = require("tape-compat").describe;
var it = require("tape-compat").it;

describe("assertForall function", function () {

  it("runs a property", function () {
    jsc.assertForall(jsc.integer(), function (/* i */) {
      return true;
    });
  });

  it("throws on fail", function () {
    var err;
    try {
      jsc.assertForall(jsc.nat(), function (/* n */) {
        return false;
      });
      throw "foo";
    } catch (e) {
      err = e.message;
    }

    assert(err);
    assert(!(/foo/.test(err)));
  });
});

return module.exports;});
