"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 *
 * @param {*} candidate
 * @return {boolean}
 */
exports.default = function (candidate) {
  return Array.isArray(candidate) && candidate.length > 0;
};