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
      `Fri ${thisMonth} 01 2022 01:42:20 GMT-0700 (Pacific Daylight Time)`
    ),
    new Date(
      `Fri  ${thisMonth} 02 2022 02:42:20 GMT-0700 (Pacific Daylight Time)`
    ),
    new Date(
      `Fri  ${thisMonth} 05 2022 03:42:20 GMT-0700 (Pacific Daylight Time)`
    ),
    new Date(
      `Fri  ${thisMonth} 07 2022 04:42:20 GMT-0700 (Pacific Daylight Time)`
    ),
    new Date(
      `Fri  ${thisMonth} 09 2022 05:42:20 GMT-0700 (Pacific Daylight Time)`
    ),
    new Date(
      `Fri  ${thisMonth} 11 2022 06:42:20 GMT-0700 (Pacific Daylight Time)`
    ),
    new Date(
      `Fri  ${thisMonth} 13 2022 07:42:20 GMT-0700 (Pacific Daylight Time)`
    ),
    new Date(
      `Fri  ${thisMonth} 15 2022 08:42:20 GMT-0700 (Pacific Daylight Time)`
    ),
    new Date(
      `Fri  ${thisMonth} 17 2022 09:42:20 GMT-0700 (Pacific Daylight Time)`
    ),
    new Date(
      `Fri  ${thisMonth} 18 2022 10:42:20 GMT-0700 (Pacific Daylight Time)`
    ),
    new Date(
      `Fri  ${thisMonth} 18 2022 11:42:20 GMT-0700 (Pacific Daylight Time)`
    ),
    new Date(
      `Fri  ${thisMonth} 19 2022 12:42:20 GMT-0700 (Pacific Daylight Time)`
    ),
    new Date(
      `Fri  ${thisMonth} 20 2022 13:42:20 GMT-0700 (Pacific Daylight Time)`
    ),
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
    <table className="DayVisual">
      <DayVisualRow moods={moods} test={moodTest} />
    </table>
  );
}
