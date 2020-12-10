import * as day10 from '../src/day10.js'
import { readInput } from '../reader.js'

const input1 =
`16
10
15
5
1
11
7
19
6
12
4`

const input2 =
`28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`

describe('function: solution', () => {
  describe('with test input 1', () => {
    const solution = day10.solution(input1)
    test('part1', () => {
      expect(solution.part1).toBe(35)
    })
    test('part2', () => {
      expect(solution.part2).toBe('???')
    })
  })

  describe('with test input 2', () => {
    const solution = day10.solution(input2)
    test('part1', () => {
      expect(solution.part1).toBe(220)
    })
    test('part2', () => {
      expect(solution.part2).toBe('???')
    })
  })

  describe('with real input', () => {
    // const solution = day10.solution(readInput('day10.txt'))
    // test('part1', () => {
    //   expect(solution.part1).toBe(2046)
    // })
    // test('part2', () => {
    //   expect(solution.part2).toBe('???')
    // })
  })
})
