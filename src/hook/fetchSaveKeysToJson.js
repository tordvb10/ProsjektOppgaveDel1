import fs from "fs"
export default function fetchSaveKeysToJson(filePath,DataArray){
    fs.writeFileSync(filePath,JSON.stringify(DataArray))
}