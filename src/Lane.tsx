import React from 'react'
import { distance } from './App'
import horse from './horse.png'

interface LaneProps {
  laneNumber: number
  position: number
}

export const Lane = ({ laneNumber, position }: LaneProps) => {
  const cells = new Array(distance + 1).fill(<div className='cell' />)
  cells[position] = (
    <div className='cell'>
      <img src={horse} alt={`Horse #${laneNumber}`} />
    </div>
  )
  return <div className='lane'>{cells}</div>
}
