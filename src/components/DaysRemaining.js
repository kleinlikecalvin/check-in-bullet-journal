import React from "react";

export default function DaysRemaining() {
  const msInOneDay = 86400000;
  const today = new Date();
  const currentYear = today.getFullYear();
  const newYearsEve = new Date(`12/31/${currentYear}`);
  const daysLeft = Math.ceil(
    (newYearsEve.getTime() - today.getTime()) / msInOneDay
  );
  return (
    <li>
      There are {daysLeft} days left in {currentYear}
    </li>
  );
}
