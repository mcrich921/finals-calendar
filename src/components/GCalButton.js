import "../styles/calendar.css";
import CreateCalendar from "./CreateCalendar";

function GCalButton({ cls }) {
  return (
    <div>
      <button className="calendar-button" onClick={() => CreateCalendar(cls)}>
        <img src="/gcalicon.png" alt="Google Calendar" class="calendar-icon" />
      </button>
    </div>
  );
}

export default GCalButton;
