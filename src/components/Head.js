import React from "react";
import DaysRemaining from "./DaysRemaining";
import "./Head.css";

export default function Head({ allMoments, moods }) {
  const moodCount = moods.map((mood) => {
    if (mood.totalMomentsDuringYear === 1) {
      return (
        <li key={mood.id}>
          I had{" "}
          <span
            style={{
              backgroundColor: mood.color,
            }}
          >
            {mood.totalMomentsDuringYear}
          </span>{" "}
          moment that I was feeling{" "}
          <span
            style={{
              backgroundColor: mood.color,
            }}
          >
            {mood.id}
          </span>{" "}
          this year.
        </li>
      );
    } else {
      return (
        <li key={mood.id}>
          I had{" "}
          <span
            style={{
              backgroundColor: mood.color,
            }}
          >
            {mood.totalMomentsDuringYear}
          </span>{" "}
          moments that I was feeling{" "}
          <span
            style={{
              backgroundColor: mood.color,
            }}
          >
            {mood.id}
          </span>{" "}
          this year.
        </li>
      );
    }
  });
  return (
    <ul className="Head">
      <li>Total moments recorded this year : {allMoments.allMomentsTally}</li>
      <DaysRemaining />
      {moodCount}
    </ul>
  );
}
