import React,{useState} from 'react'

type Authuser = {
    name: string
    email: string
}

export const Usestate1 = () => {
  const [user,setuser] = useState({} as Authuser)  // we dont want it to be null as itll be assigned
  const handleLogin = ()=>{
     setuser({
        name: 'madhvaJi',
        email: 'madhav@yahoo.com'
     })
  }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <h2>{user?.name} {user?.email}</h2>
    </div>
  )
}
