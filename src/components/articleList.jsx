import React, { useState } from "react";
import { fetchAPI } from "../hook/fetchAPI";
import { Searchbar } from "./Searchbar"; // Make sure this path is correct
import style from "./articleList.module.css";

export const ArticleList = () => {
  const [isLoading, articles, error] = fetchAPI("/articles");
  const [filteredArticles, setFilteredArticles] = useState([]);

  // This effect updates the filtered articles whenever the articles change.
  React.useEffect(() => {
    setFilteredArticles(articles);
  }, [articles]);

  const searchArticles = (query) => {
    if (!articles) return;

    const lowercasedQuery = query.toLowerCase();
    const filtered = articles.filter((article) => {
      return (
        article.name.toLowerCase().includes(lowercasedQuery) ||
        article.slug.toLowerCase().includes(lowercasedQuery) ||
        article.author.toLowerCase().includes(lowercasedQuery) ||
        (article.tags &&
          article.tags.some((tag) =>
            tag.toLowerCase().includes(lowercasedQuery)
          ))
      );
    });

    setFilteredArticles(filtered);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Searchbar onSearch={searchArticles} />
      <div className={style.articleList}>
        <ul>
          {filteredArticles &&
            filteredArticles.map((article) => (
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
                </ul>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
