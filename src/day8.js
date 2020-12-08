function execUntilLoop (instructions) {
  let address = 0
  let accumulator = 0
  while (!instructions[address].visited) {
    instructions[address].visited = true
    switch (instructions[address].operation) {
      case 'acc':
        accumulator += parseInt(instructions[address].arg)
        address++
        break
      case 'jmp':
        address += parseInt(instructions[address].arg)
        break
      case 'nop':
        address++
        break
    }
  }
  return accumulator
}

function solution (input) {
  const instructions = input.split('\n').filter(x => x)
    .map(str => str.match(/^(?<operation>\w+) (?<arg>[+-]\d+)/).groups)
  return {
    part1: execUntilLoop(instructions),
    part2: '???'
  }
}

export { solution }
