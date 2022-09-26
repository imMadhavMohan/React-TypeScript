import React from 'react'

export type profileProps = {
    name:string    
}

export const Profile = ({name}:profileProps ) => {
  return (
    <div>Profile acessed & Name is: {name}</div>
  )
}
