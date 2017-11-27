define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
/* global describe:true, it:true */
"use strict";

var jsc = require("jsverify/lib/jsverify.js");

describe("natural numbers", function () {
  it("are greater than or equal to 0", function () {
    var property = jsc.forall(jsc.nat(), function (n) {
      return n >= 0;
    });

    jsc.assert(property);
  });

  it("are less than 90", function () {
    var property = jsc.forall(jsc.nat(), function (n) {
      return n < 90;
    });

    jsc.assert(property, { size: 100 });
  });
});

return module.exports;});
