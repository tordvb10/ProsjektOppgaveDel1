import { searchArrays } from "./searchArrays.js";
import articlesOBJ from "../jsonfiles/GET-articles-ALLKEYS.json" with {type: "json"}
console.log(articlesOBJ.articles[0])
const articles = articlesOBJ.articles
console.log(articles[0].tagList)
const attackKEY = [
    {
        key:"tagList",
        isArrays: true
    }
]
let OBJ = {}
articles.map((article)=>{
    attackKEY.map((iterateKEY)=>{
        OBJ = searchArrays(OBJ,iterateKEY,article)
    })
})
console.log(OBJ)
Object.keys(OBJ.tagList).map((tag)=>{
    if (OBJ.tagList[tag].length > 1){
        console.log(tag)
        console.log(OBJ.tagList[tag])
    }
})