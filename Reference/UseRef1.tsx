import React,{ useEffect, useRef ,useState} from 'react'

// useref only rerender once unlike usestate

export const UseRef1 = () => {
  const [cnt, setCnt] = useState<number>(0)
  const cntRef = useRef<number>(0)  
  
  const handleOff = ()=>{
    clearInterval(cntRef.current)
  }
  
  useEffect(()=>{
    cntRef.current = window.setInterval(()=>{
        setCnt((cnt)=>cnt+1)
    },1000)
    return ()=>{
        handleOff()
    }
  },[])

  return (
    <div>
        Counter: {cnt}
        <br/>        
        <button onClick={handleOff}>Stop</button>
    </div>
  )
}
