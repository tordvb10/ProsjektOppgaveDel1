import style from "./ArticleBox.module.css";
import styletag from "./SearchBox.module.css";
import { Link } from "react-router-dom";
export function ArticleBox(props) {
  const article = props.ArticleElement;
  return (
    <div className={style.ArticleBox}>
      <img src={article.author.image} alt="Author avatar" />
      <h4 className={style.name}>{article.author.username}</h4>
      <p className={style.data}>{article.createdAt}</p>
      <h3 className={style.slugs}>{article.slug}</h3>
      <p className={style.p_link}>
        <Link to={`/article/${article.slug}`}>READ MORE...</Link>
      </p>
      <ul className={style.taglister}>
        {article.tagList.map((tag) => {
          return (
            <li key={tag} className={style.l_itag}>
              <button className={`${style.p_tag} ${
                styletag.buttentagIsActive
                //props.useStateInfo.currentTags.data.includes(tag)?styletag.buttentagIsActive:""
              }`}>{tag}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
