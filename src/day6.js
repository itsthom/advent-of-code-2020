import { readInput } from './aoc-reader.js'

const questions = 'abcdefghijklmnopqrstuvwxyz'.split('')

function countYesResponses (str) {
  return questions
    .map(x => (str.match(RegExp(x, 'g')) || []).length)
    .filter(x => x > 0)
    .length
}

function countUnanimousYesResponses (str) {
  const groupSize = str.split('\n').length
  return questions
    .map(x => (str.match(RegExp(x, 'g')) || []).length)
    .filter(x => x === groupSize)
    .length
}

function solution () {
  const input = readInput('day6.txt', '\n\n')
  return {
    part1: input.map(countYesResponses).reduce((a, b) => a + b),
    part2: input.map(countUnanimousYesResponses).reduce((a, b) => a + b)
  }
}

export { countYesResponses, countUnanimousYesResponses, solution }
