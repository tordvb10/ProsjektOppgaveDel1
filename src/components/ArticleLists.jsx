import { Link} from "react-router-dom"
import style from "./articleList.module.css";
import {articles} from "../utilities/jsonfiles/GET-articles-ALLKEYS.json"
export function ArticleLists() {
  console.log(style)
  console.log("Hello World")
  return (
    <>
        <ul className={style.master_ul}>
            {
                articles.map((article) => {
                    return (
                        <li key={article.slug}>
                            <h4 className={style.name}>{article.author.username}</h4>
                            <p className={style.data}>{article.createdAt}</p>
                            <h3 className={style.slugs}>{article.slug}</h3>
                            <ul className={style.taglister}>
                                {
                                article.tagList.map((tag) => {
                                    return (
                                        <li key={tag} className={style.l_itag}>
                                            <p className={style.p_tag}>{tag}</p>
                                        </li>
                                    )
                                })
                                }
                                <p className={style.p_link}>
                                    <Link to={`/article/${article.slug}`}>READ MORE...</Link>
                                </p>
                            </ul>
                        </li>
                    )
                })
            }
        </ul>
    </>
  );
};
