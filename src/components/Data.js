import React from "react";
import TextDisplay from "./TextDisplay";
import VisualDisplay from "./VisualDisplay";
import "./Data.css";

export default function Data({ allMoments, moods }) {
  return (
    <div className="Data">
      <details>
        <summary>Text</summary>
        <TextDisplay allMoments={allMoments} moods={moods} />
      </details>

      <details>
        <summary>Visual</summary>
        <VisualDisplay allMoments={allMoments} moods={moods} />
      </details>
    </div>
  );
}
