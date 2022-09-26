import React from 'react'
import {Private} from './Private'
import {Profile} from "../Authuser/Profile"

export const Render = () => {
  return (
    <div>
        <Private isLogged={true} component={Profile}    /> 
        {/* Passing component as a child{Profile} */}
    </div>
  )
}
