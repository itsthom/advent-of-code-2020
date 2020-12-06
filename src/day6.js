import { readInput } from './aoc-reader.js'

const questions = 'abcdefghijklmnopqrstuvwxyz'.split('')

function countYesResponses (str) {
  return questions
    .map(x => ({ question: x, count: (str.match(RegExp(x, 'g')) || []).length }))
    .filter(x => x.count > 0)
}

function solution () {
  const input = readInput('day6.txt', '\n\n').map(countYesResponses)
  return {
    part1: input.map(x => x.length).reduce((a, b) => a + b),
    part2: '???'
  }
}

export { countYesResponses, solution }
