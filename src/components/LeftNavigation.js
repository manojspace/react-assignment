import React from 'react';

class LeftNavigation extends React.Component {
	render() {
		return(
			<div className="menu">
				<a href="#" className="item">University</a>
				<a href="#" className="item active">Dashboard</a>
				<a href="#" className="item">Calendar</a>
				<a href="#" className="item">Teachers</a>
				<a href="#" className="item">Course</a>
				<a href="#" className="item">Attendance</a>
				<a href="#" className="item">Assignment</a>
			</div>
			)
	}
}

export default LeftNavigation;