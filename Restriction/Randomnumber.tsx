import React from 'react'

// Only that should be printed whatever is true about the Number

type RanNum = {
    val:number
}

type Positive = RanNum & {
    isPositive: boolean
    isNegative?:never
    isZero?: never
}

type Negative = RanNum & {
    isPositive?: never
    isNegative:boolean
    isZero?: never
}

type Zero = RanNum & {
    isPositive?: never
    isNegative?:never
    isZero: boolean
}

type RandomProps = RanNum & (Negative | Positive | Zero)


export const Randomnumber = ({val,isPositive,isNegative,isZero}:RandomProps) => {
  return (
    <div>
        {val} is {isPositive && 'Positive'} {isNegative && 'Negative'} {isZero && 'Zero'}
    </div>
  )
}
