'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../../_lib/buildFormatLongFn/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formatLong = (0, _index2.default)({
  // 23:25
  LT: 'H:mm',
  // 23:25:59
  LTS: 'H:mm:ss',
  // 25/08/2017
  L: 'DD/MM/YYYY',
  // ngày 25 tháng 8 năm 2017
  LL: '[ngày] D [tháng] M [năm] YYYY',
  // ngày 25 tháng 8 năm 2017 23:25
  LLL: '[ngày] D [tháng] M [năm] YYYY H:mm',
  // thứ Sáu, ngày 25 tháng Tám năm 2017 23:25:59
  LLLL: 'dddd, [ngày] D MMMM [năm] YYYY H:mm:ss'
});

exports.default = formatLong;
module.exports = exports['default'];