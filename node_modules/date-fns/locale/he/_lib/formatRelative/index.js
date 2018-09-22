'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatRelative;
var formatRelativeLocale = {
  lastWeek: 'dddd [שעבר ב־]LT',
  yesterday: '[אתמול ב־]LT',
  today: '[היום ב־]LT',
  tomorrow: '[מחר ב־]LT',
  nextWeek: 'dddd [ב־]LT',
  other: 'L'
};

function formatRelative(token, date, baseDate, options) {
  return formatRelativeLocale[token];
}
module.exports = exports['default'];