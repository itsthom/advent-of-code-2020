import { readInput } from './aoc-reader.js'

const questions = 'abcdefghijklmnopqrstuvwxyz'.split('')

function characterCounter (str) {
  return (char) => (str.match(RegExp(char, 'g')) || []).length
}

function countYesResponses (str) {
  return questions.map(characterCounter(str)).filter(x => x > 0).length
}

function countUnanimousYesResponses (str) {
  const groupSize = str.split('\n').filter(x => x).length
  return questions.map(characterCounter(str)).filter(x => x === groupSize).length
}

function solution () {
  const input = readInput('day6.txt', '\n\n')
  return {
    part1: input.map(countYesResponses).reduce((a, b) => a + b),
    part2: input.map(countUnanimousYesResponses).reduce((a, b) => a + b)
  }
}

export { countYesResponses, countUnanimousYesResponses, solution }
