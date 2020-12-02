import { solution as day0 } from './src/day0.js'
import { solution as day1 } from './src/day1.js'
import { solution as day2 } from './src/day2.js'
import { solution as day3 } from './src/day3.js'
import { solution as day4 } from './src/day4.js'
import { solution as day5 } from './src/day5.js'
import { solution as day6 } from './src/day6.js'
import { solution as day7 } from './src/day7.js'
import { solution as day8 } from './src/day8.js'
import { solution as day9 } from './src/day9.js'
import { solution as day10 } from './src/day10.js'
import { solution as day11 } from './src/day11.js'
import { solution as day12 } from './src/day12.js'
import { solution as day13 } from './src/day13.js'
import { solution as day14 } from './src/day14.js'
import { solution as day15 } from './src/day15.js'
import { solution as day16 } from './src/day16.js'
import { solution as day17 } from './src/day17.js'
import { solution as day18 } from './src/day18.js'
import { solution as day19 } from './src/day19.js'
import { solution as day20 } from './src/day20.js'
import { solution as day21 } from './src/day21.js'
import { solution as day22 } from './src/day22.js'
import { solution as day23 } from './src/day23.js'
import { solution as day24 } from './src/day24.js'
import { solution as day25 } from './src/day25.js'

// yarn and node's native ESM support don't quite play nice yet :(
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
// @ts-ignore
const chalk = require('chalk')
// @ts-ignore
const program = require('commander').program

const solutions = [
  day0, day1, day2, day3, day4, day5, day6, day7, day8, day9,
  day10, day11, day12, day13, day14, day15, day16, day17, day18, day19,
  day20, day21, day22, day23, day24, day25
]

function runSolution (index) {
  return solutions[index]()
}

function printSolution (day, solution) {
  if (solution.part1 === '???' && solution.part2 === '???') {
    return chalk.gray.dim(`DAY ${day}: no solutions yet`)
  }
  return `${chalk.blue.bold.underline(`DAY ${day}`)}
  ${chalk.yellow('Part 1:')} ${solution.part1 === '???' ? chalk.gray(solution.part1) : chalk.green(solution.part1)}
  ${chalk.yellow('Part 2:')} ${solution.part2 === '???' ? chalk.gray(solution.part2) : chalk.green(solution.part2)}`
}

program
  .option('-d, --day <number>', 'run solution for a specific day', parseInt)

program.parse(process.argv)

const result = program.day === undefined
  ? solutions.map((_, index) => printSolution(index, runSolution(index))).join('\n')
  : program.day < 0 || program.day >= solutions.length
    ? `${chalk.red.bold('!!!')} 🤔 The day you entered (${chalk.blue(program.day)}) doesn't make sense to me`
    : printSolution(program.day, runSolution(program.day))

console.log(`\n${result}\n`)
