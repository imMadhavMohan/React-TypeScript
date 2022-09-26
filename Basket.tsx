import React from 'react'

type BasketSpec = {
    color: string
    size: number
    compName: string
}

export const Basket = ({color, size, compName}:BasketSpec) => { // destructuring
  return (
    <div>
        <h4>{`${color} ${size} ${compName}`}</h4>
    </div>
  )
}
