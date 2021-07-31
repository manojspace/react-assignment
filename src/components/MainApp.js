import React from 'react';
import FileUpload from './FileUpload.js';
import Calendar from './Calendar.js';
import Attendance from './Attendance.js';

class MainApp extends React.Component {
	render() {
		return(
			<div className="dashboard">
				<h2>Dashboard</h2>
				<FileUpload />
				
				<Attendance />
				<Calendar />
			</div>
			)
	}
}

export default MainApp;