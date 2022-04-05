import React from "react";
import "./Orb.css";

export default function Orb({ color, children }) {
  return (
    <button className="Orb" style={{ "--orbMainColor": color }}>
      <span>{children}</span>
    </button>
  );
}
