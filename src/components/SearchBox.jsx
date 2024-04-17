import { data as OBJ } from "../utilities/jsonfiles/searchSortArrays.json";
import { articles } from "../utilities/jsonfiles/GET-articles-ALLKEYS.json";
import style from "./SearchBox.module.css";
import { newSearch } from "../utilities/search/newSearch.js";
export function SearchBox(props) {
    const setCurrentSlugs = (value) => {props.useStateInfo.currentSlugs.funk(value)}
    const [currentTags, setCurrentTags] = [props.useStateInfo.tags.data,(value) => {props.useStateInfo.tags.funk(value)}]
    function selectActiveArticles(ByTags){
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
    }
    function clickTag(tag){
        if (currentTags.includes(tag)){
            currentTags.splice(currentTags.indexOf(tag),1)
            document.querySelector(`#buttontagID${tag}`).classList.remove(style.buttentagIsActive)
        } else {
            currentTags.push(tag)
            document.querySelector(`#buttontagID${tag}`).classList.add(style.buttentagIsActive)
        }
        setCurrentTags(currentTags)
        selectActiveArticles(currentTags)
        newSearch(props)
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
                                onClick={() => clickTag(tag)} 
                                key={tag}>{tag}
                            </button>
                        )
                    }
                })
            }
        </div>
    )
}
