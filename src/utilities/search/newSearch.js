import { filterArticleBySlugs } from "./filterArticleBySlugs.js";
import { searchArticles } from "./searchArticles.js";
export function newSearch(props) {
    const currentSlugs = props.useStateInfo.currentSlugs.data
    const [query, setQuery] = [props.useStateInfo.query.data,(value) => {props.useStateInfo.query.funk(value)}]
    const setResults = (value) => {props.useStateInfo.results.funk(value)}
    const event = document.querySelector("#searchID").value;
    setQuery(event);
    console.log(currentSlugs)
    const filteredResults = searchArticles(event,filterArticleBySlugs(currentSlugs));
    console.log(filteredResults)
    let final_results = filteredResults;
    console.log(final_results)
    console.log(query)
    if (filteredResults.length === 0 && query.length > 0) {
      final_results = null;
    } else if (query.length === 0 && filteredResults.length > 0) {
      final_results = filterArticleBySlugs(currentSlugs);
    }
    console.log(final_results)
    console.log("!!!SET RESULT!!!!!")
    setResults(final_results);
}
  