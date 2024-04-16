import { ArticleMaps } from "./ArticleMaps"
import style from "./SearchField.module.css";
export function ArticleResultList(props) {
    const results = props.useStateInfo.results.data
    return (
        <div>
            <ul className={style.master_ul}>
                <ArticleMaps results={results} />
            </ul>
        </div>
    )
}