import React from 'react'
type InputChange = {
    value: string
    handleChange: (event:React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props:InputChange) => {
  return (
    <div>
        <input type='text' value={props.value} onChange={props.handleChange} />
    </div>
  )
}
