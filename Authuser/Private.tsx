import React from 'react'
import {Login} from './Login'
import {profileProps} from './Profile'

type privateProps = {
    isLogged: boolean
    component: React.ComponentType<profileProps>
}

export const Private = ({isLogged, component:Component}:privateProps) => {
  return (
    <div>
        {/* Here we're passing name to child componenet */}
        {isLogged? <Component name='MadhavJi' /> : <Login /> }            
    </div>
  )
}
