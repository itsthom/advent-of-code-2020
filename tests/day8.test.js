import { solutions, readInput } from '../allTheModules.js'
const { mod, input } = solutions.day8

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
    const solution = mod.solution(testInput)
    test('part1', () => {
      expect(solution.part1).toBe(5)
    })
    test('part2', () => {
      expect(solution.part2).toBe(8)
    })
  })

  describe('with real input', () => {
    const solution = mod.solution(readInput(input))
    test('part1', () => {
      expect(solution.part1).toBe(1610)
    })
    test('part2', () => {
      expect(solution.part2).toBe(1703)
    })
  })
})
