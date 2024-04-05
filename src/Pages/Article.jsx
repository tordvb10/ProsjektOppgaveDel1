import { Link, useParams } from "react-router-dom"
import * as DATA from "../utilities/jsonfiles/GET-articles-slug-createdAt-tagList.json" with { type: "json" };
export function Article() {
    const {slug} = useParams()
    console.log(slug)
    return (
        <p>about an article</p>
    )
}