import {data as OBJ} from "../utilities/jsonfiles/searchSortArrays.json" ;
import { articles } from "../utilities/jsonfiles/GET-articles-ALLKEYS.json"
import style from "./SearchBox.module.css"
import { newSearch } from "../utilities/search/newSearch.js";
export function SearchBox(props) {
    console.log(props.useStateInfo)
    const [currentSlugs,setCurrentSlugs] = [props.useStateInfo.currentSlugs.data,(value) => {props.useStateInfo.currentSlugs.funk(value)}]
    const [currentTags, setCurrentTags] = [props.useStateInfo.tags.data,(value) => {props.useStateInfo.tags.funk(value)}]
    function selectActiveArticles(ByTags){
        console.log(ByTags)
        console.log(ByTags.length)
        let new_slugs = []
        if (ByTags.length === 0) {
            new_slugs = articles.map((article)=>{return article.slug})
            //setCurrentSlugs(articles.map((article)=>{return article.slug}))
        } else {
            new_slugs = []
            console.log(new_slugs)
            ByTags.map((tag)=>{
                OBJ.tagList[tag].map((slug)=>{
                    if (!new_slugs.includes(slug)){
                        new_slugs.push(slug)
                    }
                })
            })
        }
        const set_new_slugs = new_slugs
        console.log(new_slugs)
        console.log(set_new_slugs)
        console.log(currentSlugs)
        console.log(props)
        setCurrentSlugs(set_new_slugs)
        props.useStateInfo.currentSlugs.data = set_new_slugs
        props.useStateInfo.tags.data = ByTags
        console.log(currentSlugs)
    }
    function clickTag(tag){
        console.log(currentTags)
        if (currentTags.includes(tag)){
            currentTags.splice(currentTags.indexOf(tag),1)
            document.querySelector(`#buttontagID${tag}`).classList.remove(style.buttentagIsActive)
        } else {
            currentTags.push(tag)
            document.querySelector(`#buttontagID${tag}`).classList.add(style.buttentagIsActive)
        }
        console.log(currentTags)
        setCurrentTags(currentTags)
        console.log(currentTags)
        console.log(currentSlugs)
        //let current_tags = OBJ.tagList[tag]
        selectActiveArticles(currentTags)
        console.log(currentSlugs)
        console.log(props)
        newSearch(props) // oppdatere props her.
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