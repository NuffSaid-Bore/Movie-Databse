import React from "react";


const CardWithSearch = ({ title, content, onSearch }) => {
  return (
    <div className="card-container relative">
      <div className="card">
        <div className="card-content">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </div>
      {/* Search Input and Button positioned outside of the card */}
      <div className="search-container absolute left-1/2 transform -translate-x-1/2 -mb-20 z-10">
        <input
          type="text"
          placeholder="Search for movies..."
          className="border border-indigo-300 p-2 rounded-md"
        />
        <button
          onClick={onSearch}
          className="ml-2 p-2 bg-indigo-600 text-white rounded-md"
        >
          Search
        </button>
      </div>
    </div>
  );
};
  

export default CardWithSearch;
