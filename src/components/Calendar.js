import React from 'react'
import FullCalendar from '@fullcalendar/react';
import timeGridWeek from '@fullcalendar/timegrid';

export default class DemoApp extends React.Component {
	render() {
		return (
			<div className="calendar">
				<FullCalendar
				plugins={[ timeGridWeek ]}
				initialView="timeGridWeek"
				events={[
					{ title: 'event 1', date: '2019-04-01' },
					{ title: 'event 2', date: new Date(), color: 'red' }
					]}
				/>
			</div>
			)
	}
}