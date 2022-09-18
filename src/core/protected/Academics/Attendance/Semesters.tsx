import React from 'react'
import { Link } from 'react-router-dom'
import './semester.scss'

const Semesters = () => {
    const semesters=[
        {id:1,name:'First Semester'},
        {id:2,name:'Second Semester'},
        {id:3,name:'Third Semester'},
        {id:4,name:'Fourth Semester'},
        {id:5,name:'Fifth Semester'},
        {id:6,name:'Sixth Semester'},
        {id:7,name:'Seventh Semester'},
        {id:8,name:'Eight Semester',},
    ]

  return (
    <div className='semesters'>
        
    {semesters.map((sem)=>( 
    <Link to={ `${sem.id}`}><div className="sem-name">
       
      {sem.name}</div></Link>
     ))}

    </div>
  )
}

export default Semesters