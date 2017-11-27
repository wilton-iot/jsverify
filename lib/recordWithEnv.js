define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
"use strict";

var environment = require("jsverify/lib/environment.js");
var record = require("jsverify/lib/record.js");
var typify = require("jsverify/lib/typify.js");
var utils = require("jsverify/lib/utils.js");

/**
  ### Arbitrary records

  - `record(spec: { key: arbitrary a... }, userenv: env?): arbitrary { key: a... }`

      Generates a javascript object with given record spec.
*/
function recordWithEnv(spec, userenv) {
  var env = userenv ? utils.merge(environment, userenv) : environment;

  var parsedSpec = {};
  Object.keys(spec).forEach(function (k) {
    var arb = spec[k];
    parsedSpec[k] = typeof arb === "string" ? typify.parseTypify(env, arb) : arb;
  });

  return record.arbitrary(parsedSpec);
}

module.exports = recordWithEnv;

return module.exports;});
