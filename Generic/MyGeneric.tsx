import React from 'react'
import {List} from './List'

export const Generic = () => {
  return (
    <div>
        {/* <List items={['Maddy','Mohan','Perman','Superman']} onClick={(item)=>console.log(item)} />
        <List items={[1,2,3,4,5]} onClick={(item)=>console.log(item)} /> */}
        <List items={[{id:1,name:'Maddy',age:23},{id:2,name:'Maddy',age:23},{id:3,name:'Maddy',age:23},{id:4,name:'Maddy',age:23}]} onClick={(item)=>console.log(item)} />
    </div>
  )
}
