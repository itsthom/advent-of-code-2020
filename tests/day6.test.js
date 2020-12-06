import * as d6 from '../src/day6.js'

const input = ['abc', 'a\nb\nc', 'ab\nac', 'a\na\na\na', 'b']

describe('function: countYesResponses', () => {
  test('sample input', () => {
    const result = input.map(d6.countYesResponses)
    expect(result[0].length).toBe(3)
    expect(result[1].length).toBe(3)
    expect(result[2].length).toBe(3)
    expect(result[3].length).toBe(1)
    expect(result[4].length).toBe(1)
  })
})

describe('function: solution', () => {
  test('with my input', () => {
    expect(d6.solution().part1).toBe(6742)
  })
})
