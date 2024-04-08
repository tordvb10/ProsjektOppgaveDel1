import { useState } from "react";
import { searchArticles } from "../utilities/search/searchArticles.js";

export function SearchField() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function newSearch() {
    const event = document.querySelector("#searchID").value;
    setQuery(event);

    const filteredResults = searchArticles(event);
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
          results.map((item, index) => {
            return (
                <div key={index}>
                    {item.slug}
                    {console.log(item)}
                </div>
          )
        })
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};
