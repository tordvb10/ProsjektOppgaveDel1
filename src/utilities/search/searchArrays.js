export function searchArrays(OBJ,KEYobj,article){
    const Arrays = (KEYobj.isArrays)?(article[KEYobj.key]):([article[KEYobj.key]])
    const slug = article.slug
    Arrays.map((element)=>{
        if (!(KEYobj.key in OBJ)) {
            OBJ[KEYobj.key] = {}
        }
        if(!(element in OBJ[KEYobj.key])){
            OBJ[KEYobj.key][element] = []
        }
        OBJ[KEYobj.key][element].push(slug)        
    })
    return OBJ
}