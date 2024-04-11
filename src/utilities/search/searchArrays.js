export function searchArrays(OBJ,KEYOBJ,article){
    const [new_article,KEYobj] = recrusive_key(article,KEYOBJ)
    const Arrays = (KEYobj.isArrays)?(new_article):([new_article])
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
function recrusive_key(article,KEYobj){
    const Arrays = KEYobj.key
    Arrays.forEach((element) => {
        article = article[element]
    });
    return [article,{key: Arrays.join("_"),isArrays: KEYobj.isArrays}]
}
