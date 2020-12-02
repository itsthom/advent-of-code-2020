import { readInput } from './aoc-reader.js'

function countValidPasswords (arr) {
  return arr.filter(isValidPassword).length
}

function isValidPassword (str) {
  const parsed = str.match(/^(?<min>\d+)-(?<max>\d+) (?<required>\w+): (?<password>.*)/).groups
  const matched = (parsed.password.match(RegExp(parsed.required, 'g')) || []).length
  return matched >= parseInt(parsed.min) && matched <= parseInt(parsed.max)
}

function solution () {
  const input = readInput('day2.txt')
  return {
    part1: countValidPasswords(input),
    part2: '???'
  }
}

export { countValidPasswords, isValidPassword, solution }
