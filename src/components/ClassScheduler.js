import React, { useState, useEffect } from "react";
import Papa from "papaparse"; // Import PapaParse for CSV parsing
import SubjectFilter from "./SubjectFilter"; // Import the new SubjectFilter component

function ClassScheduler() {
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [classesData, setClassesData] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("all"); // Track selected subject
  const [searchTerm, setSearchTerm] = useState(""); // Track search term for class names

  // Fetch and parse the CSV file when the component mounts
  useEffect(() => {
    Papa.parse("/finals_schedule.csv", {
      download: true,
      header: true,
      complete: (result) => {
        setClassesData(result.data);
      },
      error: (err) => {
        console.error("Error parsing CSV: ", err);
      },
    });
  }, []);

  // Handle class selection or deselection
  const handleClassClick = (classItem) => {
    // adding unique class identifier of name and section
    const classKey = `${classItem.Name}-${classItem.Section}`;

    // Toggle the class in selectedClasses without affecting availableClasses
    if (
      selectedClasses.some((cls) => `${cls.Name}-${cls.Section}` === classKey)
    ) {
      setSelectedClasses((prev) =>
        prev.filter((cls) => `${cls.Name}-${cls.Section}` !== classKey)
      );
    } else {
      setSelectedClasses((prev) => [...prev, classItem]);
    }
  };

  // Filter classes by selected subject and search term
  const filteredClasses = classesData
    .filter(
      (cls) => selectedSubject === "all" || cls.Subject === selectedSubject
    )
    .filter(
      (cls) =>
        cls.Number.toLowerCase().includes(searchTerm.toLowerCase()) || // Match search term with number
        cls.Name.toLowerCase().includes(searchTerm.toLowerCase()) // Match search term with class name
    );

  // Get unique subjects for the dropdown
  const subjects = [...new Set(classesData.map((cls) => cls.Subject))].sort();

  // Handle subject filter change
  const handleSubjectFilterChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  // Function to format 24h time to (Day of Week) Month DayNumber, Year time with AM/PM
  const formatTime = (dateTime) => {
    const date = new Date(dateTime);

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const monthsOfYear = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let hours = date.getHours();
    let minutes = date.getMinutes();
    const day = daysOfWeek[date.getDay()];
    const month = monthsOfYear[date.getMonth()];
    const dayNumber = date.getDate();
    const year = date.getFullYear();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return `${day} ${month} ${dayNumber}, ${year} ${hours}:${minutes} ${ampm}`;
  };

  return (
    <div className="scheduler-container">
      {/* Subject Filter */}
      <SubjectFilter
        subjects={subjects}
        selectedSubject={selectedSubject}
        onSubjectChange={handleSubjectFilterChange}
        onSearchChange={handleSearchChange}
      />

      {/* Flex container for side-by-side layout */}
      <div className="classes-container">
        {/* Available Classes */}
        <div className="available-classes">
          <h2>Available Classes</h2>
          <div className="scrollable-list">
            {filteredClasses.length > 0 ? (
              filteredClasses.map((cls, index) => {
                const classKey = `${cls.Name}-${cls.Section}`;
                return (
                  <div
                    key={index}
                    className={`class-item ${
                      selectedClasses.some(
                        (selected) =>
                          `${selected.Name}-${selected.Section}` === classKey
                      )
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => handleClassClick(cls)} // Handle click to toggle class selection
                  >
                    <div className="class-text">
                      <strong>
                        {cls.Subject}
                        {cls.Number}
                      </strong>
                      -{cls.Section}: {cls.Name}
                      <br />
                      {cls.Professor}
                      <br /> {formatTime(cls.DateTime)}
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No classes found for the selected subject.</p>
            )}
          </div>
        </div>

        {/* Selected Classes */}
        <div className="selected-classes">
          <h2>Selected Classes</h2>
          <div className="scrollable-list">
            {selectedClasses.length > 0 ? (
              <ul>
                {selectedClasses.map((cls) => {
                  const classKey = `${cls.Name}-${cls.Section}`;
                  return (
                    <li key={classKey}>
                      <div className="class-text">
                        <strong>
                          {cls.Subject}
                          {cls.Number}
                        </strong>
                        -{cls.Section}: {cls.Name}
                        <br />
                        {cls.Professor}
                        <br /> {formatTime(cls.DateTime)}
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p>No classes selected.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassScheduler;
