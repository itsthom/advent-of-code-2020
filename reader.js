import { existsSync, readFileSync } from 'fs'
import * as path from 'path'

function readInput (file) {
  const input = path.resolve(`./input/${file}`)
  return existsSync(input) ? readFileSync(input, 'utf-8') : ''
}

export { readInput }
