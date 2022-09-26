import React,{useReducer} from 'react'

const initialState = { count:0 }

type counter= {
    count: number
}

type updateaction = {
    type: 'increment'|'decrement'
    payload: number
}

type resetaction = {
    type: 'reset'
}

type counteraction = resetaction | updateaction // we want to keep payload optional

function reducer(state:counter, action:counteraction):counter{
    switch(action.type){
        case 'increment':
            return {count: state.count + action.payload}
        case 'decrement':
            return {count: state.count - action.payload}
        case 'reset':
            return {count: state.count}
        default:
            return state            
    }
}

export const Usereducer1 = () => {
  const [state, dispatcher] = useReducer(reducer, initialState)
  return (
    <div>
        Count1: {state.count} <br/>
        <button onClick={()=>dispatcher({type:'increment', payload:10})}>Increment</button>
        <br/>
        <button onClick={()=>dispatcher({type:'decrement', payload:10})}>Decrement</button>
        <br/>
        <button onClick={()=>dispatcher({type:'reset'})}>Reset</button>
    </div>
  )
}
