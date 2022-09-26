import React from 'react'
type buttonClick = { // Event as props
    handleClick: (event:React.MouseEvent<HTMLButtonElement>, id:number)=>void
} 

export const Button = (props:buttonClick) => {
  return (
    <div>
      <button onClick={event=>props.handleClick(event,1)}>Click Me</button>
      {/* if you want to pass arg so use arrow func in events */}
    </div>
  )
}
