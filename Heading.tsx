import React from 'react'
type reactNode = {
    children: React.ReactNode // Passing a component
}

export const Heading = (props:reactNode) => {
  return (
    <div>
        {props.children}
    </div>
  )
}
