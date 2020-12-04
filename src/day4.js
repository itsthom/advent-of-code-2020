import { readInput } from './aoc-reader.js'

function passportHasRequiredFields (str) {
  const passportObj = passportStringToObject(str)
  return ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'].every(x => passportObj[x])
}

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
  ].every(field => field.validator(passportObj[field.name]))
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
  const passportsWithAllRequiredFields = readInput('day4.txt', '\n\n').filter(passportHasRequiredFields)
  return {
    part1: passportsWithAllRequiredFields.length,
    part2: passportsWithAllRequiredFields.filter(passportIsValid).length
  }
}

export { passportHasRequiredFields, passportIsValid, solution }
