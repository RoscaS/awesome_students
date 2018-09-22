'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../../_lib/buildFormatLongFn/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formatLong = (0, _index2.default)({
  LT: 'h:mm aa',
  LTS: 'h:mm:ss aa',
  L: 'DD/MM/YYYY',
  LL: 'D [de] MMMM [de] YYYY',
  LLL: 'D [de] MMMM [de] YYYY [às] h:mm aa',
  LLLL: 'dddd, D [de] MMMM [de] YYYY [às] h:mm aa'
});

exports.default = formatLong;
module.exports = exports['default'];