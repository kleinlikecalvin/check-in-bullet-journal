import React from "react";
import "./Orb.css";
import "./down.css";
import "./anxious.css";
import "./confused.css";
import "./sexy.css";
import "./angry.css";
import "./up.css";
import "./fun.css";

export default function Orb({ color, children, id, onClick }) {
  return (
    <button
      className="Orb"
      style={{ "--orbMainColor": color }}
      id={id}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
}
