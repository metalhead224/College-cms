import React from 'react'
import { Link } from 'react-router-dom'
import SubjectCard from './SubjectCard'

const EigthSemester = () => {
    const subjects=[
        {id:'a', subj:'Stratregic Management'},
        {id:'b', subj:'Routing and Switching'},
        {id:'c', subj:'Digital Economy'},
        {id:'d', subj:'Legal Aspects of Business and Technology'},
      ]
  return (
    <div className='subjects'>
         {subjects.map((sub)=>(
        <SubjectCard name={sub.subj}/>
        ))}
    </div>
  )
}

export default EigthSemester