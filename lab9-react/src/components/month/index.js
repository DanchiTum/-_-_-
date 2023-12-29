import { useContext, useState } from 'react';
import { MONTHS } from '../shared/months';
import './style.css';
import CalendarContext from '../../context/calendar.context';

const WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getDaysInMonth (year, month) {
  return new Date(year, month + 1, 0).getDate();
}

const MonthComponent = () => {
  const { currentDate, setCurrentDate, events } = useContext(CalendarContext);

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const daysCount = getDaysInMonth(currentYear, currentMonth);

  const click = (day) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(day);
      return newDate;
    });
  };

  return (
    <div className='content-wrapper month-wrapper'>
      <div className='header'>{MONTHS[currentMonth]}</div>
      {
        WEEK_DAYS.map(dayName => (<div className='day-name'>{dayName}</div>))
      }
      {
        Array(daysCount).fill(null)
          .map((el, i) => {
            const date = new Date(currentDate);
            date.setDate(i + 1);
            const dayOfWeek = date.getDay();
            const key = `${currentYear}-${currentMonth}-${i + 1}`;
            const hasEvent = events[key] && events[key].length > 0;
            return (
              <div
                onClick={() => click(i + 1)}
                style={{ "--day-col-start": dayOfWeek }}
                className={`content-item day ${hasEvent ? 'has-event' : ''}`}
              >
                {i + 1}
              </div>
            );
          })
      }
    </div>
  );
};

export default MonthComponent;
