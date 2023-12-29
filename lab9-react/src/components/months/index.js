import { useContext, useState } from 'react';
import './style.css';
import CalendarContext from '../../context/calendar.context';
import { MONTHS } from '../shared/months';

const MonthsComponent = () => {

  const { setCurrentDate, currentDate, events } = useContext(CalendarContext);

  const click = (index) => {
    setCurrentDate((preCurrentDate) => {
      const newDate = new Date(preCurrentDate);
      newDate.setMonth(index);
      return newDate;
    });
  };

  return (
    <div className='months-wrapper content-wrapper'>
      <div className='header'>{MONTHS[currentDate.getMonth()]}</div>
      {
        MONTHS.map((month, i) => {
          const key = `${currentDate.getFullYear()}-${i}`;
          const hasEvent = Object.keys(events).some(eventKey => eventKey.startsWith(key));
          return (
            <div
              className={`month content-item ${hasEvent ? 'has-event' : ''}`}
              onClick={() => click(i)}
            >
              {month}
            </div>
          );
        })
      }
    </div >
  );
};

export default MonthsComponent;
