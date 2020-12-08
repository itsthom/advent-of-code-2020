import { day23, readInput } from '../allTheModules.js'

describe('function: solution', () => {
  describe('with test input', () => {
    const solution = day23.mod.solution('')
    test('part1', () => {
      expect(solution.part1).toBe('???')
    })
    test('part2', () => {
      expect(solution.part2).toBe('???')
    })
  })

  describe('with real input', () => {
    const solution = day23.mod.solution(readInput(day23.input))
    test('part1', () => {
      expect(solution.part1).toBe('???')
    })
    test('part2', () => {
      expect(solution.part2).toBe('???')
    })
  })
})
