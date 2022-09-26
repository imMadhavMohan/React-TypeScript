import {createContext,useState} from 'react'

export type userInfo = {
    email:string
    name: string
    password: string|number
    isLogged: boolean
}

export type contextType = {
    user:userInfo | null
    setUser: React.Dispatch<React.SetStateAction<userInfo|null>>
}

export const Context = createContext({} as contextType) // take input of type contextType

type contextProvider = { // component
    children: React.ReactNode
}

export const Providecontext = ({children}:contextProvider) => {    
    const [user, setUser] = useState<userInfo | null>(null) // user accept data of null | userInfo type
    return (
      <div>
          <Context.Provider value={{user,setUser}}>
            {children}
          </Context.Provider>
      </div>
    )
  }