/* DO NOT EDIT! This file is generated. */

var require;
if (!require) require = {config: function (x) {require = x;}};
require.config({
  "paths": {
    "helios/showdown": "bower_components/showdown/src/showdown",
    "requireJS": "node_modules/requirejs/require",
    "require-css": "bower_components/require-css",
    "jquery": "bower_components/jquery/jquery",
    "jquery-ui": "bower_components/jquery-ui/jquery-ui",
    "codemirror": "bower_components/codemirror",
    "bootstrap2.3.2": "bower_components/bootstrap2.3.2/bootstrap",
    "text": "bower_components/text/text",
    "sightglass": "bower_components/sightglass/index",
    "rlite": "bower_components/rlite/rlite.min",
    "rivets": "bower_components/rivets/dist/rivets",
    "bootstrap": "bower_components/bootstrap/dist/js/bootstrap.min",
    "minimapless": "bower_components/minimapless/src",
    "helios": "bower_components/helios/src",
    "helios/resources": "bower_components/helios/resources",
    "helios/index": "bower_components/helios/index",
    "domevents": "bower_components/amber-dom-events/src",
    "amber-attic": "bower_components/amber-attic/src",
    "amber-attic/resources": "bower_components/amber-attic/resources",
    "amber": "bower_components/amber/support",
    "amber_core": "bower_components/amber/src",
    "amber-mvc": "src"
  },
  "rjs_comment1": "require.min should be removed",
  "rjs_comment2": "it's backward compatibility hack if config finds",
  "rjs_comment3": "support/requirejs before node_modules/requirejs;",
  "rjs_comment4": "the former will go away in 0.14.0",
  "map": {
    "*": {
      "css": "require-css/css"
    }
  },
  "shim": {
    "jquery-ui": {
      "deps": [
        "jquery",
        "jquery"
      ]
    },
    "codemirror/lib/codemirror": {
      "deps": [
        "css!codemirror/lib/codemirror",
        "css!codemirror/lib/codemirror"
      ]
    },
    "bootstrap2.3.2/js/bootstrap": {
      "deps": [
        "jquery",
        "css!bootstrap2.3.2/css/bootstrap"
      ]
    },
    "rivets": {
      "deps": [
        "sightglass"
      ]
    },
    "bootstrap": {
      "deps": [
        "jquery"
      ]
    },
    "amber-attic/IDE": {
      "deps": [
        "codemirror/lib/codemirror",
        "codemirror/mode/smalltalk/smalltalk",
        "codemirror/addon/hint/show-hint",
        "css!codemirror/theme/ambiance",
        "css!codemirror/lib/codemirror",
        "css!codemirror/addon/hint/show-hint",
        "jquery-ui",
        "css!./resources/amber"
      ]
    },
    "ensure-console": {
      "exports": "console"
    }
  }
});