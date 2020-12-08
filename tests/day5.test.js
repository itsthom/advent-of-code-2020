import * as day5 from '../src/day5.js'
import { readInput } from '../reader.js'

const testInput = [
  { str: 'FBFBBFFRLR', id: 357 },
  { str: 'BFFFBBFRRR', id: 567 },
  { str: 'FFFBBBFRRR', id: 119 },
  { str: 'BBFFBBFRLL', id: 820 }
]

describe('function: calculateSeatId', () => {
  test('using the test input', () => {
    testInput.forEach((x) => {
      expect(day5.calculateSeatId(x.str)).toBe(x.id)
    })
  })
})

describe('function: findMissingSeatId', () => {
  test('return the first missing item in the sequence', () => {
    const sequence = [1, 2, 3, 5]
    expect(day5.findMissingSeatId(sequence)).toBe(4)
  })
  test('return the first missing item in the sequence', () => {
    const sequence = [1, 2, 4]
    expect(day5.findMissingSeatId(sequence)).toBe(3)
  })
  test('return the first missing item in the sequence', () => {
    const sequence = [1, 3]
    expect(day5.findMissingSeatId(sequence)).toBe(2)
  })
})

describe('function: solution', () => {
  test('with my test input', () => {
    const sol = day5.solution(readInput('day5.txt'))
    expect(sol.part1).toBe(842)
    expect(sol.part2).toBe(617)
  })
})
