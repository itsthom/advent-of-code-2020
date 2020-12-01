import { solution as day0 } from './src/day0.js'
import { solution as day1 } from './src/day1.js'

import { createRequire } from 'module'
const require = createRequire(import.meta.url)
// @ts-ignore
const program = require('commander').program

const solutions = [
  day0,
  day1
]

function runSolution (index) {
  return solutions[index]()
}

// TODO: ooooo let's get colored output
function printSolution (index) {
  const solution = runSolution(index)
  console.log(`\nDAY ${index} SOLUTIONS\n  Part 1: ${solution.part1}\n  Part 2: ${solution.part2}`)
}
program
  .option('-d, --day <number>', 'run solution for a specific day', parseInt)

program.parse(process.argv)

if (program.day === undefined) {
  solutions.forEach((_, index) => printSolution(index))
} else if (program.day < 0 || program.day >= solutions.length) {
  console.log("That day doesn't make sense to me")
} else {
  printSolution(program.day)
}
