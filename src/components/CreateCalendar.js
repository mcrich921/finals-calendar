function CreateCalendar(classItem) {
  console.log(`Adding ${classItem.Name}`);

  const classSubject = classItem.Subject;
  const classNumber = classItem.Number;
  const classSection = classItem.Section;
  const classLocation = classItem.Location;
  const className = classItem.Name;
  const classDate = new Date(classItem.DateTime);

  // replace ampersands with html encodings to not mess up links
  const updatedSubject = classSubject.replace("&", "%26");

  const year = classDate.getFullYear();
  const date = classDate.getDate();
  const month = classDate.getMonth() + 1; // Because zero indexed
  const hour = classDate.getHours();
  const hour_adjusted = hour < 10 ? `0${hour}` : hour;

  const base = "https://calendar.google.com/calendar/u/0/r/eventedit?text=";

  const link = `${base}${updatedSubject}${classNumber}+Final&details=${updatedSubject}${classNumber}-${classSection}:+${className}+Final+Exam&dates=${year}${month}${date}T${hour_adjusted}0000/${year}${month}${date}T${
    hour + 3
  }0000&czt=America/New_York&location=${classLocation}`;
  console.log(link);

  window.open(link, "_blank");
}

export default CreateCalendar;
