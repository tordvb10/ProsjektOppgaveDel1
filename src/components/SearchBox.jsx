import {data as OBJ} from "../utilities/jsonfiles/searchSortArrays.json" ;
import { useState } from "react";
export function SearchBox(props) {
    const [tag, setTag] = useState("")
    function clickTag(tag){
        console.log("helloWorld")
        console.log(tag)
        console.log(OBJ.tagList[tag])   
    }
    

    return (
        <div className="ButtonWrap">
            {
                Object.keys(OBJ.tagList).map((tag)=>{
                    if (OBJ.tagList[tag].length > 1){
                        console.log(tag)
                        return (
                            <button onClick={clickTag(tag)} key={tag}>{tag}</button>
                        )
                    }
                })
            }
        </div>
    )
}