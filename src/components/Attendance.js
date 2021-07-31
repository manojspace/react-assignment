import React, {useState} from 'react';
import {KeyboardArrowDown} from '@material-ui/icons';

const Attendance = () => {
  const [semester, setSemester] = useState(5);
  const [attendance, setAttendance] = useState(73);
  const subjects_attendance = [
  {
    subject: "Accounts",
    marks: 78
  },
  {
    subject: "Inc Tax",
    marks: 70
  },
  {
    subject: "Bus. Study",
    marks: 78
  },
  {
    subject: "French",
    marks: 65
  },
  {
    subject: "Economics",
    marks: 75
  },
  {
    subject: "Com. Skill",
    marks: 72
  }
  ]
  return (
    <div className="attendance" data-testid="attendance-card">
      <div className="left-section">
        <div className="fs-19 text-muted text-bold">Attendance</div>
        <div className="fs-25 text-bold mt-3">{attendance}%</div>
        <div className="text-muted mt-5">Semester</div>
        <button className="mt-2">{semester} <KeyboardArrowDown /> </button>
      </div>
      <div className="right-section">
      {
        subjects_attendance.map((item, index) => <AttendanceItem key={index} item={item} />)
      }
      </div>
    </div>
  )
}

export default Attendance;

function AttendanceItem({item}) {
  return(
    <div className="item fs-13">
      {item.subject}
      <div className={item.marks}>{item.marks}/100</div>
    </div>
  )
}