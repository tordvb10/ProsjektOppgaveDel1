import { useState } from "react";
import { searchArticles } from "../utilities/search/searchArticles.js";

export function SearchField() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function newSearch() {
    const event = document.querySelector("#searchID").value;
    console.log(event)
    const newQuery = event.target.value;
    setQuery(newQuery);

    const filteredResults = searchArticles(newQuery);
    setResults(filteredResults);
  };

  return (
    <div>
      <input
        id="searchID"
        type="text"
        value={query}
        onChange={newSearch}
        placeholder="Search by slug, title, author, or tags"
      />
      <div>
        {results.length > 0 ? (
          results.map((item, index) => (
            <div key={index}>
              <h2>{item.title}</h2>
              <p>Author: {item.author}</p>
              <p>Slug: {item.slug}</p>
              <p>Tags: {item.tagList.join(", ")}</p>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};
