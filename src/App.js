import React from "react";
import Moods from "./components/Moods";
import Data from "./components/Data";
import Head from "./components/Head";
import "./App.css";

export default function App() {
  //Mood object constructor
  function Mood(id, color) {
    this.id = id;
    this.color = color;
    this.totalMomentsDuringYear = 0;
    this.dates = [];
  }

  //Mood state handling
  const [down, setDown] = React.useState(new Mood("down", "lightblue"));
  const [anxious, setAnxious] = React.useState(new Mood("anxious", "yellow"));
  const [neutral, setNeutral] = React.useState(
    new Mood("neutral", "peachpuff")
  );
  const [confused, setConfused] = React.useState(
    new Mood("confused", "orange")
  );
  const [sexy, setSexy] = React.useState(new Mood("sexy", "pink"));
  const [angry, setAngry] = React.useState(new Mood("angry", "grey"));
  const [up, setUp] = React.useState(new Mood("up", "palegreen"));
  const [fun, setFun] = React.useState(new Mood("fun", "violet"));

  //All moments for the year
  const [allMoments, setAllMoments] = React.useState(0);

  const moods = [up, down, fun, anxious, neutral, confused, sexy, angry];
  return (
    <div className="App">
      <Head />
      <Moods
        moods={moods}
        setAllMoments={() => setAllMoments(allMoments + 1)}
      />
      <Data allMoments={allMoments} moods={moods} />
    </div>
  );
}
