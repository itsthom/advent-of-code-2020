import { solutions, readInput } from '../allTheModules.js'
const { search, search2, solution } = solutions.day1.mod

describe('d1 function: search', () => {
  test('With Test Input', () => {
    const input = [1721, 979, 366, 299, 675, 1456].sort((a, b) => a - b)
    expect(search(input)).toBe(514579)
  })
})

describe('d1 function: search2', () => {
  test('With Test Input', () => {
    const input = [1721, 979, 366, 299, 675, 1456].sort((a, b) => a - b)
    expect(search2(input)).toBe(241861950)
  })
})

describe('function: solution', () => {
  test('with my input', () => {
    const input = readInput(solutions.day1.input)
    expect(solution(input).part1).toBe(1018336)
    expect(solution(input).part2).toBe(288756720)
  })
})
