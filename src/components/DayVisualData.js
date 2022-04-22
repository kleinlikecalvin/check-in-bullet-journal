import React, { Fragment } from "react";

export default function DayVisualData({ test, hours, color, mood }) {
  const currentDate = new Date();

  let currentMonthArrayOfMoments;
  switch (currentDate.getMonth()) {
    case 0:
      currentMonthArrayOfMoments = mood.currentYear.jan;
      break;
    case 1:
      currentMonthArrayOfMoments = mood.currentYear.feb;
      break;
    case 2:
      currentMonthArrayOfMoments = mood.currentYear.mar;
      break;
    case 3:
      currentMonthArrayOfMoments = mood.currentYear.apr;
      break;
    case 4:
      currentMonthArrayOfMoments = mood.currentYear.may;
      break;
    case 5:
      currentMonthArrayOfMoments = mood.currentYear.jun;
      break;
    case 6:
      currentMonthArrayOfMoments = mood.currentYear.jul;
      break;
    case 7:
      currentMonthArrayOfMoments = mood.currentYear.aug;
      break;
    case 8:
      currentMonthArrayOfMoments = mood.currentYear.sep;
      break;
    case 9:
      currentMonthArrayOfMoments = mood.currentYear.oct;
      break;
    case 10:
      currentMonthArrayOfMoments = mood.currentYear.nov;
      break;
    case 11:
      currentMonthArrayOfMoments = mood.currentYear.dec;
      break;
    default:
      console.log("Error: I can't figure out what month it is.");
  }
  let hoursOfMomentCapturedToday = new Set();
  currentMonthArrayOfMoments.map((dateObj) => {
    if (dateObj.getDate() === currentDate.getDate()) {
      return hoursOfMomentCapturedToday.add(dateObj.getHours());
    }
  });
  const hourlyData = hours.map((num) => {
    if (hoursOfMomentCapturedToday.has(num)) {
      return <td key={num} style={{ backgroundColor: color }}></td>;
    } else {
      return <td key={num} style={{ backgroundColor: "black" }}></td>;
    }
  });
  return <Fragment>{hourlyData}</Fragment>;
}
