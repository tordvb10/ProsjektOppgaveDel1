import { useState } from "react";
import { SearchField } from "../components/SearchField.jsx";
import { SearchBox } from "../components/SearchBox.jsx";
import { ArticleResultList } from "../components/ArticleResultList.jsx";
import { articles } from "../utilities/jsonfiles/GET-articles-ALLKEYS.json"
import styles from "./ArticlePage.module.css";
import { filterArticleBySlugs } from "../utilities/search/filterArticleBySlugs.js";
export function ArticlePage() {
  const [currentSlugs,setCurrentSlugs] = useState(articles.map((article)=>{return article.slug}))
  console.log(currentSlugs)
  const [results, setResults] = useState(filterArticleBySlugs(currentSlugs));
  const [query, setQuery] = useState("");
  const useStateInfo = {
    currentSlugs: {
      data: currentSlugs,
      funk: setCurrentSlugs
    },
    query: {
      data: query,
      funk: setQuery
    },
    results: {
      data: results,
      funk: setResults
    },
  }
  const imports = {
    articles: articles
  }
  return (
    <main className={styles.main}>
      {currentSlugs}
      <h1>This is about all articles</h1>
      <SearchBox useStateInfo={useStateInfo} imports={imports} />
      <SearchField useStateInfo={useStateInfo} imports={imports} />
      <ArticleResultList useStateInfo={useStateInfo} imports={imports} />
    </main>
  );
}
