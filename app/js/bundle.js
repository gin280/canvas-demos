(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var api = 1234;

var go = function go() {
  var canvas = document.getElementById('api');

  canvas.width = 800;
  canvas.height = 800;

  var context = canvas.getContext('2d');

  context.fillStyle = '#000';
  context.fillRect(0, 0, canvas.width, canvas.height);

  setTimeout(function () {
    for (var i = 0; i < 200; i++) {
      var R = Math.random() * 10 + 10;
      var r = R / 2.0;
      var x = Math.random() * canvas.width;
      var y = Math.random() * canvas.height;
      var rot = Math.random() * 360;
      drawStar(context, r, R, x, y, rot);
    }
  }, 1000);
};

//Rect func

function drawRect1(cxt, x, y, width, height, borderWidth, borderColor, fillColor) {
  cxt.beginPath();
  cxt.moveTo(x, y);
  cxt.lineTo(x + width, y);
  cxt.lineTo(x + width, y + height);
  cxt.lineTo(x, y + height);
  cxt.closePath();

  cxt.lineWidth = borderWidth;
  cxt.fillStyle = fillColor;
  cxt.strokeStyle = borderColor;

  cxt.fill();
  cxt.stroke();
}

function drawRect2(cxt, x, y, width, height, borderWidth, borderColor, fillColor) {

  cxt.lineWidth = borderWidth;
  cxt.fillStyle = fillColor;
  cxt.strokeStyle = borderColor;

  cxt.fillRect(x, y, width, height);
  cxt.strokeRect(x, y, width, height);
}

//五角星

function drawStar(cxt, r, R, x, y, rot) {
  cxt.beginPath();
  for (var i = 0; i < 5; i++) {
    cxt.lineTo(Math.cos((18 + i * 72 - rot) / 180 * Math.PI) * R + x, -Math.sin((18 + i * 72 - rot) / 180 * Math.PI) * R + y);
    cxt.lineTo(Math.cos((54 + i * 72 - rot) / 180 * Math.PI) * r + x, -Math.sin((54 + i * 72 - rot) / 180 * Math.PI) * r + y);
  }

  cxt.closePath();

  cxt.fillStyle = '#FB3';
  cxt.strokeStyle = '#fd5';
  cxt.lineWidth = 3;
  cxt.lineJoin = 'round';
  cxt.fill();
  cxt.stroke();
}

exports.api = api;
exports.go = go;

},{}],2:[function(require,module,exports){
'use strict';

var _api = require('./api');

window.onload = function () {
    console.log(_api.api);
    (0, _api.go)();
}; // import {myClock,colors} from './clock.js';
// import * as circle from './test';

},{"./api":1}]},{},[2]);
