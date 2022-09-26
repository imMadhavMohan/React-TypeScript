import React,{useRef} from 'react'

export const UseRef = () => {
  const refer = useRef<HTMLInputElement|null>(null) 
  const handleClick = ()=>{
    refer.current?.focus() // refernce will be done only if refer is set to input
  }
  return (
    <div>
        UserId: <input type='text' ref={refer}/>
        <button onClick={handleClick}>ClickToFocus</button>
    </div>
  )
}
