import {context} from './Mycontext'
import {info} from './info'
import {Usecontext} from './Usecontext'

export const Providecontext = () => {
  const user:info = {name:'Mohan', age:23, city:'Agra', isMarried:false}
  return (
    <div>
        <context.Provider value={user}>
           <h4>Hello How'ru Madhav!</h4> 
           <Usecontext />                    
        </context.Provider>
    </div>
  )
}
