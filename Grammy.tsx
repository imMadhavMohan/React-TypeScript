import React from 'react'

type nameMovie = {
    name:string
}

export const Grammy = (props:nameMovie) => {
  return (
    <div>
        Grammy Goes to {props.name}
    </div>
  )
}
