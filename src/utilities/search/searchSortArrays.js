import fs from "fs"
import { searchArrays } from "./searchArrays.js";
import articlesOBJ from "../jsonfiles/GET-articles-ALLKEYS.json" with {type: "json"}
const articles = articlesOBJ.articles
const attackKEY = [
    {
        key: ["tagList"],
        isArrays: true
    },
    {
        key: ["favoritesCount"],
        isArrays: false
    },
    {
        key: ["author","username"],
        isArrays: false
    }
]
let OBJ = {}
articles.map((article)=>{
    attackKEY.map((iterateKEY)=>{
        OBJ = searchArrays(OBJ,iterateKEY,article)
    })
})
console.log(OBJ)
fs.writeFileSync("./src/utilities/jsonfiles/searchSortArrays.json",JSON.stringify(OBJ))
//console.log(OBJ)
Object.keys(OBJ.tagList).map((tag)=>{
    if (OBJ.tagList[tag].length > 1){
        console.log(tag)
        console.log(OBJ.tagList[tag])
    }
})