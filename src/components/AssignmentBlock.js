import React from 'react';

const assignments = [
{
  subject: "Accounts",
  teacher: "Rajesh Joshi",
  status: "Pending",
  date: "31st July 2020"
},
{
  subject: "Accounts",
  teacher: "Rajesh Joshi",
  status: "Pending",
  date: "31st July 2020"
},
{
  subject: "Accounts",
  teacher: "Rajesh Joshi",
  status: "Pending",
  date: "31st July 2020"
},
{
  subject: "Accounts",
  teacher: "Rajesh Joshi",
  status: "Pending",
  date: "31st July 2020"
},
{
  subject: "Accounts",
  teacher: "Rajesh Joshi",
  status: "Pending",
  date: "31st July 2020"
},
{
  subject: "Accounts",
  teacher: "Rajesh Joshi",
  status: "Pending",
  date: "31st July 2020"
},
]

const AssignmentBlock = () => {
  return (
      <div className="assignments">
        <span className="fs-18 text-muted text-bold">Assignments</span>
        <select data-testid="select-subject" defaultValue="">
          <option selected>Select Subject</option>
        </select>
        <div style={{maxHeight:'300px', overflow:'auto'}} className="mt-3">
          <table cellSpacing="0" cellPadding="0" border="1" bordercolor="#eceff1" >
            <thead>
              <tr style={{backgroundColor: '#f7f8f9'}}>
                <th>Subject</th>
                <th>Teacher</th>
                <th>Status</th>
                <th>Submission Date</th>
              </tr>
            </thead>
            <tbody>
            {
              assignments.map((assignment, index) => {
                return <tr key={index}>
                  <td>{assignment.subject}</td>
                  <td>{assignment.teacher}</td>
                  <td align="center">{assignment.status}</td>
                  <td>{assignment.date}</td>
                </tr>
              })
            }
            </tbody>
          </table>  
        </div>
      </div>
  )
}

export default AssignmentBlock;