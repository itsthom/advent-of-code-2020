import { search } from '../src/day1.js'

describe('d1 function: search', () => {
  test('With Test Input', () => {
    const input = [1721, 979, 366, 299, 675, 1456].sort((a, b) => a - b)
    expect(search(input)).toBe(514579)
  })
})
