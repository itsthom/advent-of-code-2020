import { search, search2 } from '../src/day01.js'

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
