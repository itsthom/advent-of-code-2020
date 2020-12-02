import * as d2 from '../src/day2.js'

const testInput = [
  '1-3 a: abcde',
  '1-3 b: cdefg',
  '2-9 c: ccccccccc'
]

describe('function: isValidPassword', () => {
  test('input 1', () => {
    expect(d2.isValidPassword(testInput[0])).toBe(true)
  })

  test('input 2', () => {
    expect(d2.isValidPassword(testInput[1])).toBe(false)
  })

  test('input 3', () => {
    expect(d2.isValidPassword(testInput[2])).toBe(true)
  })

  test(',,', () => {
    expect(d2.isValidPassword('3-5 x: xxqxm')).toBe(true)
  })
})

describe('function: countValidPasswords', () => {
  test('test input', () => {
    expect(d2.countValidPasswords(testInput)).toBe(2)
  })
})
