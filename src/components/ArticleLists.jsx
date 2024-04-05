//import React from "react";
//import { fetchAPI } from "../hook/fetchAPI";
import { Link} from "react-router-dom"
import style from "./articleList.module.css";
import {articles} from "../utilities/jsonfiles/GET-articles-ALLKEYS.json"

export function ArticleList() {
  //const [isLoading, articles, error] = fetchAPI("/articles");

  //if (isLoading) return <div>Loading...</div>;
  //if (error) return <div>Error: {error}</div>;
  console.log("Hello World")
  return (
    <>
      <div className={style.articleList}>
        <ul>
          {articles &&
            articles.map((article) => (
              <li key={article.slug}>
                <h4>{article.author}</h4>
                <p>{article.date}</p>
                <h2>{article.name}</h2>
                <h3>{article.slug}</h3>
                <ul>
                  {article.tags &&
                    article.tags.map((tag) => (
                      <li key={tag}>
                        <p>{tag}</p>
                      </li>
                    ))}
                    <p>
                      <Link to={`/article/${article.slug}`}>READ MORE...</Link>
                    </p>
                </ul>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};