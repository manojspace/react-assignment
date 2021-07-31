import React from 'react';
import Update from './Update.js';
import FileUpload from './FileUpload.js';
import Calendar from './Calendar.js';
import Attendance from './Attendance.js';
import AssignmentBlock from './AssignmentBlock.js';

class MainApp extends React.Component {
	render() {
		return(
			<div className="dashboard">
				<h2 className="headline">Dashboard</h2>
				<Update />
				<Attendance />
				<Calendar />
				<AssignmentBlock />
				<FileUpload />
			</div>
			)
	}
}

export default MainApp;