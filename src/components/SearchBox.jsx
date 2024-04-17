import { data as OBJ } from "../utilities/jsonfiles/searchSortArrays.json";
import style from "./SearchBox.module.css";
import { newSearch } from "./javascript/newSearch.js";
import { selectActiveArticles } from "./javascript/selectActiveArticles.js";
export function SearchBox(props) {
    const [currentTags, setCurrentTags] = [props.useStateInfo.tags.data,(value) => {props.useStateInfo.tags.funk(value)}]
    function clickTag(props,tag){
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
    function clickingTags(tag) {
        clickTag(props,tag)
    }
    return (
        <div className={style.ButtonWrap}>
            {
                Object.keys(OBJ.tagList).map((tag)=>{
                    if (OBJ.tagList[tag].length > 1){
                        return (
                            <button 
                                id={`buttontagID${tag}`} 
                                className={style.buttontag} 
                                onClick={() => clickingTags(tag)} 
                                key={tag}>{tag}
                            </button>
                        )
                    }
                })
            }
        </div>
    )
}
