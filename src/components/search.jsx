import React, { useState } from "react";

export const Searchbar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    onSearch(input);
  };

  return (
    <div>
      <input
        type="text"
        id="search-field"
        name="search-field"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSearch()}
      />
      <button id="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};
