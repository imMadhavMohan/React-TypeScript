import {useContext} from 'react'
import {context} from './Mycontext'
import {info} from './info'

export const Usecontext = () => {
  const {name,age,city,isMarried}:info = useContext(context)
  return (
    <div>
        <h4>
            {name} 
            {age} 
            {city} 
            {isMarried}
        </h4>
    </div>
  )
}
