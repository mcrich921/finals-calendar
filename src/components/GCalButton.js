import "../styles/calendar.css";
import CreateCalendar from "./CreateCalendar";

function GCalButton({ cls, onRemove }) {
  return (
    <div className="options">
      <button className="calendar-button" onClick={() => CreateCalendar(cls)}>
        <img src="/gcalicon.png" alt="Google Calendar" class="calendar-icon" />
      </button>
      <button className="delete-button">
        <img
          src="/trashcan.png"
          alt="Remove Class"
          class="delete-icon"
          onClick={() => onRemove(cls)}
        />
      </button>
    </div>
  );
}

export default GCalButton;
