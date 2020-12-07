import { solutions, readInput } from '../allTheModules.js'
import * as d5 from '../src/day5.alt.js'

const input = [
  { str: 'FBFBBFFRLR', id: 357 },
  { str: 'BFFFBBFRRR', id: 567 },
  { str: 'FFFBBBFRRR', id: 119 },
  { str: 'BBFFBBFRLL', id: 820 }
]

describe('function: calculateSeatId', () => {
  test('using the test input', () => {
    input.forEach((x) => {
      expect(d5.calculateSeatId(x.str)).toBe(x.id)
    })
  })
})

describe('function: findMissingSeatId', () => {
  test('return the first missing item in the sequence', () => {
    const sequence = [1, 2, 3, 5]
    expect(d5.findMissingSeatId(sequence)).toBe(4)
  })
  test('return the first missing item in the sequence', () => {
    const sequence = [1, 2, 4]
    expect(d5.findMissingSeatId(sequence)).toBe(3)
  })
  test('return the first missing item in the sequence', () => {
    const sequence = [1, 3]
    expect(d5.findMissingSeatId(sequence)).toBe(2)
  })
})

describe('function: solution', () => {
  test('with my test input', () => {
    const sol = d5.solution(readInput(solutions.day5.input))
    expect(sol.part1).toBe(842)
    expect(sol.part2).toBe(617)
  })
})
