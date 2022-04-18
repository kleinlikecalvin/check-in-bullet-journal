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
          const now = new Date();
          switch (now.getMonth()) {
            case 0:
              mood.currentYear.jan.push(now);
              break;
            case 1:
              mood.currentYear.feb.push(now);
              break;
            case 2:
              mood.currentYear.mar.push(now);
              break;
            case 3:
              mood.currentYear.apr.push(now);
              break;
            case 4:
              mood.currentYear.may.push(now);
              break;
            case 5:
              mood.currentYear.jun.push(now);
              break;
            case 6:
              mood.currentYear.jul.push(now);
              break;
            case 7:
              mood.currentYear.aug.push(now);
              break;
            case 8:
              mood.currentYear.sep.push(now);
              break;
            case 9:
              mood.currentYear.oct.push(now);
              break;
            case 10:
              mood.currentYear.nov.push(now);
              break;
            case 11:
              mood.currentYear.dec.push(now);
              break;
            default:
              console.log("I can't figure out where to put this");
          }
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
