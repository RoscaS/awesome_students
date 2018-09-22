'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatRelative;
var formatRelativeLocale = {
  lastWeek: '[vorige] dddd [om] LT',
  yesterday: '[gisteren om] LT',
  today: '[vandaag om] LT',
  tomorrow: '[morgen om] LT',
  nextWeek: 'dddd [om] LT',
  other: 'L'
};

function formatRelative(token, date, baseDate, options) {
  return formatRelativeLocale[token];
}
module.exports = exports['default'];