import { useState } from "react";
import { searchArticles } from "../utilities/search/searchArticles.js";
import { ArticleBox } from "./ArticleBox.jsx";
import { ArticleLists } from "./ArticleLists.jsx";
import style from "./articleList.module.css";
import { articles } from "../utilities/jsonfiles/GET-articles-ALLKEYS.json"
export function SearchField() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState(articles);
    function newSearch() {
        const event = document.querySelector("#searchID").value; //firsttime ? "" : 
        console.log(event.length)
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
            <ul className={style.master_ul}>
                {
                    results.map((article) => {
                        return (                        
                            <li key={article.slug}>                            
                                <ArticleBox ArticleElement={article} />
                            </li>
                        )
                    })
                }
            </ul>
        ) : 
        query.length > 0 ? (
            <p> No results found </p>
        ) : (
            <ArticleLists />
        )  
        }
      </div>
    </div>
  );
};
