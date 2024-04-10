import style from "./ArticleLists.module.css";
import { articles } from "../utilities/jsonfiles/GET-articles-ALLKEYS.json";
import { ArticleBox } from "./ArticleBox.jsx";
export function ArticleLists() {
  return (
    <>
      <ul className={style.master_ul}>
        {articles.map((article) => {
          return (
            <li key={article.slug}>
              <ArticleBox ArticleElement={article} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
