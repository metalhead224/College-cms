import React from 'react'
import { Outlet } from 'react-router-dom';
import ProgramsCard from './ProgramsCard';
import "./attendance.scss";
const MainAttendance = () => {
    const mgmt = [
        { id: 1, pro: "BCIS" },
        { id: 2, pro: "BBA" },
        { id: 3, pro: "BHCM" },
        { id: 4, pro: "BBA-BI" },
      ];
      const science = [
        { id: 1, pro: "BPH" },
        { id: 2, pro: "B.sc. Nursing" },
        { id: 3, pro: "B.sc. MB" },
        { id: 4, pro: "B.sc. MM" },
        { id: 5, pro: "B.sc MLT" },
      ];
  return (
    <div className='main-attendance'>
        <div className="faculty">
        <div className="faculty-title">Management</div>
        <div className="faculty-body">
        
        {mgmt.map((mg) => (
           <ProgramsCard name={mg.pro}/>
        ))}
        
      </div>
      
        </div>

        <Outlet/>
      
        
       
        <div className="faculty">
        <div className="faculty-title">Science and Technology</div>
        <div className="faculty-body">
        
        {science.map((sc) => (
        <ProgramsCard name={sc.pro}/>
        ))}

       
      </div>
      <Outlet/>
        </div>
    </div>
  )
}

export default MainAttendance