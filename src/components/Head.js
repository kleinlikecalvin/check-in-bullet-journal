import React from "react";
import TextDisplay from "./TextDisplay";
import "./Head.css";

export default function Head({ allMoments, moods }) {
  return (
    <div className="Head">
      <TextDisplay allMoments={allMoments} moods={moods} />
    </div>
  );
}
