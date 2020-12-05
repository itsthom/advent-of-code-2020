import { readInput } from './aoc-reader.js'

function calculateSeatId (str) {
  const asBinaryStr = str.split('').map(x => 'BR'.includes(x) ? '1' : '0').join('')
  const row = parseInt(asBinaryStr.substring(0, 7), 2)
  const col = parseInt(asBinaryStr.substring(7), 2)
  return row * 8 + col
}

function findMissingSeatId (sortedIds) {
  return sortedIds.find((x, index, arr) => {
    return index !== 0 && x !== (arr[index - 1] + 1)
  }) - 1
}

function solution () {
  const seatIds = readInput('day5.txt')
    .map(calculateSeatId)
    .sort((a, b) => a - b)
  const missingId = findMissingSeatId(seatIds)
  return {
    part1: seatIds.pop(),
    part2: missingId
  }
}

export { calculateSeatId, findMissingSeatId, solution }
