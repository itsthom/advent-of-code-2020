import { day6, readInput } from '../allTheModules.js'

const testInput = ['abc', 'a\nb\nc', 'ab\nac', 'a\na\na\na', 'b']

describe('function: countYesResponses', () => {
  test('sample input', () => {
    const result = testInput.map(day6.mod.countYesResponses)
    expect(result[0]).toBe(3)
    expect(result[1]).toBe(3)
    expect(result[2]).toBe(3)
    expect(result[3]).toBe(1)
    expect(result[4]).toBe(1)
  })
})

describe('function: countUnanimousYesResponses', () => {
  test('sample input', () => {
    const result = testInput.map(day6.mod.countUnanimousYesResponses)
    expect(result[0]).toBe(3)
    expect(result[1]).toBe(0)
    expect(result[2]).toBe(1)
    expect(result[3]).toBe(1)
    expect(result[4]).toBe(1)
  })
})

describe('function: solution', () => {
  describe('with my input', () => {
    const solution = day6.mod.solution(readInput(day6.input))
    test('part1', () => {
      expect(solution.part1).toBe(6742)
    })
    test('part2', () => {
      expect(solution.part2).toBe(3447)
    })
  })
})
