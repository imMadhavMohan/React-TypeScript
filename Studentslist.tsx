import React from 'react'

import { StudentInfo } from './StudentInfo'

export const Studentslist = () => {
  const list = [{
    name:'Madhav',
    class: '12-A',
    age: 23
  },
  {
    name:'Mukund',
    class: '12-B',
    age: 25
  },
  {
    name:'Rohan',
    class: '12-A',
    age: 26
  },
  {
    name:'Raman',
    class: '12-B',
    age: 22
  } ]  

  return (
    <div>
        <StudentInfo names={list} />
    </div>
  )
}
