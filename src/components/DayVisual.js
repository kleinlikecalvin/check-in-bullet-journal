import React from "react";
import DayVisualRow from "./DayVisualRow";

export default function DayVisual({ moods }) {
  //SINGLE DAY TEST CASE
  const [moodTest, setMoodTest] = React.useState({
    id: "test",
    color: "red",
    totalMomentsDuringYear: 100,
    currentYear: {
      jan: [],
      feb: [],
      mar: [],
      apr: [],
      may: [],
      jun: [],
      jul: [],
      aug: [],
      sep: [],
      oct: [],
      nov: [],
      dec: [],
    },
  });
  const thisMonth = "Apr";
  moodTest.currentYear.apr = [
    new Date(
      `Fri  ${thisMonth} 21 2022 14:42:20 GMT-0700 (Pacific Daylight Time)`
    ),
    new Date(
      `Fri  ${thisMonth} 22 2022 10:42:20 GMT-0700 (Pacific Daylight Time)`
    ),
    new Date(
      `Fri  ${thisMonth} 22 2022 12:42:20 GMT-0700 (Pacific Daylight Time)`
    ),
    new Date(
      `Fri  ${thisMonth} 22 2022 14:42:20 GMT-0700 (Pacific Daylight Time)`
    ),
    new Date(),
  ];
  return (
    <div className="DayVisual">
      <h2>Day</h2>{" "}
      <table className="DayVisual">
        <DayVisualRow moods={moods} test={moodTest} />
      </table>
    </div>
  );
}
