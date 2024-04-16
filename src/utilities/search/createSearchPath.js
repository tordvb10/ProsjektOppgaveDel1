import fs from "fs"
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
fs.writeFileSync("./src/utilities/jsonfiles/createSearchPath.json",JSON.stringify({data:attackKEY}))
