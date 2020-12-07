import { solutions, readInput } from '../allTheModules.js'
const { mod, input } = solutions.day12

describe('function: solution', () => {
  test('given test input', () => {
    const solution = mod.solution(readInput(input))
    expect(solution.part1).toBe('???')
    expect(solution.part2).toBe('???')
  })
})
