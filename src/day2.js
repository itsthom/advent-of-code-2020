import { readInput } from './aoc-reader.js'

function isValidPassword (str) {
  const parsed = str.match(/(?<min>\d+)-(?<max>\d+) (?<required>\w+): (?<password>.*)/).groups
  const matched = (parsed.password.match(RegExp(parsed.required, 'g')) || []).length
  return matched >= parseInt(parsed.min) && matched <= parseInt(parsed.max)
}

function isValidPassword2 (str) {
  const parsed = str.match(/(?<pos1>\d+)-(?<pos2>\d+) (?<required>\w): (?<password>.*)/).groups
  return (parsed.password[parsed.pos1 - 1] === parsed.required) !== (parsed.password[parsed.pos2 - 1] === parsed.required)
}

function solution () {
  const input = readInput('day2.txt')
  return {
    part1: input.filter(isValidPassword).length,
    part2: input.filter(isValidPassword2).length
  }
}

export { isValidPassword, isValidPassword2, solution }
