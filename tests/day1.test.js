import * as day1 from '../src/day1.js'
import { readInput } from '../reader.js'

describe('d1 function: search', () => {
  test('With Test Input', () => {
    const input = [1721, 979, 366, 299, 675, 1456].sort((a, b) => a - b)
    expect(day1.search(input)).toBe(514579)
  })
})

describe('d1 function: search2', () => {
  test('With Test Input', () => {
    const input = [1721, 979, 366, 299, 675, 1456].sort((a, b) => a - b)
    expect(day1.search2(input)).toBe(241861950)
  })
})

describe('function: solution', () => {
  test('with my input', () => {
    const solution = day1.solution(readInput('day1.txt'))
    expect(solution.part1).toBe(1018336)
    expect(solution.part2).toBe(288756720)
  })
})
