import React, { useReducer } from 'react'

const initialState = { count: 0 }

type Counteraction = {
    type:string
    payload:number
}

type Counter = {
    count:number
}

function reducer(state:Counter, action:Counteraction):Counter {
    switch (action.type) {
        case 'increment':            
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        default : 
            return state
    }
}

export const Usereducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    return (
        <>
          Weight : {state.count}  
          <br/>
          <button onClick={()=>dispatch({type:'increment',payload:10})}>Increment</button>
          <br/>            
          <button onClick={()=>dispatch({type:'decrement',payload:10})}>Decrement</button>
          
        </>
    )
}
