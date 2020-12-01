import { readInput } from './aoc-reader.js'

function fuelRequired (mass) {
  return Math.floor(mass / 3) - 2
}

function totalFuelRequired (input) {
  return readInput(input)
    .map(x => fuelRequired(parseInt(x, 10)))
    .reduce((acc, current) => acc + current)
}

function solution () {
  return {
    part1: totalFuelRequired('day0.txt'),
    part2: '???'
  }
}

export { fuelRequired, totalFuelRequired, solution }
