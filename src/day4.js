import { readInput } from './aoc-reader.js'

function isPassportValid(str) {
  const passportObj = passportStringToObject(str)
  return [
    'byr',
    'iyr',
    'eyr',
    'hgt',
    'hcl',
    'ecl',
    'pid',
  ].every(x => passportObj[x])
}

function passportStringToObject (str) {
  return str
    .split(/\s+/)
    .reduce((obj, kvp) => {
      const [key, val] = kvp.split(':')
      obj[key] = val
      return obj
    }, {})
}

function solution () {
  const input = readInput('day4.txt', '\n\n')
  return {
    part1: input.filter(isPassportValid).length,
    part2: '???'
  }
}

export { isPassportValid, solution }
