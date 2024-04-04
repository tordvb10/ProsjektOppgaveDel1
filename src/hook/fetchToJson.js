import fetchSortByKeys from "./fetchSortByKeys.js";
import fetchSaveKeysToJson from "./fetchSaveKeysToJson.js";
export default function fetchToJson(filePath,KeysToSave,obj) {
    fetchSaveKeysToJson(filePath,fetchSortByKeys(KeysToSave,obj))
}