import {useContext} from 'react'
import {Context} from './ContextProvide'

export const Mycontext1 = () => {    
    const Mycontxt = useContext(Context)
    const handleLogin = ()=>{
        Mycontxt.setUser({email:'madhav@dxc',name:'Madhav',password:'mmp123',isLogged:true})
    }
    const handleLogout = ()=>{
      Mycontxt.setUser(null)
    }
    return (
      <div>
        <button onClick={handleLogin}>LogIn</button>                            
        <button onClick={handleLogout}>LogOut</button>  
        name:{Mycontxt.user?.name} 
        <br/>   
        email:{Mycontxt.user?.email}                      
      </div>
    )
  }