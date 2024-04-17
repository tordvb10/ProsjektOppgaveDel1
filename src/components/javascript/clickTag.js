import { selectActiveArticles } from "./selectActiveArticles.js"
import { newSearch } from "./newSearch.js"
export function clickTag(props,tag){
    const [currentTags, setCurrentTags] = [props.useStateInfo.tags.data,(value) => {props.useStateInfo.tags.funk(value)}]
    if (currentTags.includes(tag)){
        currentTags.splice(currentTags.indexOf(tag),1)
        document.querySelector(`#buttontagID${tag}`).classList.remove(style.buttentagIsActive)
    } else {
        currentTags.push(tag)
        document.querySelector(`#buttontagID${tag}`).classList.add(style.buttentagIsActive)
    }
    setCurrentTags(currentTags)
    newSearch(selectActiveArticles(props,currentTags))
}