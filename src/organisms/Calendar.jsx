// @flow
import React, { useState, useMemo } from 'react';
import Button from '../atoms/Button';
import MainTemplate from '../templates/Main';

const now = new Date();

function getIntlDate(month: number, year: number) {
  return new Intl.DateTimeFormat(
    'ru-RU',
    { month: 'long', year: 'numeric' }
  ).format(new Date(year, month))
}

function getMonthDays(month: number, year: number) {

  let date = new Date(year, month);
  const currentWeeksDay = date.getDay() || 7;
  let days = [];

  // добавляем недостающие дни с предыдущего месяца
  // до начала текущего (если он начинается не с понедельника)
  if (currentWeeksDay !== 1) {
    const previousMonthLastDay = new Date(new Date(year, month).setDate(0)).getDate();
    for (let i = 0; i < currentWeeksDay - 1; i++) {
      days.unshift(<div className="day day--disabled" key={`previous-${i}`}>{previousMonthLastDay - i}</div>);
    }
  }
  
  // добавляем дни самого месяца
  while (date.getMonth() === month) {
    days.push(
      <div
      className={[
        'day',
        now.getFullYear() === year && now.getMonth() === month && now.getDate() === date.getDate() && 'day--today',
      ].filter(Boolean).join(' ')}
      key={`current-${date.getDate()}`}
      >
        {date.getDate()}
      </div>
    );
    date.setDate(date.getDate() + 1);
  }

  // дополняем последнюю неделю днями следующего месяца
  if (date.getDay() !== 1) {
    for (let day = 0; day <= 7 - (date.getDay() || 7); day++) {
      days.push(<div className="day day--disabled" key={`next-${day}`}>{day + 1}</div>);
    }
  }

  return days;
}

const weeksDayNames = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
const weeksDays = weeksDayNames.map((day, i) => (
  <div className="day-name" key={i}>{day}</div>
));

export default () => {
  const [month, setMonth] = useState(now.getMonth());
  const [year, setYear] = useState(now.getFullYear());
  const monthDays = useMemo(() => getMonthDays(month, year), [month, year]);
  const handleNextMonthClick = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  }
  const handlePrevMonthClick = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  }
  return (
    <>
      <nav className="navigation">
        <Button text="<" appearance="subtle" onClick={handlePrevMonthClick}/>
        <span className="navigation__selected-date">
          {getIntlDate(month, year)}
        </span>
        <Button text=">" appearance="subtle" onClick={handleNextMonthClick}/>
      </nav>
      <div className="calendar">
        {weeksDays}
        {monthDays}
      </div>
    </>
  );
}
