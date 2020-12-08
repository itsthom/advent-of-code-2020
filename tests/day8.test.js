import * as day8 from '../src/day8.js'
import { readInput } from '../reader.js'

const testInput =
`nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`

describe('function: solution', () => {
  describe('with test input', () => {
    const solution = day8.solution(testInput)
    test('part1', () => {
      expect(solution.part1).toBe(5)
    })
    test('part2', () => {
      expect(solution.part2).toBe(8)
    })
  })

  describe('with garbage input', () => {
    const solution = day8.solution('jmp +99\njmp +99\n')
    test('part1', () => {
      expect(solution.part1).toBe(0)
    })
    test('part2', () => {
      expect(solution.part2).toBe(NaN)
    })
  })

  describe('with real input', () => {
    const solution = day8.solution(readInput('day8.txt'))
    test('part1', () => {
      expect(solution.part1).toBe(1610)
    })
    test('part2', () => {
      expect(solution.part2).toBe(1703)
    })
  })
})
