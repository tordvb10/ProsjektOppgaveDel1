import fs from "fs"
import { searchArrays } from "./searchArrays.js";
import articlesOBJ from "../jsonfiles/GET-articles-ALLKEYS.json" assert {type: "json"}
import DATAattackKEY from "../jsonfiles/createSearchPath.json" assert {type: "json"}
console.log(DATAattackKEY)
const articles = articlesOBJ.articles
const attackKEY = DATAattackKEY.data
let OBJ = {}
articles.map((article)=>{
    attackKEY.map((iterateKEY)=>{
        OBJ = searchArrays(OBJ,iterateKEY,article)
    })
})
console.log(OBJ)
fs.writeFileSync("./src/utilities/jsonfiles/searchSortArrays.json",JSON.stringify({data:OBJ}))
//console.log(OBJ)
Object.keys(OBJ.tagList).map((tag)=>{
    if (OBJ.tagList[tag].length > 1){
        console.log(tag)
        console.log(OBJ.tagList[tag])
    }
})