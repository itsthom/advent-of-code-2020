class WaitingAreaSeatingSimulator {
  constructor (input) {
    this.state = input.trim()
    this.seats = input.split('\n').filter(str => str).map(str => str.split(''))
  }

  runSimulation () {
    const newSeats = this.seats.reduce((rows, columns, row) => {
      rows.push(columns.map((_, col) => this.getNextSeatState(row, col)))
      return rows
    }, []).map(a => a.join('')).join('\n')
    return new WaitingAreaSeatingSimulator(newSeats)
  }

  getNextSeatState (row, col) {
    const seat = this.seats[row][col]
    switch (seat) {
      case 'L': return this.countNeighbors(row, col) === 0 ? '#' : 'L'
      case '#': return this.countNeighbors(row, col) >= 4 ? 'L' : '#'
      default: return seat
    }
  }

  countNeighbors (row, col) {
    const dontCountThisSeat = this.seats[row][col] === '#' ? 1 : 0
    const adjacentSeats = this.seats
      .slice(Math.max(0, row - 1), Math.min(this.seats.length, row + 2))
      .map(row => row.slice(Math.max(0, col - 1), Math.min(row.length, col + 2)).filter(s => s === '#').length)
      .reduce((a, b) => a + b)
    return adjacentSeats - dontCountThisSeat
  }

  occupiedSeats () {
    return (this.state.match(/#/g) || []).length
  }

  equals (anotherSim) {
    return this.state === anotherSim?.state
  }
}

function finalOccupiedSeats (simulator) {
  let a = simulator
  let b = simulator.runSimulation()
  while (!a.equals(b)) {
    a = b
    b = a.runSimulation()
  }
  return a.occupiedSeats()
}

function solution (input) {
  const sim = new WaitingAreaSeatingSimulator(input)
  return {
    part1: finalOccupiedSeats(sim),
    part2: '???'
  }
}

export { WaitingAreaSeatingSimulator, solution }
