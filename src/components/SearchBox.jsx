import { data as OBJ } from "../utilities/jsonfiles/searchSortArrays.json";
import style from "./SearchBox.module.css";
import { clickTag } from "./javascript/clickTag.js";
export function SearchBox(props) {
    function resetTags() {
        if (props.useStateInfo.tags.data.length > 0) {
            const reset_tag = props.useStateInfo.tags.data.shift()
            props.useStateInfo.tags.data = [reset_tag]
            clickTag(props,reset_tag)
        }
    }
    function clickingTags(tag) {
        clickTag(props,tag)
    }
    return (
        <div className={style.ButtonWrap}>
            <button className={style.buttontag} onClick={()=>resetTags()}>Reset tags</button>
            {
                Object.keys(OBJ.tagList).map((tag)=>{
                    if (OBJ.tagList[tag].length > 1){ // if el < 1 => display none
                        return (
                            <button 
                                className={`${style.buttontag} ${
                                    props.useStateInfo.tags.data.includes(tag)
                                      ? style.buttentagIsActive
                                      : ""
                                  }`}
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
