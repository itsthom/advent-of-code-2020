import * as d5 from '../src/day5.js'

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

describe('function: solution', () => {
  test('with my test input', () => {
    const sol = d5.solution()
    expect(sol.part1).toBe(842)
    expect(sol.part2).toBe('???')
  })
})
