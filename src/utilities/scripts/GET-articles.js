import * as FETCH from "./RoutingFetches.js"
const obj = await FETCH.fetches("/articles")
FETCH.fetchToJson(`${FETCH.standarPath}GET-articles-slug-createdAt-tagList.json`,["slug","createdAt","tagList"],obj.articles)
FETCH.fetchSaveKeysToJson(`${FETCH.standarPath}GET-articles-ALLKEYS.json`,obj)