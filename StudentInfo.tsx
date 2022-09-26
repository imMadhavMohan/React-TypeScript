import React from 'react'
import {Name} from './Name' 

type Info = {
    names: Name[]
}

export const StudentInfo = (props:Info) => {    
  return (
    <div>
        {props.names.map(e=><h4 key={e.name}>{e.name}, {e.class}, {e.age}</h4> )}
    </div>
  )
}
