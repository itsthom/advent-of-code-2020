import * as repl from 'repl'
import { readInput } from './reader.js'
import * as d0 from './src/day0.js'
import * as d1 from './src/day1.js'
import * as d2 from './src/day2.js'
import * as d3 from './src/day3.js'
import * as d4 from './src/day4.js'
import * as d5 from './src/day5.js'
import * as d6 from './src/day6.js'
import * as d7 from './src/day7.js'
import * as d8 from './src/day8.js'
import * as d9 from './src/day9.js'
import * as d10 from './src/day10.js'
import * as d11 from './src/day11.js'
import * as d12 from './src/day12.js'
import * as d13 from './src/day13.js'
import * as d14 from './src/day14.js'
import * as d15 from './src/day15.js'
import * as d16 from './src/day16.js'
import * as d17 from './src/day17.js'
import * as d18 from './src/day18.js'
import * as d19 from './src/day19.js'
import * as d20 from './src/day20.js'
import * as d21 from './src/day21.js'
import * as d22 from './src/day22.js'
import * as d23 from './src/day23.js'
import * as d24 from './src/day24.js'
import * as d25 from './src/day25.js'

// yarn and node's native ESM support don't quite play nice yet :(
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const chalk = require('chalk')
// @ts-ignore
const program = require('commander').program

const solutions = {
  day0: { mod: d0, input: 'day0.txt' },
  day1: { mod: d1, input: 'day1.txt' },
  day2: { mod: d2, input: 'day2.txt' },
  day3: { mod: d3, input: 'day3.txt' },
  day4: { mod: d4, input: 'day4.txt' },
  day5: { mod: d5, input: 'day5.txt' },
  day6: { mod: d6, input: 'day6.txt' },
  day7: { mod: d7, input: 'day7.txt' },
  day8: { mod: d8, input: 'day8.txt' },
  day9: { mod: d9, input: 'day9.txt' },
  day10: { mod: d10, input: 'day10.txt' },
  day11: { mod: d11, input: 'day11.txt' },
  day12: { mod: d12, input: 'day12.txt' },
  day13: { mod: d13, input: 'day13.txt' },
  day14: { mod: d14, input: 'day14.txt' },
  day15: { mod: d15, input: 'day15.txt' },
  day16: { mod: d16, input: 'day16.txt' },
  day17: { mod: d17, input: 'day17.txt' },
  day18: { mod: d18, input: 'day18.txt' },
  day19: { mod: d19, input: 'day19.txt' },
  day20: { mod: d20, input: 'day20.txt' },
  day21: { mod: d21, input: 'day21.txt' },
  day22: { mod: d22, input: 'day22.txt' },
  day23: { mod: d23, input: 'day23.txt' },
  day24: { mod: d24, input: 'day24.txt' },
  day25: { mod: d25, input: 'day25.txt' }
}

const solutionKeys = Object.keys(solutions)

function printSolution (day) {
  const dayMod = solutions[day]
  const solution = dayMod.mod.solution(readInput(dayMod.input))
  if (solution.part1 === '???' && solution.part2 === '???') {
    return chalk.gray.dim(`${day.toUpperCase()}: no solutions yet`)
  }
  return `\n${chalk.blue.bold.underline(`${day.toUpperCase()}`)}
  ${chalk.yellow('Part 1:')} ${solution.part1 === '???' ? chalk.gray(solution.part1) : chalk.green(solution.part1)}
  ${chalk.yellow('Part 2:')} ${solution.part2 === '???' ? chalk.gray(solution.part2) : chalk.green(solution.part2)}`
}

function replTime () {
  const replServer = repl.start({
    prompt: `${chalk.red.bold('\n🎅!')} ${chalk.green.bold('>')} `,
    useColors: true,
    useGlobal: true
  })

  replServer.context.readInput = readInput
  for (const k of solutionKeys) {
    const s = solutions[k]
    replServer.context[k] = s.mod
  }
  replServer.on('exit', () => {
    console.log(chalk.green.bold('\n ☃️  ⛄️ ☃️  See you soon!️ ☃️  ⛄️ ☃️\n'))
    process.exit()
  })
}

program
  .description(chalk.green.italic('~~ Your friendly neighborhood Advent of Code 2020 runner ~~'))
  .usage(chalk.yellow('<command>'))

program
  .command('all')
  .description('Run solution for every day')
  .action(() => {
    console.log(solutionKeys.map(k => printSolution(k)).join('\n'))
    process.exit()
  })

program
  .command('day <day>')
  .description('Run solution for a specific day')
  .action((day) => {
    const result = solutionKeys.includes(`day${day}`)
      ? printSolution(`day${day}`)
      : `${chalk.red.bold('!!!')} 🤔 The day you entered (${chalk.blue(day)}) doesn't make sense to me`
    console.log(`\n${result}\n`)
    process.exit()
  })

program
  .command('interactive')
  .description('Start a REPL session with all the modules loaded')
  .action(replTime)

program.parse(process.argv)
