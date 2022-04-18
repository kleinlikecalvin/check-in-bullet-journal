import React from "react";
import DaysRemaining from "./DaysRemaining";
import "./TextDisplay.css";

export default function TextDisplay({ allMoments, moods }) {
  const moodCount = moods.map((mood) => {
    if (mood.totalMomentsDuringYear === 1) {
      return (
        <li key={mood.id}>
          I had{" "}
          <span
            style={{
              fontWeight: 600,
              backgroundColor: mood.color,
              padding: "0 2px 0 2px",
            }}
          >
            {mood.totalMomentsDuringYear}
          </span>{" "}
          moment that I was feeling{" "}
          <span
            style={{
              fontWeight: 600,
              backgroundColor: mood.color,
              padding: "0 2px 0 2px",
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
              fontWeight: 600,
              backgroundColor: mood.color,
              padding: "0 2px 0 2px",
            }}
          >
            {mood.totalMomentsDuringYear}
          </span>{" "}
          moments that I was feeling{" "}
          <span
            style={{
              fontWeight: 600,
              backgroundColor: mood.color,
              padding: "0 2px 0 2px",
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
    <ul className="TextDisplay">
      <li>Total moments recorded this year : {allMoments}</li>
      <DaysRemaining />
      {moodCount}
    </ul>
  );
}
