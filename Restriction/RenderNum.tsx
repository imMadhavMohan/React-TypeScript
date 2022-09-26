import React from 'react'
import { Randomnumber } from '../Restriction/Randomnumber'

export const RenderNum = () => {
  return (
    <div>
        <Randomnumber val={10} isPositive />
        {/* Only one can be passed as child either Positive, negative, zero */}
    </div>
  )
}
