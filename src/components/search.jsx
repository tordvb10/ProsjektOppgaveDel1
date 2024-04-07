import React, { useState } from "react";
import { searchArticles } from "../utilities/search/searchUtil";

const SearchField = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const newSearch = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    const filteredResults = searchItems(newQuery);
    setResults(filteredResults);
  };

  return (
    <div>
      <input type="text" value={query} onChange={newSearch} />
      <div>
        {results.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>Author: {item.author}</p>
            <p>Slug: {item.slug}</p>
            <p>Tags: {item.tagList.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchField;
