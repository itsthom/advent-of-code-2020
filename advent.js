import * as day0 from './src/day0.js'

import { createRequire } from 'module'
const require = createRequire(import.meta.url)
// @ts-ignore
const program = require('commander').program

const solutions = [
  day0.solution
]

function runSolution (index) {
  return solutions[index]()
}

function printSolution (index) {
  console.log(`Day ${index} solution: ${runSolution(index)}`)
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
