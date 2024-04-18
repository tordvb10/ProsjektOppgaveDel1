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
