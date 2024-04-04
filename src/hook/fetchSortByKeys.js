/*
  - endpoints must start with "/"
  This fetch does not work in react. Only for use in node to save id etc. as json files.
  Meaning it does not in the webbrowser, only used for multiple fetches in node, so that only one fetch is needed in the webbrowser.
  import fetchToJson from "src/hook/fetchToJson.js";
*/
export default function fetchSortByKeys(KeysToSave,obj) {
    return obj.map((content)=>{
        let savingThisKey = {}
        KeysToSave.forEach(theKEY => {
            savingThisKey[theKEY] = content[theKEY]
        });
        return savingThisKey
    })
}