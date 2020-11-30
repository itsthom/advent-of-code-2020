import { readFileSync } from 'fs'

function readInput (file) {
  return readFileSync(file, 'utf-8')
    .split('\n')
    .filter(x => x.length > 0)
}

export { readInput }
