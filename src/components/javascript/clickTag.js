import { selectActiveArticles } from "./selectActiveArticles.js"
import { newSearch } from "./newSearch.js"
export function clickTag(props,tag){
    const [currentTags, setCurrentTags] = [props.useStateInfo.tags.data,(value) => {props.useStateInfo.tags.funk(value)}]
    if (currentTags.includes(tag)){
        currentTags.splice(currentTags.indexOf(tag),1)
    } else {
        currentTags.push(tag)
    }
    setCurrentTags(currentTags)
    newSearch(selectActiveArticles(props,currentTags))
}