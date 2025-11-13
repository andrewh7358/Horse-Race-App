import React, { JSX, useEffect, useState } from 'react'
import { Lane } from './Lane'

const numLanes = 5
const startPositions = new Array(numLanes).fill(0)
const startChances = new Array(numLanes).fill(0.6)
export const distance = 16

export const App = () => {
  const [positions, setPositions] = useState<number[]>([...startPositions])
  const [chances, setChances] = useState<number[]>([...startChances])
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) {
      return
    }

    const interval = setInterval(() => {
      // moves a horse forward if it passes a random number check
      setPositions((prev) => {
        const updated = prev.map((value, index) => Math.random() < chances[index] ? value + 1 : value)

        if (updated.some((value) => value === distance)) {
          setRunning(false)
        }

        return updated
      })

      // updates the horses' chances randomly between -0.1 and 0.1
      // constrains chances between 0.3 and 0.9
      setChances((prev) => {
        const updated = prev.map((value) => Math.max(0.3, Math.min(0.9, value + Math.random() / 5 - 0.1)))
        return updated
      })
    }, 500)

    return () => clearInterval(interval)
  }, [running, chances])

  // reset to default state
  const handleReset = () => {
    setPositions([...startPositions])
    setChances([...startChances])
    setRunning(false)
  }

  const lanes: JSX.Element[] = []

  for (let i = 0; i < numLanes; i++) {
    const laneNumber = i + 1
    lanes.push(
      <>
        <div>{`Lane #${laneNumber}: ` + chances[i].toFixed(4)}</div>
        <Lane laneNumber={laneNumber} position={positions[i]} />
      </>
    )
  }

  const winners: string[] = []

  // determine winners when the race is over
  if (!running) {
    for (let i = 0; i < numLanes; i++) {
      if (positions[i] === distance) {
        winners.push(`Lane #${i + 1}`)
      }
    }
  }

  return (
    <>
      {lanes}
      <button type='button' onClick={() => setRunning(!running)} disabled={winners.length > 0}>{!running ? 'Start' : 'Pause'}</button>
      <button type='button' onClick={handleReset}>Reset</button>
      {!running && winners.length ? <div className='winnerText'>{'Winner: ' + winners.join(', ')}</div> : null}
    </>
  )
}
