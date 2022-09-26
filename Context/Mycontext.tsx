import React,{createContext} from 'react'

import {info} from './info'

// if we're using aliasing no need of createContext<info>()
export const context = createContext({} as info) 



