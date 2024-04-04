import * as FETCH from "./RoutingFetches.js"
console.log(FETCH)
const obj = await FETCH.fetches("/articles")
const DataArray = FETCH.fetchSortByKeys(["slug","createdAt","tagList"],obj.articles)
FETCH.fetchSaveKeysToJson(`${FETCH.standarPath}use-functions-step-by-step.json`,DataArray)
FETCH.fetchToJson(`${FETCH.standarPath}single-step-function.json`,["slug","createdAt","tagList"],obj.articles)