import React from "react";
import "./Data.css";

export default function Data({ allMoments, moods }) {
  //need moods array to access the id and totalMoments
  //map through moods to create <li>'s
  //need allMoments to dynamically display the total moments for the year
  //need to figure out something that will handle the remaining days of the year
  //separate the Text and Visual into separate components

  const moodCount = moods.map((mood) => {
    return (
      <li key={mood.id}>
        I had {mood.totalMomentsDuringYear} moments that I was {mood.id} this
        year.
      </li>
    );
  });

  return (
    <div className="Data">
      <details>
        <summary>Text</summary>{" "}
        <ul className="text">
          <li>Total moments recorded this year : {allMoments}</li>
          <li>Days left in current year</li>
          {moodCount}
        </ul>
      </details>

      <details>
        <summary>Visual</summary>
        <table>
          <tbody>
            <tr>
              <th>Mood</th>
              <td>*</td>
              <td>*</td>
            </tr>
            <tr>
              <th>Mood</th>
              <td>*</td>
              <td>o</td>
              <td>*</td>
            </tr>
            <tr>
              <th>o</th>
              <th>12a</th>
              <th>1a</th>
              <th>2a</th>
            </tr>
          </tbody>
        </table>
      </details>
    </div>
  );
}
