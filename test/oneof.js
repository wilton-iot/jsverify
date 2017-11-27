define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
/* jshint node:true */
/* global describe, it */
"use strict";

var jsc = require("jsverify/lib/jsverify.js");
var _ = require("lodash");
var describe = require("tape-compat").describe;
var it = require("tape-compat").it;
_.contains = _.includes;

describe("oneof", function () {
  it("uses one generator from the given parameters", function () {
    var gen = jsc.oneof(jsc.number, jsc.string);
    jsc.assert(jsc.forall(gen, function (x) {
      return _.isNumber(x) || _.isString(x);
    }));
  });

  it("uses one generator from the given array", function () {
    var gen = jsc.oneof([jsc.number, jsc.string]);
    jsc.assert(jsc.forall(gen, function (x) {
      return _.isNumber(x) || _.isString(x);
    }));
  });
});

return module.exports;});
