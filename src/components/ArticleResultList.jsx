import { ArticleMaps } from "./ArticleMaps"
import style from "./SearchField.module.css";
export function ArticleResultList(props) {
    const results = props.useStateInfo.results.data
    return (
        <div className={style.div_master}>
            <ul className={style.master_ul}>
                <ArticleMaps results={results} useStateInfo={props.useStateInfo} />
            </ul>
        </div>
    )
}