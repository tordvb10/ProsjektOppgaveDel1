import { data as OBJ } from "../utilities/jsonfiles/searchSortArrays.json";
import style from "./SearchBox.module.css";
import { clickTag } from "./javascript/clickTag.js";
export function SearchBox(props) {
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
