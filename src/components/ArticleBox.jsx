import style from "./ArticleBox.module.css";
import { Link } from "react-router-dom";
export function ArticleBox(props) {
  const article = props.ArticleElement;
  return (
    <>
      <h4 className={style.name}>{article.author.username}</h4>
      <p className={style.data}>{article.createdAt}</p>
      <h3 className={style.slugs}>{article.slug}</h3>
      <ul className={style.taglister}>
        {article.tagList.map((tag) => {
          return (
            <li key={tag} className={style.l_itag}>
              <p className={style.p_tag}>{tag}</p>
            </li>
          );
        })}
        <p className={style.p_link}>
          <Link to={`/article/${article.slug}`}>READ MORE...</Link>
        </p>
      </ul>
    </>
  );
}
