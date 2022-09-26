import React, { Children } from 'react'

type inputProps = any|React.ComponentProps<'input'>

export const Input = (val:inputProps) => {
  return (
    <div>
        <input type='text' value={`${val}`} />
    </div>
  )
}
