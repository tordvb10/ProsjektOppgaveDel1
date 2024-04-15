import { useState } from "react";
import { searchArticles } from "../utilities/search/searchArticles.js";
import {data as OBJ} from "../utilities/jsonfiles/searchSortArrays.json" ;
import style from "./SearchField.module.css";
import { articles } from "../utilities/jsonfiles/GET-articles-ALLKEYS.json";
import { ArticleMaps } from "./ArticleMaps.jsx";
import { filterArticleBySlugs } from "../utilities/search/filterArticleBySlugs.js";
import { newSearch } from "../utilities/search/newSearch.js";
export function SearchField(props) {
  const query = props.useStateInfo.query.data
  function doAnewSearch()   {
    newSearch(props)
  }
  return (
    <div className={style.SearchField}>
      <input
        id="searchID"
        type="text"
        value={query}
        onChange={doAnewSearch}
        placeholder="Search by slug, title, author, or tags"
      />
      
    </div>
  );
}
