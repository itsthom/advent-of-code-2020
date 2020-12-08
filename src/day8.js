function execUntilLoopOrTerm (instructions) {
  let address = 0
  let accumulator = 0
  instructions.forEach(instr => (instr.visited = false))
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
    if (address === instructions.length) {
      return { result: accumulator, success: true }
    }
  }
  return { result: accumulator, success: false }
}

function findActualResult (instructions) {
  const possibleFixAddresses = instructions.reduce((indices, instr, index) => {
    if (instr.operation.match(/nop|jmp/)) {
      indices.push(index)
    }
    return indices
  }, [])
  for (const addr of possibleFixAddresses) {
    // flip the instruction, test it, flip it back
    instructions[addr].operation = instructions[addr].operation === 'nop' ? 'jmp' : 'nop'
    const result = execUntilLoopOrTerm(instructions)
    if (result.success) {
      return result.result
    }
    instructions[addr].operation = instructions[addr].operation === 'nop' ? 'jmp' : 'nop'
  }
  return NaN
}

function solution (input) {
  const instructions = input.split('\n').filter(x => x)
    .map(str => str.match(/^(?<operation>\w+) (?<arg>[+-]\d+)/).groups)
  return {
    part1: execUntilLoopOrTerm(instructions).result,
    part2: findActualResult(instructions)
  }
}

export { solution }
