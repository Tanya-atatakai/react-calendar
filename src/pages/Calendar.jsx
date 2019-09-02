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

function getMonthDays(month: number, year: nummber) {

  let date = new Date(year, month);
  const currentWeeksDay = date.getDay() || 7;

  let days = [];

  // добавляем недостающие дни с предыдущего месяца
  // до начала текущего (если он начинается не с понедельника)
  if (currentWeeksDay !== 1) {
    const previousMonthLastDay = new Date(new Date(year, month).setDate(0)).getDate();
    for (let i = 0; i < currentWeeksDay - 1; i++) {
      days.unshift(previousMonthLastDay - i);
    }
  }

  // добавляем дни самого месяца
  while (date.getMonth() === month) {
    days.push(date.getDate());
    date.setDate(date.getDate() + 1);
  }

  // дополняем последнюю неделю днями следующего месяца
  if (date.getDay() !== 0) {
    for (let day = (date.getDay() || 7) - 1; day < 7; day++) {
      days.push(day);
    }
  }

  let weeks = {};
  const weeksNumber = days.length / 7;

  // группируем дни по неделям
  for (let i = 0; i < days.length; i++) {
    const week = Math.trunc(i / 7);
    weeks[week] = weeks[week] ? weeks[week].concat(days[i]) : [days[i]];
  }

  return [...Array(days.length / 7)].map((_, row) => (
    <tr key={row}>
      {[...Array(7)].map((_, cell) => (
        <td className="day" key={`${row} - ${cell}`}>{weeks[row][cell]}</td>
      ))}
    </tr>
  ));

  // return 
  //   days.map((day, cell) => (
  //     <td className="day" key={cell}>{day}</td>
  // ));
}

// function getDay(date) { // получить номер дня недели, от 0(пн) до 6(вс)
//   var day = date.getDay();
//   if (day == 0) day = 7;
//   return day - 1;
// }

// function getNextMonth() {
//   let { month, year } = this.getState();

//   if (month === monthsPerYear) {
//     month = 1;
//     year += 1;
//   } else {
//     month += 1;
//   }

//   return { month, year };
// }

// function getPrevMonth() {
//   let { month, year } = this.getState();

//   if (month === 1) {
//     month = monthsPerYear;
//     year -= 1;
//   } else {
//     month -= 1;
//   }

//   return { month, year };
// }

const weeksDayNames = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
const weeksDays = weeksDayNames.map((day, i) => (
  <th className="day-name" key={i}>{day}</th>
));

export default () => {
  const [month, setMonth] = useState(now.getMonth());
  const [year, setYear] = useState(now.getFullYear());
  const monthDays = useMemo(() => getMonthDays(month, year), [month, year]);
  return (
    <MainTemplate>
      <nav className="navigation">
        <Button text="<" appearance="subtle" />
        <span className="navigation__selected-date">
          {getIntlDate(month, year)}
        </span>
        <Button text=">" appearance="subtle" />
        {/* <Button text="Сегодня" appearance="subtle" /> */}
      </nav>
      <table className="calendar">
        <thead>
          <tr>
            {weeksDays}
          </tr>
        </thead>
        <tbody>
          {monthDays}
        </tbody>
      </table>
    </MainTemplate>
  );
}
