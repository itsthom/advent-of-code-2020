import { day8, readInput } from '../allTheModules.js'

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
    const solution = day8.mod.solution(testInput)
    test('part1', () => {
      expect(solution.part1).toBe(5)
    })
    test('part2', () => {
      expect(solution.part2).toBe(8)
    })
  })

  describe('with real input', () => {
    const solution = day8.mod.solution(readInput(day8.input))
    test('part1', () => {
      expect(solution.part1).toBe(1610)
    })
    test('part2', () => {
      expect(solution.part2).toBe(1703)
    })
  })
})
