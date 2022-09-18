import React from 'react'
import { Link } from 'react-router-dom'
import layout from '../../../../assets/images/layout.png'

const ProgramsCard = (props) => {
  return (
   <Link to='semesters'> <div className="main-attendance-card">
   <img src={layout} alt='layout'/>
    {props.name}
    
   </div>
   </Link>
  )
}

export default ProgramsCard