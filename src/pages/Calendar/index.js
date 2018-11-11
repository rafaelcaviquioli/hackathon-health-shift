import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { events } from'./events';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])


const Calendar = () => (
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <BigCalendar
            events={events}
            step={60}
            showMultiDayTimes
            views={allViews}
            defaultDate={new Date()} 
            onSelectEvent = {(e) => {
              let baita = JSON.stringify(e);
              window.location = '/forms:baita';
            }}
   s       />
        </div>
      </div>
    </div>
  </div>
);

export default Calendar;