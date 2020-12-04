import { readInput } from './aoc-reader.js'

function passportHasRequiredFields (str) {
  const passportObj = passportStringToObject(str)
  return [
    'byr',
    'iyr',
    'eyr',
    'hgt',
    'hcl',
    'ecl',
    'pid'
  ].every(x => passportObj[x])
}
/**
 * 265 total
 * current guess is 119. it is too high. meaning I should be rejecting MORE
 * so look at the ones that weren't rejected first
 * @param {*} str
 */
function passportIsValid (str) {
  const passportObj = passportStringToObject(str)
  return [
    { name: 'byr', validator: x => x >= '1920' && x <= '2002' },
    { name: 'iyr', validator: x => x >= '2010' && x <= '2020' },
    { name: 'eyr', validator: x => x >= '2020' && x <= '2030' },
    { name: 'hgt', validator: x => x.endsWith('cm') ? (x >= '150cm' && x <= '193cm') : x.endsWith('in') ? (x >= '59in' && x <= '76in') : false },
    { name: 'hcl', validator: x => x.match(/^#[\da-f]{6}$/) },
    { name: 'ecl', validator: x => x.match(/^(amb|blu|brn|gry|grn|hzl|oth)$/) },
    { name: 'pid', validator: x => x.match(/^\d{9}$/) }
  ].every(field => passportObj[field.name] && field.validator(passportObj[field.name]))
}

function passportStringToObject (str) {
  return str.split(/\s+/)
    .reduce((obj, kvp) => {
      const [key, val] = kvp.split(':')
      obj[key] = val
      return obj
    }, {})
}
function solution () {
  const input = readInput('day4.txt', '\n\n')
  return {
    part1: input.filter(passportHasRequiredFields).length,
    part2: input.filter(passportIsValid).length
  }
}

export { passportStringToObject, passportHasRequiredFields, passportIsValid, solution }
