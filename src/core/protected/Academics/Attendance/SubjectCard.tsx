import React from 'react'
import { Link } from 'react-router-dom'
import block from '../../../../assets/images/4blocks.png';
import './attendance.scss'
const SubjectCard = (props) => {
  return (
    <Link to='attendancetable'> <div className='main-attendance-card'>
      <img src={block} alt='blocks'/>
{props.name}
    </div> </Link>
  )
}

export default SubjectCard