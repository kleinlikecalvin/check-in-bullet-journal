import React from "react";
import "./Mood.css";

export default function Mood({ color, children, id, onClick }) {
  return (
    <button
      className="Mood"
      style={{ "--moodMainColor": color }}
      id={id}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
}
