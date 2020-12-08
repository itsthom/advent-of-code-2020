import * as day0 from '../src/day0.js'
import { readInput } from '../reader.js'

describe('d0 function: fuelRequired', () => {
  test('For a mass of 12', () => {
    expect(day0.fuelRequired(12)).toBe(2)
  })

  test('For a mass of 14', () => {
    expect(day0.fuelRequired(14)).toBe(2)
  })

  test('For a mass of 1969', () => {
    expect(day0.fuelRequired(1969)).toBe(654)
  })

  test('For a mass of 100756', () => {
    expect(day0.fuelRequired(100756)).toBe(33583)
  })
})

describe('function: solution', () => {
  describe('with my input', () => {
    const solution = day0.solution(readInput('day0.txt'))
    test('part1', () => {
      expect(solution.part1).toBe(3342946)
    })
    test('part2', () => {
      expect(solution.part2).toBe('???')
    })
  })
})
