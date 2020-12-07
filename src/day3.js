function reducerProducer (rShift, dShift) {
  return (total, row, index) => {
    if (index % dShift !== 0) {
      return total
    }
    const pos = ((index / dShift) * rShift) % row.length
    return row[pos] === '#' ? total + 1 : total
  }
}

function sumCollisions (input, rShift, dShift) {
  return input.reduce(reducerProducer(rShift, dShift), 0)
}

function solution (input) {
  const slopeMap = input.split('\n').filter(x => x)
  const collisions = [
    sumCollisions(slopeMap, 1, 1),
    sumCollisions(slopeMap, 3, 1),
    sumCollisions(slopeMap, 5, 1),
    sumCollisions(slopeMap, 7, 1),
    sumCollisions(slopeMap, 1, 2)
  ]
  return {
    part1: collisions[1],
    part2: collisions.reduce((acc, curr) => acc * curr)
  }
}

export { sumCollisions, solution }
