import { useState } from "react";
import { searchArticles } from "../utilities/search/searchArticles.js";
import style from "./SearchField.module.css";
import { articles } from "../utilities/jsonfiles/GET-articles-ALLKEYS.json";
import { ArticleMaps } from "./ArticleMaps.jsx";
export function SearchField(props) {
  const [currentSlugs,setCurrentSlugs] = [props.useStateInfo.currentSlugs.data,(value) => {props.useStateInfo.currentSlugs.funk(value)}]
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(filterArticleBySlugs(articles,currentSlugs));
  function newSearch() {
    const event = document.querySelector("#searchID").value;
    setQuery(event);
    const filteredResults = searchArticles(event,filterArticleBySlugs(articles,currentSlugs));
    console.log(filteredResults)
    let final_results = filteredResults;
    if (filteredResults.length === 0 && query.length > 0) {
      final_results = null;
    } else if (query.length === 0 && filteredResults.length > 0) {
      final_results = filterArticleBySlugs(articles,currentSlugs);
    }
    setResults(final_results);
  }
  function filterArticleBySlugs(articles,currentSlugs){
    return articles.filter((article)=>{
      return currentSlugs.includes(article.slug)
    })
  }
  return (
    <div className={style.SearchField}>
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
