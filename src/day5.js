import { readInput } from './aoc-reader.js'

function bspFind (str, start, end) {
  if (str.length === 0) return start
  const [directive, ...rest] = str
  const midpoint = Math.floor((start + end) / 2)
  return 'FL'.includes(directive)
    ? bspFind(rest, start, midpoint)
    : bspFind(rest, midpoint + 1, end)
}

function calculateSeatId (str) {
  const row = bspFind(str.substring(0, 7), 0, 127)
  const col = bspFind(str.substring(7), 0, 7)
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
