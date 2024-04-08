import { Link, useParams } from "react-router-dom"
import {articles} from "../utilities/jsonfiles/GET-articles-ALLKEYS.json"
export function Article() {
    const {slug} = useParams()
    const article = articles.find((article)=>{article.slug ===slug})
    console.log(articles)
    console.log(article)

    console.log(slug)
    return (
        <main>
            <h1>about an article</h1>
            <p>{slug} <br />
            {}
            </p>
        </main>
    )
}