// Trying to make use of Google Calendar API, I was not able to get it to work well
// function CreateCalendar({ myclasses, session }) {
//   function addHours(date, hours) {
//     const hoursToAdd = hours * 60 * 60 * 1000;
//     date.setTime(date.getTime() + hoursToAdd);
//     return date;
//   }

//   async function createCalendarEvent() {
//     console.log("Creating calendar event");
//     if (myclasses.length > 0) {
//       const classSubject = myclasses[0].Subject;
//       const classNumber = myclasses[0].Number;
//       const classSection = myclasses[0].Section;
//       const classLocation = myclasses[0].Location;
//       const className = myclasses[0].Name;
//       const classDate = new Date(myclasses[0].DateTime);
//       const classDateEnd = addHours(classDate, 3);

//       const event = {
//         "summary": `${classSubject}${classNumber} Final Exam`,
//         "location": classLocation,
//         "description": `Final for ${classSubject}${classNumber}-${classSection}: ${className}`,
//         "start": {
//           "dateTime": classDate.toISOString(),
//           "timeZone": "America/New_York",
//         },
//         "end": {
//           "dateTime": classDateEnd.toISOString(),
//           "timeZone": "America/New_York",
//         },
//       };
//       console.log(JSON.stringify(event));
//       await fetch(
//         "https://www.googleapis.com/calendar/v3/calendars/primary/events",
//         {
//           method: "POST",
//           headers: {
//             "Authorization": `Bearer ${session.access_token}`
//           },
//           body: JSON.stringify(event),
//         }
//       )
//         .then((data) => {
//           return data.json();
//         })
//         .then((data) => {
//           console.log(data);
//           alert("Event Created!");
//         });
//     } else {
//       console.log("No classes selected.");
//     }
//   }

//   // Creates calendar invite for first item in

//   return <button onClick={createCalendarEvent}>Add to Calendar</button>;
// }
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
