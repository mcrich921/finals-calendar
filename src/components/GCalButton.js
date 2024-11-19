import React, { useState, useEffect } from "react";
import "../styles/calendar.css";

function GCalButton() {
  return (
    <div>
      <button className="calendar-button">
        <img src="/gcalicon.png" alt="Google Calendar" class="calendar-icon" />
      </button>
    </div>
  );
}

export default GCalButton;
