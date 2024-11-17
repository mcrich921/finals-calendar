import React, { useState, useRef } from "react";

function SubjectFilter({
  subjects,
  selectedSubject,
  onSubjectChange,
  onSearchChange,
}) {
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const searchInputRef = useRef(null); // Reference to the input field

  // Handle search term change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearchChange(e.target.value); // Prop to pass search term to parent component
  };

  // Clear search input and focus the input field
  const clearSearch = () => {
    setSearchTerm(""); // Reset search term state
    onSearchChange(""); // Reset the search term in the parent component
    searchInputRef.current.focus(); // Focus the search input field
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
        {/* <label htmlFor="class-name-search">Search Classes: </label> */}
        <div className="search-input-container">
          <input
            ref={searchInputRef} // Attach the reference to the input
            type="text"
            id="class-name-search"
            placeholder="Search for Classes"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="clear-button" onClick={clearSearch}>
            ✖
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubjectFilter;
