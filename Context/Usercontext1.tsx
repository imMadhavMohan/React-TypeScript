import React from 'react'
import { Mycontext1 } from './Mycontext1'
import {Providecontext} from './ContextProvide'

export const Usercontext1 = () => {
  return (
    <div>
        <Providecontext>
            <Mycontext1 />
        </Providecontext>
    </div>
  )
}
