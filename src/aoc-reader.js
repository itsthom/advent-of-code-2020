import { readFileSync } from 'fs'
import * as path from 'path'

function readInput (file, separator = '\n') {
  const input = path.resolve(`./input/${file}`)
  return readFileSync(input, 'utf-8')
    .split(separator)
    .filter(x => x.length > 0)
}

export { readInput }
