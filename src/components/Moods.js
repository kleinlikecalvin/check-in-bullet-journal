import React from "react";
import Orb from "./Orb";
import "./Moods.css";

export default function Moods({ moods, setAllMoments }) {
  const orbs = moods.map((mood) => (
    <div className="mood" key={mood.id}>
      <Orb
        color={mood.color}
        id={mood.id}
        onClick={() => {
          mood.dates.push(new Date());
          mood.totalMomentsDuringYear++;
          setAllMoments();
        }}
      >
        I feel {mood.id}
      </Orb>
    </div>
  ));
  return <div className="Moods">{orbs}</div>;
}
