import * as FETCH from "./RoutingFetches.js"
import * as DATA from "../jsonfiles/single-step-function.json" with { type: "json" };
console.log(FETCH)
console.log(Object.keys(DATA))
const my_slug = DATA.default[0].slug
console.log(my_slug)
const obj = await FETCH.fetches(`/articles/${my_slug}`)
console.log(obj)
//const DataArray = FETCH.fetchSortByKeys(["slug","createdAt","tagList"],obj.articles)
//FETCH.fetchSaveKeysToJson(`${FETCH.standarPath}use-functions-step-by-step.json`,DataArray)
//FETCH.fetchToJson(`${FETCH.standarPath}single-step-function.json`,["slug","createdAt","tagList"],obj.articles)