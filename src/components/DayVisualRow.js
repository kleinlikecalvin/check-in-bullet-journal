import React from "react";
import DayVisualData from "./DayVisualData";
import "./DayVisualRow.css";

export default function DayVisualRow({ moods, test }) {
  // //Hours in a day array
  const hoursOfDay = [];
  for (let hour = 0; hour < 24; hour++) {
    hoursOfDay.push(hour);
  }
  const hours = hoursOfDay.map((hour) => {
    return (
      <th key={hour} className="hoursOfDay">
        {hour}h
      </th>
    );
  });

  //Mood row with data
  const moodRow = moods.map((mood) => {
    return (
      <tr key={mood.id}>
        <th className="moodTableHead">{mood.id}</th>
        <DayVisualData
          test={test}
          hours={hoursOfDay}
          color={mood.color}
          mood={mood}
        />
      </tr>
    );
  });

  return (
    <tbody className="DayVisualRow">
      {moodRow}
      <tr>
        <th style={{ border: "none" }}></th>
        {hours}
      </tr>
    </tbody>
  );
}
