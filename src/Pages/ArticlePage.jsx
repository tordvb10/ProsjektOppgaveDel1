import { useState } from "react";
import { SearchField } from "../components/SearchField.jsx";
import { SearchBox } from "../components/SearchBox.jsx";
import { articles } from "../utilities/jsonfiles/GET-articles-ALLKEYS.json"
import styles from "./ArticlePage.module.css";

export function ArticlePage() {
  const [currentSlugs,setCurrentSlugs] = useState(articles.map((article)=>{return article.slug}))
  const useStateInfo = {
    currentSlugs: {
      data: currentSlugs,
      funk: setCurrentSlugs
    }
  }
  const imports = {
    articles: articles
  }
  return (
    <main className={styles.main}>
      {currentSlugs}
      <h1>This is about all articles</h1>
      <SearchField useStateInfo={useStateInfo} imports={articles} />
      <SearchBox useStateInfo={useStateInfo} imports={articles} />
    </main>
  );
}
