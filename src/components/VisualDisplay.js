import React from "react";
import DayVisual from "./DayVisual";

export default function VisualDisplay({ moods }) {
  //moods is an array []
  //map through the [moods] to access each {mood}
  //each mood is an object {}
  //each {mood} has a [dates] array
  //access [dates] by using dot notation
  //moods[0].dates
  //map through {mood}.[dates] to get each saved moment
  //the [dates] houses {date} objects
  //use .getHours() to know what to place it on the table
  //use .getMinutes() to decide if it's somewhere in between

  // const downTimes = moods[1].dates;
  // console.log(downTimes[1].getMinutes());

  return (
    <div className="VisualDisplay">
      {/*
          VALUE 1: Most felt in [CURRENT YEAR]
            - Need to create a test case in order to make this since I dont have a years worth of data on hand
            - One cont that is filled span's (allMoments)
            - try using a for loop to create the allMoments amount of spans
            - Maybe need to use flex so that they fit the container and adjust their size accordingly?
            - Display most felt emotion per day
            - Need to leverage mood.dates[] to calculate day of year and create the year visual
            - const dayOfYear = date =>
              Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
          VALUE 2: Most felt in [CURRENT SEASON]
            - Need to create a test case in order to make this since I dont have a seasons worth of data on hand
            - One cont with three (month) div's
            - Inside each month show the proper amount of days as small squares (Hopper)
            - If a day was skipped figure out a default color to indicate no data
            - Otherwise make the color of the day whatever emotion was felt most
          ---->>>>>> VALUE 3: THIS WEEK
            - Need to create a test case in order to make this since I dont have a weeks worth of data on hand
            - Show gradient of all felt emotions?
              https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient
            - Make it possible to click on day for more details
            - Do a bar graph that shows each emotion and how many times it was felt.
          ✅ VALUE 4: TODAY
            - Populate either a table or grid with all of the emotions tracked in the day
           */}
      <DayVisual moods={moods} />
    </div>
  );
}
