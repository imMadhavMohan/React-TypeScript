import React from 'react'

type BoxProps = {
    styles: React.CSSProperties
}

export const Box = (props:BoxProps) => {
  return (
    <div style={props.styles}>
        TypeScript with React
    </div>
  )
}
