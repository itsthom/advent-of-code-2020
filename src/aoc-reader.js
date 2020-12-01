import { readFileSync } from 'fs'
import * as path from 'path'

function readInput (file) {
  const input = path.resolve(`./input/${file}`)
  return readFileSync(input, 'utf-8')
    .split('\n')
    .filter(x => x.length > 0)
}

export { readInput }
