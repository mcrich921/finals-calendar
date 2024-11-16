import React from "react";
import ClassScheduler from "./components/ClassScheduler";
import "./styles/styles.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Final Exam Scheduler</h1>
        <p>Select your classes to view your final exam schedule.</p>
      </header>
      <main>
        <ClassScheduler />
      </main>
    </div>
  );
}

export default App;
