import { data as OBJ } from "../../utilities/jsonfiles/searchSortArrays.json";
import { articles } from "../../utilities/jsonfiles/GET-articles-ALLKEYS.json";
export function selectActiveArticles(props,ByTags){
    const setCurrentSlugs = (value) => {props.useStateInfo.currentSlugs.funk(value)}
    let new_slugs = []
    if (ByTags.length === 0) {
        new_slugs = articles.map((article)=>{return article.slug})
    } else {
        new_slugs = []
        ByTags.map((tag)=>{
            OBJ.tagList[tag].map((slug)=>{
                if (!new_slugs.includes(slug)){
                    new_slugs.push(slug)
                }
            })
        })
    }
    setCurrentSlugs(new_slugs)
    props.useStateInfo.currentSlugs.data = new_slugs
    props.useStateInfo.tags.data = ByTags
    return props
}