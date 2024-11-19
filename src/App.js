import React from "react";
import ClassScheduler from "./components/ClassScheduler";
import "./styles/styles.css";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import GCalButton from "./components/GCalButton";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Finals Calendar</h1>
        <p>
          Your finals schedule, made easier. <br />
          Click on selected classes to add to Google Calendar.
        </p>
      </header>
      <main>
        <ClassScheduler />
        {/* For Vercel */}
        <SpeedInsights />
        <Analytics />
      </main>
    </div>
  );
}

export default App;
