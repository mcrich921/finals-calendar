import React, { useState } from "react";

function SubjectFilter({
  subjects,
  selectedSubject,
  onSubjectChange,
  onSearchChange,
}) {
  const [searchTerm, setSearchTerm] = useState(""); // State for search input

  // Handle search term change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearchChange(e.target.value); // Prop to pass search term to parent component
  };

  return (
    <div className="filters">
      <div className="subject-filter-container">
        <label htmlFor="subject-filter">Filter by Subject: </label>
        <select
          id="subject-filter"
          className="subject-filter"
          value={selectedSubject}
          onChange={onSubjectChange}
        >
          <option value="all">All</option>
          {subjects.map((subject, index) => (
            <option key={index} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      {/* Class Name Search Bar */}
      <div className="search-bar-container">
        <label htmlFor="class-name-search">Search Classes: </label>
        <input
          type="text"
          id="class-name-search"
          placeholder="Search for a class"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
}

export default SubjectFilter;
