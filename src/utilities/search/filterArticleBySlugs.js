import { articles } from "../jsonfiles/GET-articles-ALLKEYS.json";
export function filterArticleBySlugs(currentSlugs){
    return articles.filter((article)=>{
        return currentSlugs.includes(article.slug)
    })
}