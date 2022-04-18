import React from "react";

export default function DaysRemaining() {
  const msInOneDay = 86400000;
  const today = new Date();
  const currentYear = today.getFullYear();
  const newYear = new Date(`01/01/${currentYear + 1}`);
  const daysLeft = Math.round(
    (newYear.getTime() - today.getTime()) / msInOneDay
  );
  return (
    <li>
      There are {daysLeft} days left in {currentYear}
    </li>
  );
}
