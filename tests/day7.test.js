import { day7, readInput } from '../allTheModules.js'

const testInput1 =
`light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`

const testInput2 =
`shiny gold bags contain 2 dark red bags.
dark red bags contain 2 dark orange bags.
dark orange bags contain 2 dark yellow bags.
dark yellow bags contain 2 dark green bags.
dark green bags contain 2 dark blue bags.
dark blue bags contain 2 dark violet bags.
dark violet bags contain no other bags.`

describe('function: solution', () => {
  describe('with test input', () => {
    test('part1', () => {
      expect(day7.mod.solution(testInput1).part1).toBe(4)
    })
    test('part2', () => {
      expect(day7.mod.solution(testInput2).part2).toBe(126)
    })
  })
  describe('with my input', () => {
    const solution = day7.mod.solution(readInput(day7.input))
    test('part1', () => {
      expect(solution.part1).toBe(144)
    })
    test('part2', () => {
      expect(solution.part2).toBe(5956)
    })
  })
})
