import { useState } from "react";
import { searchArticles } from "../utilities/search/searchArticles.js";
import style from "./SearchField.module.css";
import { articles } from "../utilities/jsonfiles/GET-articles-ALLKEYS.json";
import { ArticleMaps } from "./ArticleMaps.jsx";
export function SearchField() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(articles);
  function newSearch() {
    const event = document.querySelector("#searchID").value;
    setQuery(event);
    const filteredResults = searchArticles(event);
    let final_results = filteredResults;
    if (filteredResults.length === 0 && query.length > 0) {
      final_results = null;
    } else if (query.length === 0 && filteredResults.length > 0) {
      final_results = articles;
    }
    setResults(final_results);
  }
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
        <ul className={style.master_ul}>
          <ArticleMaps results={results} />
        </ul>
      </div>
    </div>
  );
}
