import { selectActiveArticles } from "./selectActiveArticles.js"
import { newSearch } from "./newSearch.js"
import style from "../SearchBox.module.css";
export function clickTag(props,tag){
    console.log(props,tag)
    console.log(style)
    const [currentTags, setCurrentTags] = [props.useStateInfo.tags.data,(value) => {props.useStateInfo.tags.funk(value)}]
    console.log(currentTags)
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