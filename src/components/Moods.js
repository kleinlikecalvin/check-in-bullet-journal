import React from "react";
import Mood from "./Mood";
import "./Moods.css";

export default function Moods({ moods, allMoments }) {
  const tiles = moods.map((mood) => (
    <div className="mood" key={mood.id}>
      <Mood
        color={mood.color}
        id={mood.id}
        onClick={() => {
          const now = new Date();
          switch (now.getMonth()) {
            case 0:
              allMoments.currentYear.jan.push({ mood: mood.id, instance: now });
              break;
            case 1:
              allMoments.currentYear.feb.push({ mood: mood.id, instance: now });
              break;
            case 2:
              allMoments.currentYear.mar.push({ mood: mood.id, instance: now });
              break;
            case 3:
              allMoments.currentYear.apr.push({ mood: mood.id, instance: now });
              break;
            case 4:
              allMoments.currentYear.may.push({ mood: mood.id, instance: now });
              break;
            case 5:
              allMoments.currentYear.jun.push({ mood: mood.id, instance: now });
              break;
            case 6:
              allMoments.currentYear.jul.push({ mood: mood.id, instance: now });
              break;
            case 7:
              allMoments.currentYear.aug.push({ mood: mood.id, instance: now });
              break;
            case 8:
              allMoments.currentYear.sep.push({ mood: mood.id, instance: now });
              break;
            case 9:
              allMoments.currentYear.oct.push({ mood: mood.id, instance: now });
              break;
            case 10:
              allMoments.currentYear.nov.push({ mood: mood.id, instance: now });
              break;
            case 11:
              allMoments.currentYear.dec.push({ mood: mood.id, instance: now });
              break;
            default:
              console.log("I can't figure out where to put this");
          }
          mood.totalMomentsDuringYear++;
          allMoments.allMomentsTally++;
        }}
      >
        I feel {mood.id}
      </Mood>
    </div>
  ));
  return (
    <div className="Moods flex col">
      <h1>How do you feel?</h1>
      <div className="moodsCont flex">{tiles}</div>
    </div>
  );
}
