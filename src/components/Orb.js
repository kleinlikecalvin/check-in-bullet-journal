import React from "react";
import "./Orb.css";

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
