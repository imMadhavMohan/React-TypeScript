import React,{useState} from 'react'

type Authuser = {    
    name:string
    email:string
}

export const Usestate = () => {
  const [user, setuser] = useState<null | Authuser>(null)
  
  const handleLogin = ()=>{
        setuser({
            name:'Madhav',
            email:'Madhav@gmail.com'
        })
  }
  const handleLogout = ()=>{
        setuser(null)
  }
  return (
    <div>
        <button onClick={handleLogin}>Log-in</button>
        <button onClick={handleLogout}>Log-out</button>
        <h2>{user?.name} {user?.email}</h2>
    </div>
  )
}
