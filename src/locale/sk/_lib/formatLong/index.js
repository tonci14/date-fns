import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index'

// https://www.unicode.org/cldr/charts/32/summary/sk.html?hide#1986
var dateFormats = {
  full: 'EEEE, d. MMMM yyyy',
  long: 'd. MMMM yyyy',
  medium: 'd. M. yyyy',
  short: 'dd.MM.yyyy',
}

// https://www.unicode.org/cldr/charts/32/summary/sk.html?hide#2149
var timeFormats = {
  full: 'H:mm:ss zzzz',
  long: 'H:mm:ss z',
  medium: 'H:mm:ss',
  short: 'H:mm',
}

// https://www.unicode.org/cldr/charts/32/summary/sk.html?hide#1994
var dateTimeFormats = {
  full: '{{date}}, {{time}}',
  long: '{{date}}, {{time}}',
  medium: '{{date}}, {{time}}',
  short: '{{date}} {{time}}',
}

var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: 'full',
  }),

  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: 'full',
  }),

  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: 'full',
  }),
}

export default formatLong
