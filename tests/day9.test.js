import * as day9 from '../src/day9.js'
import { readInput } from '../reader.js'

const testInput =
`35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`

describe('function: validateXMASData', () => {
  test('with test input', () => {
    const input = testInput.split('\n').map(str => parseInt(str, 10))
    expect(day9.validateXMASData(input, 5)).toBe(127)
  })
  test('with only good test input', () => {
    const input = testInput.split('\n').map(str => parseInt(str, 10)).slice(0, 13)
    expect(day9.validateXMASData(input, 5)).toBe(true)
  })
})

describe('function: solution', () => {
  describe('with test input', () => {
    const solution = day9.solution(testInput, 5)
    test('part1', () => {
      expect(solution.part1).toBe(127)
    })
    test('part2', () => {
      expect(solution.part2).toBe(62)
    })
  })

  describe('with real input', () => {
    const solution = day9.solution(readInput('day9.txt'))
    test('part1', () => {
      expect(solution.part1).toBe(21806024)
    })
    test('part2', () => {
      expect(solution.part2).toBe(2986195)
    })
  })
})
