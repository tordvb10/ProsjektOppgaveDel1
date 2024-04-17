import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import style from "./ArticleBox.module.css";
import styletag from "./SearchBox.module.css";

export function ArticleBox(props) {
  const article = props.ArticleElement;

  const formattedDate = format(new Date(article.createdAt), "do MMMM yyyy");

  return (
    <div className={style.ArticleBox}>
      <div className={style.articleMetadata}>
        <div className={style.authoBox}>
          <img src={article.author.image} alt="Author avatar" />
          <h4 className={style.name}>{article.author.username}</h4>
        </div>
      </div>
      <p className={style.data}>{formattedDate}</p>
      <h3 className={style.slugs}>{article.slug}</h3>
      <p className={style.description}>{article.description}</p>
      <p className={style.p_link}>
        <Link to={`/article/${article.slug}`}>READ MORE...</Link>
      </p>
      <ul className={style.taglister}>
        {article.tagList.map((tag) => {
          return (
            <li
              key={tag}
              className={`${style.l_itag} ${
                props.useStateInfo.tags.data.includes(tag)
                  ? styletag.buttentagIsActive
                  : ""
              }`}
            >
              <button className={style.p_tag}>{tag}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
