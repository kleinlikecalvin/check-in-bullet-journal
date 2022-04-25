import React from "react";
import Moods from "./components/Moods";
import VisualDisplay from "./components/VisualDisplay";
import Head from "./components/Head";
import "./App.css";

export default function App() {
  //Mood object constructor
  function Mood(id, color) {
    this.id = id;
    this.color = `#${color}`;
    this.totalMomentsDuringYear = 0;
    this.currentYear = {
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
    };
  }

  //Moods state handling
  const [down, setDown] = React.useState(new Mood("down", "A3C4F3"));
  const [anxious, setAnxious] = React.useState(new Mood("anxious", "FBF8CC"));
  const [neutral, setNeutral] = React.useState(new Mood("neutral", "FDE4CF"));
  const [confused, setConfused] = React.useState(
    new Mood("confused", "FFCFD2")
  );
  const [sexy, setSexy] = React.useState(new Mood("sexy", "F1C0E8"));
  const [angry, setAngry] = React.useState(new Mood("angry", "D2D2CF"));
  const [up, setUp] = React.useState(new Mood("up", "B9FBC0"));
  const [fun, setFun] = React.useState(new Mood("fun", "CFBAF0"));

  const moods = [up, down, fun, anxious, neutral, confused, sexy, angry];

  //All moments for the year
  const [allMoments, setAllMoments] = React.useState(0);

  return (
    <div className="App">
      <Head allMoments={allMoments} moods={moods} />
      <VisualDisplay moods={moods} />
      <Moods
        moods={moods}
        setAllMoments={() => setAllMoments(allMoments + 1)}
      />
    </div>
  );
}
